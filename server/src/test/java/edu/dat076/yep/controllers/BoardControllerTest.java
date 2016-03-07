package edu.dat076.yep.controllers;

import edu.dat076.yep.YepApplicationTests;
import edu.dat076.yep.models.Board;
import edu.dat076.yep.repositories.BoardRepository;
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

    @Before
    public void setUp() {
        //Inserts board into repository
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
    public void testFindBoardByID() {
        Board board = controller.findBoardByID(1);
        Assert.assertNotNull(board);

    }
}
