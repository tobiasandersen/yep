package edu.dat076.yep;

import edu.dat076.yep.models.Card;
import edu.dat076.yep.models.Category;
import edu.dat076.yep.models.User;
import edu.dat076.yep.repositories.CardRepository;
import edu.dat076.yep.repositories.CategoryRepository;
import edu.dat076.yep.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class YepServer {

	private static final Logger log = LoggerFactory.getLogger(YepServer.class);

	public static void main(String[] args) {
		SpringApplication.run(YepServer.class, args);
	}

	/*
	 * Method for testing User persistence
	 */
	@Bean
	public CommandLineRunner demo(UserRepository repository) {
		return (args) -> {
			// Clear users
			repository.deleteAll();

			// Save some Users
			repository.save(new User("User1"));
			repository.save(new User("User2"));
			repository.save(new User("User3"));

			// fetch all users
			log.info("Users found with findAll():");
			log.info("---------------------------");
			for (User user : repository.findAll()) {
				log.info(user.getName());
			}
			log.info("");

			// fetch indivual user by ID
/*			User user = repository.findOne(1L);	// TODO Can't find by id
			log.info("User found with findOne()");
			log.info("-------------------------");
			log.info(user.getName());
			log.info("");*/
		};
	}

	/*
	 * Method for testing Card persistence
	 */
/*	@Bean
	public CommandLineRunner demo2(CardRepository repository) {
		return (args) -> {
			// Clear cards
			repository.deleteAll();

			// Save some cards
			repository.save(new Card("What colour is the sky?", "Blue", 100));
			repository.save(new Card("What colour is the sun?", "Yellow", 200));
			repository.save(new Card("What colour is the clouds?", "White", 300));

			// fetch all cards
			log.info("Cards found with findAll():");
			log.info("---------------------------");
			for (Card card : repository.findAll()) {
				log.info(card.toString());
			}
			log.info("");

		};
	}*/

	/*
 	 * Method for testing Category persistence
 	 */
/*	@Bean
	public CommandLineRunner demo3(CategoryRepository repository) {
		return (args) -> {
			// Clear categories
			repository.deleteAll();

			// Save some categories
			Card card1 = new Card("aaa?", "1", 100);
			Card card2 = new Card("bbb?", "2", 200);
			Card card3 = new Card("ccc?", "3", 300);
			Card card4 = new Card("ddd?", "4", 400);
			Card card5 = new Card("eee?", "5", 500);
			List<Card> cards = new ArrayList<Card>(5);
			cards.add(card1);
			cards.add(card2);
			cards.add(card3);
			cards.add(card4);
			cards.add(card5);
			repository.save(new Category("Category1", cards));

			// fetch all categories
			log.info("Categories found with findAll():");
			log.info("---------------------------");
			for (Category category : repository.findAll()) {
				log.info(category.toString());
			}
			log.info("");

		};
	}*/
}
