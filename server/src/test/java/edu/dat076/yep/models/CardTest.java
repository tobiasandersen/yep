package edu.dat076.yep.models;

import edu.dat076.yep.YepApplicationTests;
import org.junit.*;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by axel on 2016-03-05.
 */
@Transactional
public class CardTest extends YepApplicationTests {

    private Card card;
    private final String QUESTION = "foo";
    private final String ANSWER = "bar";
    private final int VALUE = 100;

    @Before
    public void setUp() {
        card = new Card(QUESTION, ANSWER, VALUE);
    }

    @After
    public void tearDown() {

    }

    @Test
    public void testConstructor() {
        Assert.assertNotNull(card);
    }

    @Test
    public void testGetQuestion() {
        Assert.assertEquals(QUESTION, card.getQuestion());
    }

    @Test
    public void testGetAnswer() {
        Assert.assertEquals(ANSWER, card.getAnswer());
    }

    @Test
    public void testGetValue() {
        Assert.assertEquals(VALUE, card.getValue());
    }
}