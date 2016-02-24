package edu.dat076.yep.repositories;

import edu.dat076.yep.models.Card;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by marcus on 2016-02-23.
 */
public interface CardRepository extends CrudRepository<Card, Long> {
}
