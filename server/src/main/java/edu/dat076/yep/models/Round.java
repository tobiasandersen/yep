package edu.dat076.yep.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Class for representing a round.
 *
 * a round contains five categories and a multiplier that determines
 * how much this rounds cards are worth in points.
 *
 * Created by marcus on 2016-02-18.
 */
@Entity
@Table(name = "ROUNDS")
public class Round {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private int multiplier;
    @OneToMany
    private List<Category> categories = new ArrayList<>(5);

    protected Round() {}

    public Round(int multiplier, List<Category> categories) {
        this.multiplier = multiplier;
        this.categories = categories;
    }

    public int getMultiplier() {
        return multiplier;
    }

    public List<Category> getCategories() {
        return categories;
    }

    public Long getId() {
        return id;
    }
}
