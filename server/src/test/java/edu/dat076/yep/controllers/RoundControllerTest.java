package edu.dat076.yep.controllers;

import edu.dat076.yep.YepApplicationTests;
import edu.dat076.yep.models.Round;
import edu.dat076.yep.repositories.RoundRepository;
import org.junit.Assert;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by marcus on 2016-03-07.
 */
@Transactional
public class RoundControllerTest extends YepApplicationTests {

    @Autowired
    private RoundController controller;

    @Autowired
    private RoundRepository repository;

    private final int ID = 3; //id should be created or exist beforehand
    private final int MULTI = 1;

    @Before
    public void setUp() {
        //Insert mock round
        Round round = new Round(MULTI ,null);
        repository.save(round);
    }

    @After
    public void tearDown() {

    }

    @Test
    public void testFindAllRounds() {
        List<Round> list = controller.findAllRounds();
        Assert.assertNotNull("failure - expected a list of rounds", list);
    }

/*    @Test
    public void testCreateRound() {
        String json = "";
        Round newRound = controller.createRound(json);
        Assert.assertNotNull(newRound);
        Assert.assertEquals(MULTI, newRound.getMultiplier());
    }*/

    @Test
    public void testFindRoundByID() {
        Round round = controller.findRoundByID(ID);
        Assert.assertNotNull("failure - expected a round with id " + ID, round);
    }
}
