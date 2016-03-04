package edu.dat076.yep.models;

import edu.dat076.yep.YepApplicationTests;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by marcus on 2016-03-04.
 *
 * Tests the User class.
 */
@Transactional
public class UserTest extends YepApplicationTests {

    @Before
    public void setUp() {

    }

    @After
    public void tearDown() {

    }

    @Test
    public void testGetName() {
        User user = new User("test");

        Assert.assertTrue(user.getName().equals("test"));
    }
}
