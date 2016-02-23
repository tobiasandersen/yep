package edu.dat076.yep.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by axel on 2016-02-17.
 */
@Entity
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String question;
    private String answer;
    private int value;

    public Card(String question, String answer, int value) {
        this.question = question;
        this.answer = answer;
        this.value = value;
    }

    public String getQuestion() {
        return question;
    }

    public String getAnswer() {
        return answer;
    }

    public int getValue() {
        return value;
    }

    @Override
    public String toString() {
        return "Question: " + question + ". Answer: " + answer + ". Value: " + value;
    }
}
