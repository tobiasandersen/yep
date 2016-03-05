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
public class RoundTest extends YepApplicationTests {

    private Round round;
    private final int MULTIPLIER = 2;
    private final List<Category> CATEGORIES = new ArrayList<>(5);
    private final Board BOARD = null;

    @Before
    public void setUp() {
        CATEGORIES.add(new Category("1"));
        CATEGORIES.add(new Category("2"));
        CATEGORIES.add(new Category("3"));
        CATEGORIES.add(new Category("4"));
        CATEGORIES.add(new Category("5"));

        round = new Round(MULTIPLIER, CATEGORIES, BOARD);
    }

    @After
    public void tearDown() {

    }

    @Test
    public void testConstructor() {
        Assert.assertNotNull(round);
    }
}