package edu.dat076.yep.controllers;

import edu.dat076.yep.models.Category;
import edu.dat076.yep.repositories.CardRepository;
import edu.dat076.yep.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by marcus on 2016-02-17.
 */
@RestController
public class CategoryController {

    @Autowired
    private CategoryRepository repository;

    @RequestMapping(value="/categories", method=RequestMethod.GET)
    public List<Category> findAllCategories() {
        return (List<Category>) repository.findAll();
    }

    @RequestMapping(value="/categories/{categoryID}", method=RequestMethod.GET)
    public Category findCategoryByID(@PathVariable int categoryID) {
        return repository.findOne((long) categoryID);
    }

}
