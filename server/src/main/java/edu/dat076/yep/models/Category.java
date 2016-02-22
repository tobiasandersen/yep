package edu.dat076.yep.models;

import java.util.List;

/**
 * Created by marcus on 2016-02-18.
 */
public class Category {

    private int id;
    private String title;
    private List<Card> cards;

    public Category(int id, String title, List<Card> cards) {
        this.id = id;
        this.title = title;
        this.cards = cards;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public List<Card> getCards() {
        return cards;
    }

}