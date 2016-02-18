package edu.dat076.yep.models;

import java.util.List;

/**
 * Created by marcus on 2016-02-18.
 */
public class Round {

    private int multiplier;
    private List<Category> categories; //TODO categories must be 5..?
    private Board board;

    public Round(int multiplier, List<Category> categories, Board board) {
        this.multiplier = multiplier;
        this.categories = categories;
        this.board = board;
    }

    public int getMultiplier() {
        return multiplier;
    }

    public List<Category> getCategories() {
        return categories;
    }

    public Board getBoard() {
        return board;
    }
}
