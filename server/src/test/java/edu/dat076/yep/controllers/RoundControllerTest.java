package edu.dat076.yep.controllers;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import edu.dat076.yep.YepApplicationTests;
import edu.dat076.yep.models.Round;
import edu.dat076.yep.repositories.RoundRepository;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
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

    @Test
    public void testFindRoundByID() {
        Round round = controller.findRoundByID(ID);
        Assert.assertNotNull("failure - expected a round with id " + ID, round);
    }

    @Test
    public void testCreateRound() {
        Round newRound = null;
        int multi = 0;
        String message = "failure - expected newly created Round object";
        try {
            // Response is from an online json generator
            HttpResponse response = Unirest.get("http://www.json-generator.com/api/json/get/cuSAnquKHm?indent=2").asJson();
            JSONObject jsonObject = new JSONObject(response.getBody());
            String json = jsonObject.toString();
            newRound = controller.createRound(json);

            //multi = jsonObject.getInt("multiplier");
        } catch(UnirestException e) {
            message = "failure - unirest exception got caught";
        } catch(JSONException e) {
            message = "failure - json exception got caught";
        }
        Assert.assertNotNull(message, newRound);
        //Assert.assertEquals(multi, newRound.getMultiplier());
    }
}
