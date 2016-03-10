package edu.dat076.yep.models;

import javax.persistence.*;

/**
 * Class for representing the cards that hold the questions and answers.
 *
 * Created by axel on 2016-02-17.
 */
@Entity
@Table(name = "CARDS")
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String question;
    private String answer;
    private int value;

    protected Card() {}

    public Card(String question, String answer, int value) {
        this.question = question;
        this.answer = answer;
        this.value = value;
    }

    public Long getId() {
        return id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "Question: " + question + ". Answer: " + answer + ". Value: " + value;
    }
}
