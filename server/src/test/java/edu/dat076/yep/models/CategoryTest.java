package edu.dat076.yep.models;

import com.fasterxml.jackson.annotation.JsonTypeInfo;
import edu.dat076.yep.YepApplicationTests;
import org.junit.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by axel on 2016-03-05.
 */
public class CategoryTest extends YepApplicationTests {

    private Category category;
    private Category categoryWithoutCards;
    private final String TITLE = "foo";
    private final List<Card> CARDS = new ArrayList<>();

    @Before
    public void setUp() {
        CARDS.add(new Card("foo", "bar", 100));
        CARDS.add(new Card("foo2", "bar2", 200));
        CARDS.add(new Card("foo3", "bar3", 300));

        category = new Category(TITLE, CARDS);
        categoryWithoutCards = new Category(TITLE);
    }

    @After
    public void tearDown() {

    }

    @Test
    public void testConstructors() {
        Assert.assertNotNull(category);
        Assert.assertNotNull(categoryWithoutCards);
    }

    @Test
    public void testGetTitle() {
        Assert.assertEquals(TITLE, category.getTitle());
    }

    @Test
    public void testSetTitle() {
        String testTitle = "test";
        Assert.assertNotEquals(testTitle, category.getTitle());
        category.setTitle(testTitle);
        Assert.assertEquals(testTitle, category.getTitle());
    }

    @Test
    public void testGetCards() {
        Assert.assertEquals(CARDS.size(), category.getCards().size());
        Assert.assertEquals(CARDS, category.getCards());
    }

    @Test
    public void testAddCard() {
        // Check initial size
        Assert.assertEquals(CARDS.size(), category.getCards().size());
        // Add new card
        Card newCard = new Card("foo4", "bar4", 400);
        category.addCard(newCard);

        // Check new size and last card
        Assert.assertEquals(CARDS.size(), category.getCards().size());
        Assert.assertEquals(newCard, category.getCards().get(category.getCards().size() - 1));
    }

    @Test
    public void testAddCards() {
        // Check initial size
        Assert.assertEquals(CARDS.size(), category.getCards().size());

        // Add list of new cards
        Card newCard = new Card("foo4", "bar4", 400);
        Card newCard2 = new Card("foo5", "bar5", 500);
        List<Card> list = new ArrayList<>();
        list.add(newCard);
        list.add(newCard2);
        category.addCards(list);

        // Check new size and two last cards
        Assert.assertEquals(CARDS.size(), category.getCards().size());
        Assert.assertEquals(newCard, category.getCards().get(category.getCards().size() - 2));
        Assert.assertEquals(newCard2, category.getCards().get(category.getCards().size() - 1));
    }

    @Test
    public void testSetCards() {
        List<Card> testList = new ArrayList<>();
        testList.add(new Card("test", "test", 100));
        testList.add(new Card("test2", "test2", 200));
        testList.add(new Card("test3", "test3", 300));

        Assert.assertNotEquals(testList, category.getCards());
        category.setCards(testList);
        Assert.assertEquals(testList, category.getCards());
    }
}