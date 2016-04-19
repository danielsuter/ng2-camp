package ch.zuehlke.campplanner.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String description;
    private String zipCode;
    private String city;
    private String countryCode;
    private String website;
    private String tripAdvisorUrl;
    private String holidayCheckUrl;
    private int rooms;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public int getRooms() {
        return rooms;
    }

    public void setRooms(int rooms) {
        this.rooms = rooms;
    }

    public String getTripAdvisorUrl() {
        return tripAdvisorUrl;
    }

    public void setTripAdvisorUrl(String tripAdvisorUrl) {
        this.tripAdvisorUrl = tripAdvisorUrl;
    }

    public String getHolidayCheckUrl() {
        return holidayCheckUrl;
    }

    public void setHolidayCheckUrl(String holidayCheckUrl) {
        this.holidayCheckUrl = holidayCheckUrl;
    }
}
