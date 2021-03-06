package edu.dat076.yep.models;

import edu.dat076.yep.YepApplicationTests;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by axel on 2016-03-05.
 */
@Transactional
public class PlayerTest extends YepApplicationTests {

    private Player player;
    private final String NAME = "foo";
    private final int POINTS = 100;

    @Before
    public void setUp() {
        player = new Player(NAME, POINTS);
    }

    @After
    public void tearDown() {

    }

    @Test
    public void testConstructor() {
        Assert.assertNotNull(player);
    }

    @Test
    public void testGetName() {
        Assert.assertEquals(NAME, player.getName());
    }

    @Test
    public void testGetPoints() {
        Assert.assertEquals(POINTS, player.getPoints());
    }
}
