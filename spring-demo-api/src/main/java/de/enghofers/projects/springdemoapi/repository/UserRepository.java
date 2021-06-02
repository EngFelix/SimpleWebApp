package de.enghofers.projects.springdemoapi.repository;

import de.enghofers.projects.springdemoapi.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
