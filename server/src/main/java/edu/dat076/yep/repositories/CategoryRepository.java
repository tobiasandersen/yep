package edu.dat076.yep.repositories;

import edu.dat076.yep.models.Category;
import org.springframework.data.repository.CrudRepository;

/**
 * Persistence interface for the category class.
 *
 * is implemented by Spring at runtime.
 *
 * Created by marcus on 2016-02-23.
 */
public interface CategoryRepository extends CrudRepository<Category, Long> {
}
