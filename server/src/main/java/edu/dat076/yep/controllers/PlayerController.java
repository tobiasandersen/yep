package edu.dat076.yep.controllers;

import edu.dat076.yep.models.Player;
import edu.dat076.yep.repositories.PlayerRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(value="/players", method=RequestMethod.POST)
    public Player createPlayer(@RequestBody String json) {
        JSONObject jsonObject = new JSONObject(json);
        String name = jsonObject.getString("name");
        int points = jsonObject.getInt("points");

        Player newPlayer = new Player(name, points);
        repository.save(newPlayer);
        return newPlayer;
    }

    @RequestMapping(value="/players/{playerID}", method=RequestMethod.GET)
    public Player findPlayerByID(@PathVariable int playerID) {
        return repository.findOne((long) playerID);
    }

}
