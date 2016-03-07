package edu.dat076.yep.models;

import javax.persistence.*;

/**
 * Created by marcus on 2016-02-18.
 */
@Entity
@Table(name = "PLAYERS")
public class Player extends User {

    @Id
    private Long id;

    private int points;

    protected Player() {}

    public Player(String name, int points) {
        super(name);
        id = super.getId();
        this.points = points;
    }

    public int getPoints() {
        return points;
    }
}
