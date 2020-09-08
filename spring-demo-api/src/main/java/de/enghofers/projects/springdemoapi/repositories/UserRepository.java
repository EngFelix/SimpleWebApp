package de.enghofers.projects.springdemoapi.repositories;

import de.enghofers.projects.springdemoapi.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByLastName(String lastName);

    User findById(long id);
}
