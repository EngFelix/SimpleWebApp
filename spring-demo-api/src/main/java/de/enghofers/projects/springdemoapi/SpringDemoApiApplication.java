package de.enghofers.projects.springdemoapi;

import de.enghofers.projects.springdemoapi.domain.TimeEntry;
import de.enghofers.projects.springdemoapi.domain.User;
import de.enghofers.projects.springdemoapi.repositories.ITimeEntryRepository;
import de.enghofers.projects.springdemoapi.repositories.IUserRepository;
import de.enghofers.projects.springdemoapi.services.IUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.LocalDateTime;

@SpringBootApplication
public class SpringDemoApiApplication {

	private static final Logger log = LoggerFactory.getLogger(SpringDemoApiApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SpringDemoApiApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(IUserService userService, ITimeEntryRepository timeEntryRepository) {
		return args -> {



			TimeEntry entry = new TimeEntry(userService.getAllUsers().stream().findFirst().orElse(new User()), LocalDateTime.now(), LocalDateTime.now());

			TimeEntry save = timeEntryRepository.save(entry);

			log.info("saved timeentry");
			log.info(save.toString());

			// Save Users
//			User user = new User("FirstName", "LastNameTest", LocalDate.of(1992, 10, 21));

//			log.info("new User");
//			log.info(user.toString());
//			user = userService.createOrUpdateUser(user);
//			log.info("new User after save");
//			log.info(user.toString());
//TODO REMOVE
			// Find Users
//			log.info("Users found with findAll():");
//			log.info("-------------------------------");
//			for (User usr : userService.getAllUsers()) {
//				log.info(usr.toString());
//			}
//			log.info("-------------------------------");
		};
	}
}
