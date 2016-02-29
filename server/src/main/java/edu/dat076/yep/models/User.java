package edu.dat076.yep.models;

import javax.persistence.*;

/**
 * Created by marcus on 2016-02-18.
 */
@Entity
@Table(name = "USERS")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    protected User() {}

    public User(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
