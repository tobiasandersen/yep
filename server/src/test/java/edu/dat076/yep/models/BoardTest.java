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
public class BoardTest extends YepApplicationTests {

    private Board board;

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {

    }

    @Test
    public void testConstructor() {
        Assert.assertNotNull(board);
    }
}