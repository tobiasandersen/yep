package edu.dat076.yep.controllers;

import edu.dat076.yep.models.Category;
import edu.dat076.yep.repositories.CategoryRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by marcus on 2016-02-17.
 */
@RestController
public class CategoryController {

    @Autowired
    private CategoryRepository repository;

    @RequestMapping(value="/cat5egories", method=RequestMethod.GET)
    public List<Category> findAllCategories() {
        return (List<Category>) repository.findAll();
    }

    @RequestMapping(value="/categories", method=RequestMethod.POST)
    public Category createCategory(@RequestBody String json) {
        JSONObject jsonObject = new JSONObject(json);
        String title = jsonObject.getString("title");
        Category newCategory = new Category(title);
        repository.save(newCategory);
        return newCategory;
    }

    @RequestMapping(value="/categories/{categoryID}", method=RequestMethod.GET)
    public Category findCategoryByID(@PathVariable int categoryID) {
        return repository.findOne((long) categoryID);
    }

}
