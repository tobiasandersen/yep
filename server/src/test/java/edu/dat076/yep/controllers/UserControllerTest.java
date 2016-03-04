package edu.dat076.yep.controllers;

import edu.dat076.yep.YepApplicationTests;
import edu.dat076.yep.models.User;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by marcus on 2016-03-03.
 *
 * Tests the UserController class.
 *
 * Tests all methods that acts as endpoints in the RESTful API.
 * Does this by for example fetching
 * a list of users from the repository
 * and further on the database.
 */
@Transactional
public class UserControllerTest extends YepApplicationTests {

    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private UserController userController;

    @Before
    public void setUp() {

    }

    @After
    public void tearDown() {

    }

    @Test
    public void testFindAllUsers() {
        List<User> list = userController.findAllUsers();

        Assert.assertNotNull("failure - expected to find a list of users", list);
    }

    @Test
    public void testFindUserByID() {
        User userNotNull = userController.findUserByID(17); // id 17 should be User2 or such
        User userNull = userController.findUserByID(999999);

        Assert.assertNotNull("failure - expected to find a user", userNotNull);
        Assert.assertNull("failure - expected to not find a user", userNull);
    }
}
