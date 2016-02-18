package edu.dat076.yep.controllers;

import edu.dat076.yep.models.Round;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


/**
 * Created by marcus on 2016-02-18.
 */
@RestController
public class RoundController {

    @RequestMapping(value="/rounds", method=RequestMethod.GET)
    public List<Round> findAllRounds() {
        return null;
    }

    @RequestMapping(value="/rounds/{roundID}", method=RequestMethod.GET)
    public Round findRoundByID(@PathVariable int roundID) {
        return null;
    }

}
