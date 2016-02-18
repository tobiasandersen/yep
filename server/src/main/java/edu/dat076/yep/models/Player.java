package edu.dat076.yep.models;

/**
 * Created by marcus on 2016-02-18.
 */
public class Player extends User {

    private int points;
    private Board board;

    public Player(String name, int points, Board board) {
        super(name);
        this.points = points;
        this.board = board;
    }

    public int getPoints() {
        return points;
    }

    public Board getBoard() {
        return board;
    }
}
