package edu.dat076.yep.models;

import javax.persistence.*;
import java.util.List;

/**
 * Created by marcus on 2016-02-18.
 */
@Entity
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;

    @OneToMany
    private List<Card> cards;

    public Category(String title, List<Card> cards) {
        this.title = title;
        this.cards = cards;
    }

    public String getTitle() {
        return title;
    }

    public List<Card> getCards() {
        return cards;
    }

    @Override
    public String toString() {
        return "Title: " + title + cards.toString();
    }
}