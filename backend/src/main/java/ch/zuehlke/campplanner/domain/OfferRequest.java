package ch.zuehlke.campplanner.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class OfferRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    enum RequestStatus {
        REQUEST_SENT,
        OFFER_RECEIVED,
        WAITING_FOR_CLARIFCATION,
        OFFER_CONFIRMED,
        OFFER_DECLINED,
    }

    private Date date;
    private Hotel hotel;
    private RequestStatus status;
    private Date lastStatusChange;

}
