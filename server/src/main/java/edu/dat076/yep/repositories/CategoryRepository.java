package edu.dat076.yep.repositories;

import edu.dat076.yep.models.Category;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by marcus on 2016-02-23.
 */
public interface CategoryRepository extends CrudRepository<Category, Long> {
}
