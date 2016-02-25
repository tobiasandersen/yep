package edu.dat076.yep.jservice;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import edu.dat076.yep.models.Card;
import edu.dat076.yep.models.Category;
import edu.dat076.yep.repositories.CardRepository;
import edu.dat076.yep.repositories.CategoryRepository;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by axel on 2016-02-24.
 */
@Service
public class JService {

    @Autowired
    private CardRepository cardRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    private String BASE_URL = "http://jservice.io/api";

    public void fetchData() {

        if (cardRepository.count() == 0 && categoryRepository.count() == 0) {

            categoryRepository.deleteAll();
            cardRepository.deleteAll();

            // fetch categories and questions and save to DB
            try {
                // fetch and save categories
                HttpResponse catRes = Unirest.get(BASE_URL + "/categories?count=50").asJson();
                JSONObject catJson = new JSONObject(catRes.getBody());
                JSONArray categories = catJson.getJSONArray("array");

                for (int i = 0; i < categories.length(); i++) {
                    JSONObject categoryObj = categories.getJSONObject(i);

                    // fetch and save cards for this category
                    HttpResponse cardRes = Unirest.get(BASE_URL + "/clues?category=" + categoryObj.getInt("id")).asJson();
                    JSONObject cardJson = new JSONObject(cardRes.getBody());
                    JSONArray cards = cardJson.getJSONArray("array");

                    List<Card> cardsList = new ArrayList<>();
                    for (int j = 0; j < cards.length(); j++) {
                        JSONObject cardObj = cards.getJSONObject(j);

                        if (cardObj.getString("question").length() <= 255 && cardObj.get("value") instanceof Integer) {
                            String question = cardObj.getString("question");
                            String answer = cardObj.getString("answer");
                            int value = cardObj.getInt("value");

                            Card card = new Card(question, answer, value);
                            cardsList.add(card);
                            cardRepository.save(card);
                        }

                    }

                    // only save category if there are at least 5 cards
                    if (cardsList.size() >= 5) {
                        categoryRepository.save(new Category(categoryObj.getString("title"), cardsList));
                    }

                }

            } catch (UnirestException e) {
                e.printStackTrace();
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }

}
