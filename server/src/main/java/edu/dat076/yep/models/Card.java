package edu.dat076.yep.models;

/**
 * Created by axel on 2016-02-17.
 */
public class Card {

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

}
