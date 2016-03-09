package edu.dat076.yep.models;

import javax.persistence.*;

/**
 * Class for representing a player.
 *
 * Created by marcus on 2016-02-18.
 */
@Entity
@Table(name = "PLAYERS")
public class Player extends User {

    private int points;

    protected Player() {}

    public Player(String name, int points) {
        super(name);
        this.points = points;
    }

    public int getPoints() {
        return points;
    }

}
