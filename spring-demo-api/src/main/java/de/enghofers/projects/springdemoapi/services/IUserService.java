package de.enghofers.projects.springdemoapi.services;

import de.enghofers.projects.springdemoapi.domain.User;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

public interface IUserService {
    User createOrUpdateUser(@Valid User user);

    List<User> getAllUsers();

    void deleteUser(Long id);

    Optional<User> getUser(Long id);
}
