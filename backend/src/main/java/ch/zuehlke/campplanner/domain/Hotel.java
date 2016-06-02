package ch.zuehlke.campplanner.domain;

import javax.persistence.*;
import java.util.List;

@Entity
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String description;
    private String zipCode;
    private String street;
    private String streetNumber;
    private String city;
    private String countryCode;
    private String website;
    private String contactEmail;

    private String tripAdvisorUrl;
    private String holidayCheckUrl;
    private Integer rooms;

//    @OneToMany
//    private List<Offer> offers;
//
//    public List<Offer> getOffers() {
//        return offers;
//    }
//
//    public void setOffers(List<Offer> offers) {
//        this.offers = offers;
//    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getStreetNumber() {
        return streetNumber;
    }

    public void setStreetNumber(String streetNumber) {
        this.streetNumber = streetNumber;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public void setRooms(Integer rooms) {
        this.rooms = rooms;
    }

    public void setId(Long id) {
        this.id = id;
    }


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
