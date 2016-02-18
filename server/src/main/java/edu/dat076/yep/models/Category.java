package edu.dat076.yep.models;

import java.util.List;

/**
 * Created by marcus on 2016-02-18.
 */
public class Category {

    private List<Card> cards;

    public Category(List<Card> cards) {
        this.cards = cards;
    }

    public List<Card> getCards() {
        return cards;
    }

}