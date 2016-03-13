package edu.dat076.yep.repositories;

import edu.dat076.yep.models.Player;
import org.springframework.data.repository.CrudRepository;

/**
 * Persistence interface for the player class.
 *
 * is implemented by Spring at runtime.
 *
 * Created by marcus on 2016-03-07.
 */
public interface PlayerRepository extends CrudRepository<Player, Long> {
}
