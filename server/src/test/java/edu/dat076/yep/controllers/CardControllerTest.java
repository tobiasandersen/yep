package edu.dat076.yep.controllers;

import edu.dat076.yep.YepApplicationTests;
import edu.dat076.yep.models.Board;
import edu.dat076.yep.models.Card;
import edu.dat076.yep.models.Category;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by axel on 2016-03-05.
 */
@Transactional
public class CardControllerTest extends YepApplicationTests {

    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private CardController controller;

    private final String QUESTION = "foo";
    private final String ANSWER = "bar";
    private final int VALUE = 1000;

    @Before
    public void setUp() {

    }

    @After
    public void tearDown() {

    }

    @Test
    public void testFindAllCategories() {
        List<Card> list = controller.findAllCards();
        Assert.assertNotNull(list);
    }

    @Test
    public void testCreateCard() {
        String json = "{\"question\": " + QUESTION + ", \"answer\": " + ANSWER + ", \"value\": " + Integer.toString(VALUE) + "}";
        Card newCard = controller.createCard(json);
        Assert.assertNotNull(newCard);
        Assert.assertEquals(QUESTION, newCard.getQuestion());
        Assert.assertEquals(ANSWER, newCard.getAnswer());
        Assert.assertEquals(VALUE, newCard.getValue());
    }

    @Test
    public void testFindCardById() {
        Card cardNotNull = controller.findCardByID(2896); // Should exist
        Card cardNull = controller.findCardByID(999999);

        Assert.assertNotNull(cardNotNull);
        Assert.assertNull(cardNull);
    }

    @Test
    public void testDeleteCard() {
        Card card = controller.findAllCards().get(0);
        Assert.assertNotNull(card);

        int cardID = card.getId().intValue();
        Assert.assertNotNull(controller.findCardByID(cardID));
        controller.deleteCard(cardID);
        Assert.assertNull(controller.findCardByID(cardID));
    }
}