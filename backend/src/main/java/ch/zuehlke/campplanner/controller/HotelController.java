package ch.zuehlke.campplanner.controller;

import ch.zuehlke.campplanner.dao.HotelRepository;
import ch.zuehlke.campplanner.domain.Hotel;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.LinkedList;
import java.util.List;

import static org.apache.commons.lang3.StringUtils.isBlank;
import static org.apache.commons.lang3.StringUtils.isNotBlank;

@RestController
@RequestMapping("/rest/hotels")
public class HotelController {

    public static final String HTTP_PREFIX = "http://";
    @Autowired
    private HotelRepository hotelRepository;

    @Transactional
    @RequestMapping
    public List<Hotel> getAll() {
        List<Hotel> hotels = new LinkedList<>();
        hotelRepository.findAll().forEach(hotels::add);
        return hotels;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Hotel get(@PathVariable("id") Long id) {
        return hotelRepository.findOne(id);
    }

    @Transactional
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Hotel> addOrUpdate(@RequestBody Hotel hotel) {
        if(isBlank(hotel.getName())) {
            return new ResponseEntity<Hotel>(HttpStatus.BAD_REQUEST);
        }

        sanitizeUrls(hotel);

        hotelRepository.save(hotel);
        return new ResponseEntity<>(hotel, HttpStatus.OK);
    }

    private void sanitizeUrls(@RequestBody Hotel hotel) {
        String website = hotel.getWebsite();
        if(isNotBlank(website) && !website.startsWith(HTTP_PREFIX)) {
            hotel.setWebsite(HTTP_PREFIX + website);
        }
        String tripAdvisorUrl = hotel.getTripAdvisorUrl();
        if(isNotBlank(tripAdvisorUrl) && !tripAdvisorUrl.startsWith(HTTP_PREFIX)) {
            hotel.setTripAdvisorUrl(HTTP_PREFIX + tripAdvisorUrl);
        }
        String holidayCheckUrl = hotel.getHolidayCheckUrl();
        if(isNotBlank(holidayCheckUrl) && !holidayCheckUrl.startsWith(HTTP_PREFIX)) {
            hotel.setHolidayCheckUrl(HTTP_PREFIX + holidayCheckUrl);
        }
    }

    @Transactional
    @RequestMapping(path = "/{id}",method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") Long id) {
        hotelRepository.delete(id);
    }
}
