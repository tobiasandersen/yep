package edu.dat076.yep.jservice;

import edu.dat076.yep.YepApplicationTests;
import edu.dat076.yep.repositories.CardRepository;
import edu.dat076.yep.repositories.CategoryRepository;
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
public class JServiceTest extends YepApplicationTests{

    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private JService jService;

    @Autowired
    private CardRepository cardRepository;

    @Autowired
    private CategoryRepository categoryRepository;

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
        categoryRepository.deleteAll();
        cardRepository.deleteAll();
        jService.fetchData();
        Assert.assertTrue(cardRepository.count() != 0 && categoryRepository.count() != 0);
    }
}
