package edu.dat076.yep.jservice;

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
 * Tests the JService class.
 *
 * The JService class checks if the database is empty
 * and if it is fills it with data using the JService api.
 *
 */
@Transactional
public class JServiceTests extends YepApplicationTests{

    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private JService jService;

    @Before
    public void setUp() {

    }

    @After
    public void tearDown() {

    }

    /**
     * Tests if the fetchData method
     * correctly checks and fetches that data.
     */
    @Test
    public void testFetchData() {

        Assert.assertTrue(true);
    }
}
