package edu.dat076.yep.models;

import javax.persistence.*;
import java.util.List;

/**
 * Class for representing the categories.
 *
 * categories contains a list of cards that belong to that category.
 *
 * Created by marcus on 2016-02-18.
 */
@Entity
@Table(name = "CATEGORIES")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;

    @OneToMany(cascade = CascadeType.REMOVE)
    private List<Card> cards;

    protected Category() {}

    public Category(String title) {
        this.title = title;
    }

    public Category(String title, List<Card> cards) {
        this(title);
        this.cards = cards;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Card> getCards() {
        return cards;
    }

    public void addCard(Card card) {
        this.cards.add(card);
    }

    public void addCards(List<Card> cards) {
        this.cards.addAll(cards);
    }

    public void setCards(List<Card> cards) {
        this.cards = cards;
    }

    @Override
    public String toString() {
        return "Title: " + title + cards.toString();
    }
}