package edu.dat076.yep.controllers;

import edu.dat076.yep.models.Player;
import edu.dat076.yep.repositories.PlayerRepository;
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
public class PlayerController {

    @Autowired
    private PlayerRepository repository;

    @RequestMapping(value="/players", method=RequestMethod.GET)
    public List<Player> findAllPlayers() {
        return (List<Player>) repository.findAll();
    }

    @RequestMapping(value="/players/{playerID}", method=RequestMethod.GET)
    public Player findPlayerByID(@PathVariable int playerID) {
        return repository.findOne((long) playerID);
    }

}
