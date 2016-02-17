package edu.dat076.yep.controllers;

import edu.dat076.yep.models.Card;
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

    @RequestMapping(value="/cards", method=RequestMethod.GET)
    public List<Card> findAllCards() {
        return null;
    }

    @RequestMapping(value="/cards/{cardID}", method=RequestMethod.GET)
    public Card findCardByID(@PathVariable int cardID) {
        return null;
    }

}
