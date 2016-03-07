package edu.dat076.yep.repositories;

import edu.dat076.yep.models.Board;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by marcus on 2016-03-07.
 */
public interface BoardRepository extends CrudRepository<Board, Long> {
}
