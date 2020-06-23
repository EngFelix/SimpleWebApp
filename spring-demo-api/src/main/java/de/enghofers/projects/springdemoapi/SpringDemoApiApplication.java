package de.enghofers.projects.springdemoapi;

import de.enghofers.projects.springdemoapi.domain.User;
import de.enghofers.projects.springdemoapi.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class SpringDemoApiApplication {

	private static final Logger log = LoggerFactory.getLogger(SpringDemoApiApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SpringDemoApiApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(UserRepository userRepository) {
		return args -> {
			// Save Users
			userRepository.save(new User("FirstName", "LastNameTest", LocalDate.of(1992, 10, 21)));

			// Find Users
			log.info("Users found with findAll():");
			log.info("-------------------------------");
			for (User user : userRepository.findAll()) {
				log.info(user.toString());
			}
			log.info("");
		};
	}
}
