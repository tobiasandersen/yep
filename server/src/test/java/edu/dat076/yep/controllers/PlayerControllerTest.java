package edu.dat076.yep.controllers;

import edu.dat076.yep.YepApplicationTests;
import edu.dat076.yep.models.Player;
import edu.dat076.yep.repositories.PlayerRepository;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by marcus on 2016-03-07.
 */
@Transactional
public class PlayerControllerTest extends YepApplicationTests {

    @Autowired
    private PlayerController controller;

    @Autowired
    private PlayerRepository repository;

    private final String NAME = "test";
    private final int POINTS = 1;
    private final int ID = 3; //id should be created or exist beforehand

    @Before
    public void setUp() {
        //Insert mock player to repository
        Player player = new Player(NAME, POINTS);
        repository.save(player);
    }

    @After
    public void tearDown() {

    }

    @Test
    public void testFindAllPlayers() {
        List<Player> list = controller.findAllPlayers();
        Assert.assertNotNull("failure - expected to find a list of players", list);
    }

    @Test
    public void testFindPlayerByID() {
        Player player = controller.findPlayerByID(ID);
        Assert.assertNotNull("failure - expected to find a player with id " + ID, player);
    }
}
