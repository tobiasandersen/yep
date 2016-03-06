package edu.dat076.yep.controllers;

import edu.dat076.yep.models.User;
import edu.dat076.yep.repositories.UserRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * Created by marcus on 2016-02-18.
 */
@RestController
public class UserController {

    @Autowired
    private UserRepository repository;

    @RequestMapping(value="/users", method=RequestMethod.GET)
    public List<User> findAllUsers() {
        return (List<User>) repository.findAll();
    }

    @RequestMapping(value="/users", method=RequestMethod.POST)
    public User createUser(@RequestBody String json) {
        JSONObject jsonObject = new JSONObject(json);
        String name = jsonObject.getString("name");
        User newUser = new User(name);
        repository.save(newUser);
        return newUser;
    }

    @RequestMapping(value="/users/{userID}", method=RequestMethod.GET)
    public User findUserByID(@PathVariable int userID) {
        return repository.findOne((long) userID);
    }

}
