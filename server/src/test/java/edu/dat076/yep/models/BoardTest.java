package edu.dat076.yep.models;

import edu.dat076.yep.YepApplicationTests;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by axel on 2016-03-05.
 */
@Transactional
public class BoardTest extends YepApplicationTests {

    private Board board;
    private final List<Player> PLAYERS = new ArrayList<>();
    private final List<Round> ROUNDS = new ArrayList<>();

    @Before
    public void setUp() {
        // init players and rounds

        board = new Board(PLAYERS, ROUNDS);
    }

    @After
    public void tearDown() {

    }

    @Test
    public void testConstructor() {
        Assert.assertNotNull(board);
    }

    @Test
    public void testGetPlayers() {
        Assert.assertEquals(PLAYERS.size(), board.getPlayers().size());
        Assert.assertEquals(PLAYERS, board.getPlayers());
    }

    @Test
    public void testGetRounds() {
        Assert.assertEquals(ROUNDS.size(), board.getRounds().size());
        Assert.assertEquals(ROUNDS, board.getRounds());
    }
}