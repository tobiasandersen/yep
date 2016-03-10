package edu.dat076.yep.controllers;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import edu.dat076.yep.YepApplicationTests;
import edu.dat076.yep.models.Board;
import edu.dat076.yep.repositories.BoardRepository;
import org.json.JSONException;
import org.json.JSONObject;
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
public class BoardControllerTest extends YepApplicationTests {

    @Autowired
    private BoardController controller;

    @Autowired
    private BoardRepository repository;

    private final int ID = 3; //id should either be created or exist beforehand

    @Before
    public void setUp() {
        //Inserts mock board into repository
        Board board = new Board(null, null);
        repository.save(board);
    }

    @After
    public void tearDown() {

    }

    @Test
    public void testFindAllBoards() {
        List<Board> list = controller.findAllBoards();
        Assert.assertNotNull("failure - expected a list of boards", list);
    }

    @Test
    public void testCreateBoard() {
        Board newBoard = null;
        String message = "failure - expected to have a newly created board object";
        try {
            HttpResponse response = Unirest.get("http://www.json-generator.com/api/json/get/crcjDTnUya?indent=2").asJson();
            JSONObject jsonObject = new JSONObject(response.getBody());
            String json = jsonObject.toString();
            newBoard = controller.createBoard(json);
        } catch (UnirestException e) {
            message = "failure - unirest exception got caught";
        } catch (JSONException e) {
            message = "failure - json exception got caught";
        }
        Assert.assertNotNull(message, newBoard);
    }

    @Test
    public void testFindBoardByID() {
        Board board = controller.findBoardByID(ID);
        Assert.assertNotNull("failure - expected to find a board with id " + ID, board);
    }

    @Test
    public void testDeleteBoard() {
        Board board = controller.findAllBoards().get(0);
        Assert.assertNotNull(board);

        int boardID = board.getId().intValue();
        Assert.assertNotNull(controller.findBoardByID(boardID));
        controller.deleteBoard(boardID);
        Assert.assertNull(controller.findBoardByID(boardID));
    }
}
