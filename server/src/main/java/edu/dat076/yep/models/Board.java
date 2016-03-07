package edu.dat076.yep.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by marcus on 2016-02-18.
 */
@Entity
@Table(name = "BOARDS")
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToMany
    private List<Player> players;
    @OneToMany
    private List<Round> rounds = new ArrayList<>(2);

    protected Board() {}

    public Board(List<Player> players, List<Round> rounds) {
        this.players = players;
        this.rounds = rounds;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public List<Round> getRounds() {
        return rounds;
    }

    public Long getId() {
        return id;
    }
}
