package ch.zuehlke.campplanner.controller;

import ch.zuehlke.campplanner.domain.Hotel;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * Created by dsu on 04.06.2016.
 */
public class HotelSerializationTest {

    @Test
    public void serializeEmptyHotel() throws Exception {
        Hotel hotel = new Hotel();
        ObjectMapper mapper = new ObjectMapper();

        String actual = mapper.writeValueAsString(hotel);
//        assertEquals("", actual);
    }
}
