package edu.dat076.yep.controllers;

import edu.dat076.yep.models.Card;
import edu.dat076.yep.repositories.CardRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by axel on 2016-02-17.
 */
@RestController
public class CardController {

    @Autowired
    private CardRepository repository;

    @RequestMapping(value="/cards", method=RequestMethod.GET)
    public List<Card> findAllCards(@RequestParam(value = "categoryID", required = false) Integer categoryID) {
        return (List<Card>) repository.findAll();
    }

    // fix post of new card
    @RequestMapping(value="/cards", method=RequestMethod.POST)
    public Card createCard(@RequestBody String json) {
        JSONObject jsonObject = new JSONObject(json);
        String question = jsonObject.getString("question");
        String answer = jsonObject.getString("answer");
        int value = jsonObject.getInt("value");
        
        Card newCard = new Card(question, answer, value);
        repository.save(newCard);
        return newCard;
    }

    @RequestMapping(value="/cards/{cardID}", method=RequestMethod.GET)
    public Card findCardByID(@PathVariable int cardID) {
        return repository.findOne((long) cardID);
    }

}
