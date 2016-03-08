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
        String json = "{\n" +
                "  \"multiplier\": " + MULTI + ",\n" +
                "  \"categories\": [\n" +
                "    {\n" +
                "      \"title\": \"Memora\",\n" +
                "      \"cards\": [\n" +
                "        {\n" +
                "          \"question\": \"Panzent\",\n" +
                "          \"answer\": \"Hometown\",\n" +
                "          \"value\": 454\n" +
                "        },\n" +
                "        {\n" +
                "          \"question\": \"Kage\",\n" +
                "          \"answer\": \"Phuel\",\n" +
                "          \"value\": 354\n" +
                "        },\n" +
                "        {\n" +
                "          \"question\": \"Zuvy\",\n" +
                "          \"answer\": \"Inquala\",\n" +
                "          \"value\": 189\n" +
                "        },\n" +
                "        {\n" +
                "          \"question\": \"Genesynk\",\n" +
                "          \"answer\": \"Comcur\",\n" +
                "          \"value\": 265\n" +
                "        },\n" +
                "        {\n" +
                "          \"question\": \"Geeknet\",\n" +
                "          \"answer\": \"Ebidco\",\n" +
                "          \"value\": 339\n" +
                "        }\n" +
                "      ]\n" +
                "    },\n" +
                "    {\n" +
                "      \"title\": \"Exposa\",\n" +
                "      \"cards\": [\n" +
                "        {\n" +
                "          \"question\": \"Magneato\",\n" +
                "          \"answer\": \"Tropoli\",\n" +
                "          \"value\": 235\n" +
                "        },\n" +
                "        {\n" +
                "          \"question\": \"Ultrimax\",\n" +
                "          \"answer\": \"Opticom\",\n" +
                "          \"value\": 485\n" +
                "        },\n" +
                "        {\n" +
                "          \"question\": \"Zentry\",\n" +
                "          \"answer\": \"Prowaste\",\n" +
                "          \"value\": 117\n" +
                "        },\n" +
                "        {\n" +
                "          \"question\": \"Bristo\",\n" +
                "          \"answer\": \"Equitax\",\n" +
                "          \"value\": 184\n" +
                "        },\n" +
                "        {\n" +
                "          \"question\": \"Miracula\",\n" +
                "          \"answer\": \"Zilencio\",\n" +
                "          \"value\": 153\n" +
                "        }\n" +
                "      ]\n" +
                "    }\n" +
                "  ]\n" +
                "}";
        Round newRound = controller.createRound(json);
        Assert.assertNotNull("failure - expected newly created Round object", newRound);
        Assert.assertEquals("failure - excected the same mutiplier", MULTI, newRound.getMultiplier());
    }
}
