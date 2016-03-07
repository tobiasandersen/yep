package edu.dat076.yep.controllers;

import edu.dat076.yep.models.Round;
import edu.dat076.yep.repositories.RoundRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    private RoundRepository repository;

    @RequestMapping(value="/rounds", method=RequestMethod.GET)
    public List<Round> findAllRounds() {
        return (List<Round>) repository.findAll();
    }

    @RequestMapping(value="/rounds/{roundID}", method=RequestMethod.GET)
    public Round findRoundByID(@PathVariable int roundID) {
        return repository.findOne((long) roundID);
    }

}
