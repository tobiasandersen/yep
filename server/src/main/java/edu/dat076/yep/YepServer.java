package edu.dat076.yep;

import edu.dat076.yep.jservice.JService;
import edu.dat076.yep.repositories.CardRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.annotation.Order;

/**
 * Main class for the application.
 *
 * the fetchData method inside the JService class is run every time
 * at startup and fills the database if it appears to be empty.
 */
@SpringBootApplication
public class YepServer {

	private static final Logger log = LoggerFactory.getLogger(YepServer.class);

	@Autowired
	private JService jService;

	public static void main(String[] args) {
		SpringApplication.run(YepServer.class, args);
	}

	@Bean
	@Order(1)
	public CommandLineRunner demo(CardRepository repository) {
		return (args) -> {
			jService.fetchData();
		};
	}
}
