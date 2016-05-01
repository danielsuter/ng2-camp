package ch.zuehlke.campplanner.controller;

import ch.zuehlke.campplanner.dao.HotelRepository;
import ch.zuehlke.campplanner.domain.Hotel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/rest/hotels")
public class HotelController {

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
    public void addOrUpdate(@RequestBody Hotel hotel) {
        hotelRepository.save(hotel);
    }

    @Transactional
    @RequestMapping(path = "/{id}",method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") Long id) {
        hotelRepository.delete(id);
    }
}
