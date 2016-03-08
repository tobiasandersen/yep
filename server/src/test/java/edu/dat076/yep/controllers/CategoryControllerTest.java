package edu.dat076.yep.controllers;

import edu.dat076.yep.YepApplicationTests;
import edu.dat076.yep.models.Card;
import edu.dat076.yep.models.Category;
import edu.dat076.yep.models.User;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.constraints.AssertTrue;
import java.util.List;

/**
 * Created by axel on 2016-03-05.
 */
@Transactional
public class CategoryControllerTest extends YepApplicationTests {

    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private CategoryController controller;

    private final int ID = 172; // id 172 should exist

    @Before
    public void setUp() {

    }

    @After
    public void tearDown() {

    }

    @Test
    public void testFindAllCategories() {
        List<Category> list = controller.findAllCategories();
        Assert.assertNotNull(list);
    }

    @Test
    public void testCreateCategory() {
        String json = "{\"title\": \"foo\"}";
        Category newCategory = controller.createCategory(json);
        Assert.assertNotNull(newCategory);
        Assert.assertEquals("foo", newCategory.getTitle());
    }

    @Test
    public void testFindCategoryByID() {
        Category categoryNotNull = controller.findCategoryByID(ID);
        Category categoryNull = controller.findCategoryByID(999999); // no such id should exist

        Assert.assertNotNull(categoryNotNull);
        Assert.assertNull(categoryNull);
    }

    @Test
    public void testAddCardsToCategory() {
        String json = "{\n" +
                "  \"cards\": [\n" +
                "    {\n" +
                "      \"question\": \"Uneeq\",\n" +
                "      \"answer\": \"Xplor\",\n" +
                "      \"value\": 244\n" +
                "    },\n" +
                "    {\n" +
                "      \"question\": \"Bedder\",\n" +
                "      \"answer\": \"Xumonk\",\n" +
                "      \"value\": 144\n" +
                "    }\n" +
                "  ]\n" +
                "}";
        Category test = controller.findCategoryByID(ID);
        int nbrOfCardsBeforeUpdate = test.getCards().size();
        Category category = controller.addCardsToCategory(ID, json);
        int nbrOfCardsAfterUpdate = category.getCards().size();
        Assert.assertTrue("failure - expected more cards from return",
                nbrOfCardsBeforeUpdate < nbrOfCardsAfterUpdate);
        test = controller.findCategoryByID(ID);
        nbrOfCardsAfterUpdate = test.getCards().size();
        Assert.assertTrue("failure - expected more cards from controller",
                nbrOfCardsBeforeUpdate < nbrOfCardsAfterUpdate);
    }
}

