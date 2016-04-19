package ch.zuehlke.campplanner.controller;

import ch.zuehlke.campplanner.dao.HotelRepository;
import ch.zuehlke.campplanner.domain.Hotel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedList;
import java.util.List;

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

    // by id
    // alle
    // add
    // update
    // remove
}
