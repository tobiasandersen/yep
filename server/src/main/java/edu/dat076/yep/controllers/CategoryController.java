package edu.dat076.yep.controllers;

import edu.dat076.yep.models.Card;
import edu.dat076.yep.models.Category;
import edu.dat076.yep.repositories.CategoryRepository;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Controller class for the Category object.
 * Exposes a number of endpoints where an external component can fetch or send data.
 *
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

    @RequestMapping(value="/categories/{categoryID}", method=RequestMethod.PUT)
    public Category addCardsToCategory(@PathVariable int categoryID, @RequestBody String json) {
        Category updatedCategory = repository.findOne((long) categoryID);
        JSONObject jsonObject = new JSONObject(json);
        JSONArray jsonArray = jsonObject.getJSONArray("cards");
        List<Card> cards = new ArrayList<>();

        /*
         * Fetches and creates the cards.
         */
        if (jsonArray != null) {
            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject jsonCard = jsonArray.getJSONObject(i);
                String question = jsonCard.getString("question");
                String answer = jsonCard.getString("answer");
                int value = jsonCard.getInt("value");
                Card newCard = new Card(question, answer, value);
                cards.add(newCard);
            }
        }

        updatedCategory.addCards(cards);

        updatedCategory = repository.save(updatedCategory);

        return updatedCategory;
    }

    @RequestMapping(value="/categories/{categoryID}", method=RequestMethod.DELETE)
    public void deleteCategory(@PathVariable int categoryID) {
        repository.delete((long) categoryID);
    }
}
