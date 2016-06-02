package ch.zuehlke.campplanner.domain;

import javax.persistence.*;
import java.util.Currency;
import java.util.Date;

/**
 * Grundsätzlich sind alle Felder optional.
 */
@Entity
public class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

	@Temporal(TemporalType.DATE)
    private Date offerDate;

	@Temporal(TemporalType.DATE)
    private Date expirationDate;

	@Temporal(TemporalType.DATE)
    private Date from;

	@Temporal(TemporalType.DATE)
    private Date to;

    private Integer singleRooms;
    private Integer doubleRooms;

    //private Integer numberOfNights;
    private Double costPerPerson;
    private Currency currency; // funktioniert das?
    private Integer numberOfPeople;

    private String description;

    private String requestingPerson;

    @ManyToOne
    private Hotel hotel;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getOfferDate() {
        return offerDate;
    }

    public void setOfferDate(Date offerDate) {
        this.offerDate = offerDate;
    }

    public Date getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Date expirationDate) {
        this.expirationDate = expirationDate;
    }

    public Date getFrom() {
        return from;
    }

    public void setFrom(Date from) {
        this.from = from;
    }

    public Date getTo() {
        return to;
    }

    public void setTo(Date to) {
        this.to = to;
    }

    public Integer getSingleRooms() {
        return singleRooms;
    }

    public void setSingleRooms(Integer singleRooms) {
        this.singleRooms = singleRooms;
    }

    public Integer getDoubleRooms() {
        return doubleRooms;
    }

    public void setDoubleRooms(Integer doubleRooms) {
        this.doubleRooms = doubleRooms;
    }

    public Double getCostPerPerson() {
        return costPerPerson;
    }

    public void setCostPerPerson(Double costPerPerson) {
        this.costPerPerson = costPerPerson;
    }

    public Currency getCurrency() {
        return currency;
    }

    public void setCurrency(Currency currency) {
        this.currency = currency;
    }

    public Integer getNumberOfPeople() {
        return numberOfPeople;
    }

    public void setNumberOfPeople(Integer numberOfPeople) {
        this.numberOfPeople = numberOfPeople;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRequestingPerson() {
        return requestingPerson;
    }

    public void setRequestingPerson(String requestingPerson) {
        this.requestingPerson = requestingPerson;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }
}
