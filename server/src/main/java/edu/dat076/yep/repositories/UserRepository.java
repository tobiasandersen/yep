package edu.dat076.yep.repositories;

import edu.dat076.yep.models.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by marcus on 2016-02-22.
 */
public interface UserRepository extends CrudRepository<User, Long> {
}
