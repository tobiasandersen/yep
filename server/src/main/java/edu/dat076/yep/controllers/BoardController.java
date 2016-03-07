package edu.dat076.yep.controllers;

import edu.dat076.yep.models.*;
import edu.dat076.yep.repositories.BoardRepository;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


/**
 * Created by marcus on 2016-02-18.
 */
@RestController
public class BoardController {

    @Autowired
    private BoardRepository repository;

    @RequestMapping(value="/boards", method=RequestMethod.GET)
    public List<Board> findAllBoards() {
        return (List<Board>) repository.findAll();
    }

    @RequestMapping(value="/boards", method=RequestMethod.POST)
    public Board createBoard(@RequestBody String json) {
        JSONObject jsonObject = new JSONObject(json);
        JSONArray playerArray = jsonObject.getJSONArray("players");
        JSONArray roundArray = jsonObject.getJSONArray("rounds");
        List<Player> players = new ArrayList<>();
        List<Round> rounds = new ArrayList<>();

        /*
         * Creates the players for the board.
         */
        if(playerArray != null) {
            for(int i = 0; i < playerArray.length(); i++) {
                JSONObject tmpObject = playerArray.getJSONObject(i);
                String playerName = tmpObject.getString("name");
                int playerPoints = tmpObject.getInt("points");
                Player tmpPlayer = new Player(playerName, playerPoints);
                players.add(tmpPlayer);
            }
        }

        /*
         * Creates the rounds for the board.
         * Also creates necessary categories for the rounds and cards for the categories.
         */
        if(roundArray != null) {
            for(int i = 0; i < roundArray.length(); i++) {
                JSONObject tmpObject = roundArray.getJSONObject(i);
                int roundMultiplier = tmpObject.getInt("multiplier");
                JSONArray categoryArray = tmpObject.getJSONArray("categories");
                List<Category> roundCategories = new ArrayList<>();

                if(categoryArray != null) {
                    for(int k = 0; k < categoryArray.length(); k++) {
                        JSONObject tmpObject2 = categoryArray.getJSONObject(k);
                        String categoryTitle = tmpObject2.getString("title");
                        JSONArray cardArray = tmpObject2.getJSONArray("cards");
                        List<Card> categoryCards = new ArrayList<>();

                        if(cardArray != null) {
                            for (int l = 0; l < cardArray.length(); l++) {
                                JSONObject tmpObject3 = cardArray.getJSONObject(l);
                                String question = tmpObject3.getString("question");
                                String answer = tmpObject3.getString("answer");
                                int value = tmpObject3.getInt("value");
                                Card tmpCard = new Card(question, answer, value);
                                categoryCards.add(tmpCard);
                            }
                        }

                        Category tmpCategory = new Category(categoryTitle, categoryCards);
                        roundCategories.add(tmpCategory);
                    }
                }

                Round tmpRound = new Round(roundMultiplier, roundCategories);
                rounds.add(tmpRound);
            }
        }

        Board newBoard = new Board(players, rounds);
        repository.save(newBoard);
        return newBoard;
    }

    @RequestMapping(value="/boards/{boardID}", method=RequestMethod.GET)
    public Board findBoardByID(@PathVariable int boardID) {
        return repository.findOne((long) boardID);
    }

}
