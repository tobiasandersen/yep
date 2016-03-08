package edu.dat076.yep.controllers;

import edu.dat076.yep.models.Card;
import edu.dat076.yep.models.Category;
import edu.dat076.yep.models.Round;
import edu.dat076.yep.repositories.RoundRepository;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


/**
 * Created by marcus on 2016-02-18.
 */
@RestController
public class RoundController {

    @Autowired
    private RoundRepository repository;

    @RequestMapping(value="/rounds", method=RequestMethod.GET)
    public List<Round> findAllRounds() {
        return (List<Round>) repository.findAll();
    }

    @RequestMapping(value="/rounds", method=RequestMethod.POST)
    public Round createRound(@RequestBody String json) {
        JSONObject jsonObject = new JSONObject(json);
        int multiplier = jsonObject.getInt("multiplier");
        List<Category> categories = new ArrayList<>();
        JSONArray jsonArray = jsonObject.getJSONArray("categories");

        if(jsonArray != null) {
            for(int i = 1; i < jsonArray.length(); i++) {
                JSONObject tmpObject = jsonArray.getJSONObject(i);
                String title = tmpObject.getString("title");
                List<Card> cards = new ArrayList<>();
                JSONArray jsonArray1 = tmpObject.getJSONArray("cards");

                if(jsonArray1 != null) {
                    for(int k = 1; k < jsonArray1.length(); k++) {
                        JSONObject tmpObject2 = jsonArray1.getJSONObject(i);
                        String question = tmpObject2.getString("question");
                        String answer = tmpObject2.getString("answer");
                        int value = tmpObject2.getInt("value");
                        Card newCard = new Card(question, answer, value);
                        cards.add(newCard);
                    }
                }

                Category newCategory = new Category(title, cards);
                categories.add(newCategory);
            }
        }

        Round newRound = new Round(multiplier, categories);
        repository.save(newRound);
        return newRound;
    }

    @RequestMapping(value="/rounds/{roundID}", method=RequestMethod.GET)
    public Round findRoundByID(@PathVariable int roundID) {
        return repository.findOne((long) roundID);
    }

}
