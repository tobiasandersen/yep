package edu.dat076.yep.models;

/**
 * Created by marcus on 2016-02-18.
 */
public class Player extends User {

    private int points;

    public Player(String name, int points) {
        super(name);
        this.points = points;
    }

    public int getPoints() {
        return points;
    }
}
