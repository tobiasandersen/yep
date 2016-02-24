package edu.dat076.yep.controllers;

import edu.dat076.yep.models.Card;
import edu.dat076.yep.repositories.CardRepository;
import edu.dat076.yep.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by axel on 2016-02-17.
 */
@RestController
public class CardController {

    @Autowired
    private CardRepository repository;

    @RequestMapping(value="/cards", method=RequestMethod.GET)
    public List<Card> findAllCards() {
        return (List<Card>) repository.findAll();
    }

    @RequestMapping(value="/cards/{cardID}", method=RequestMethod.GET)
    public Card findCardByID(@PathVariable int cardID) {
        return repository.findOne((long) cardID);
    }

}
