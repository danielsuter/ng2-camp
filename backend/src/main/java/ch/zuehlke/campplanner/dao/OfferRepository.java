package ch.zuehlke.campplanner.dao;


import ch.zuehlke.campplanner.domain.Offer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfferRepository extends CrudRepository<Offer, Long> {
}
