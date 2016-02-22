package edu.dat076.yep;

import edu.dat076.yep.models.User;
import edu.dat076.yep.models.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class YepServer {

	private static final Logger log = LoggerFactory.getLogger(YepServer.class);

	public static void main(String[] args) {
		SpringApplication.run(YepServer.class, args);
	}

	@Bean
	public CommandLineRunner demo(UserRepository repository) {
		return (args) -> {
			// clear users
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

/*			// fetch indivual user by ID
			User user = repository.findOne(1L);
			log.info("User found with findOne()");
			log.info("-------------------------");
			log.info(user.toString());
			log.info("");*/
		};
	}
}
