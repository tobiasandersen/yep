package edu.dat076.yep.controllers;

import edu.dat076.yep.YepApplicationTests;
import edu.dat076.yep.models.Category;
import edu.dat076.yep.models.User;
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
public class CategoryControllerTest extends YepApplicationTests {

    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private CategoryController controller;

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
    public void testFindCategoryByID() {
        Category categoryNotNull = controller.findCategoryByID(172); // id 172 should be classic lit
        Category categoryNull = controller.findCategoryByID(999999);

        Assert.assertNotNull(categoryNotNull);
        Assert.assertNull(categoryNull);
    }
}

