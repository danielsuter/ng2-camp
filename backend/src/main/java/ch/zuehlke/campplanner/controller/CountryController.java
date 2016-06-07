package ch.zuehlke.campplanner.controller;


import ch.zuehlke.campplanner.domain.Country;
import io.jsonwebtoken.lang.Collections;
import org.hibernate.jpa.criteria.expression.function.AggregationFunction;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/rest/countries")
public class CountryController {

    private final static List<Country> COUNTRIES;

    static {
        COUNTRIES = new ArrayList<>();
        COUNTRIES.add(new Country("CH", "Switzerland"));
        COUNTRIES.add(new Country("DE", "Germany"));
        COUNTRIES.add(new Country("AT", "Austria"));
        COUNTRIES.add(new Country("FR", "France"));
        COUNTRIES.add(new Country("IT", "Italy"));
        COUNTRIES.add(new Country("ES", "Spain"));
        COUNTRIES.add(new Country("EN", "England"));
        COUNTRIES.add(new Country("NL", "Netherlands"));
        COUNTRIES.add(new Country("BE", "Belgium"));
    }

    @RequestMapping
    public List<Country> getCountries() {
        return COUNTRIES;
    }
}
