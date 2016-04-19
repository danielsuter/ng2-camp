package ch.zuehlke.campplanner.dao;


import ch.zuehlke.campplanner.domain.Hotel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelRepository extends CrudRepository<Hotel, Long> {
}
