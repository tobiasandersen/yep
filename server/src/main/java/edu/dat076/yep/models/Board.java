package edu.dat076.yep.models;

import java.util.List;

/**
 * Created by marcus on 2016-02-18.
 */
public class Board {

    private List<Player> players;
    private List<Round> rounds; //TODO rounds must be 2..?

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
}
