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
import org.springframework.core.annotation.Order;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class YepServer {

	private static final Logger log = LoggerFactory.getLogger(YepServer.class);

	public static void main(String[] args) {
		SpringApplication.run(YepServer.class, args);
	}


	//-----------------------------------------------------------------------------
	//------------------------------------TESTS------------------------------------
	//-----------------------------------------------------------------------------

	private Card card1 = new Card("c1a?", "1", 100);
	private Card card2 = new Card("c1b?", "2", 200);
	private Card card3 = new Card("c1c?", "3", 300);
	private Card card4 = new Card("c1d?", "4", 400);
	private Card card5 = new Card("c1e?", "5", 500);
	private Card card6 = new Card("c2a?", "a", 100);
	private Card card7 = new Card("c2b?", "b", 200);
	private Card card8 = new Card("c2c?", "c", 300);
	private Card card9 = new Card("c2d?", "d", 400);
	private Card card10 = new Card("c2e?", "e", 500);

	/*
	 * Method for testing User persistence
	 */
	@Bean
	@Order(1)
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
/*			User user = repository.findOne(1L);	// TODO id increments even after deleteAll
			log.info("User found with findOne()");
			log.info("-------------------------");
			log.info(user.getName());
			log.info("");*/
		};
	}

	/*
	 * Method for testing Card persistence
	 */
	@Bean
	@Order(2)
	public CommandLineRunner demo2(CardRepository repository) {
		return (args) -> {
			// Clear cards
			// repository.deleteAll(); // TODO can't remove cards when linked to categories

			// Save some cards
			repository.save(card1);
			repository.save(card2);
			repository.save(card3);
			repository.save(card4);
			repository.save(card5);
			repository.save(card6);
			repository.save(card7);
			repository.save(card8);
			repository.save(card9);
			repository.save(card10);

			// fetch all cards
			log.info("Cards found with findAll():");
			log.info("---------------------------");
			for (Card card : repository.findAll()) {
				log.info(card.toString());
			}
			log.info("");

			// fetch indivual Card by ID
/*			Long id = new Long(7);		// TODO id increments even after deleteAll
			Card card = repository.findOne(id);
			log.info("User found with findOne()");
			log.info("-------------------------");
			log.info(card.toString());
			log.info("");*/
		};
	}

	/*
 	 * Method for testing Category persistence
 	 */
	@Bean
	@Order(3)
	public CommandLineRunner demo3(CategoryRepository repository) {
		return (args) -> {
			// Clear categories
			// repository.deleteAll(); // TODO commented right now due to card-category link issue

			// Save some categories
			List<Card> cards = new ArrayList<>(5);
			cards.add(card1);
			cards.add(card2);
			cards.add(card3);
			cards.add(card4);
			cards.add(card5);
			repository.save(new Category("Category1", cards));
			List<Card> cards2 = new ArrayList<>(5);
			cards2.add(card6);
			cards2.add(card7);
			cards2.add(card8);
			cards2.add(card9);
			cards2.add(card10);
			repository.save(new Category("Category2", cards2));

			// fetch all categories
/*			log.info("Categories found with findAll():");
			log.info("---------------------------");
			for (Category category : repository.findAll()) {
				log.info(category.toString());	// TODO session closes, get LazyInitializationException
			}
			log.info("");*/

			// fetch indivual Card by ID
/*			Long id = new Long(1);		// TODO id increments even after deleteAll
			Category category = repository.findOne(id);
			log.info("User found with findOne()");
			log.info("-------------------------");
			log.info(category.toString());
			log.info("");*/
		};
	}
}
