package de.enghofers.projects.springdemoapi.services;

import de.enghofers.projects.springdemoapi.domain.User;
import org.springframework.web.bind.annotation.RequestAttribute;

import java.util.List;

public interface IUserService {
    User createOrUpdateUser(User user);

    List<User> getAllUsers();

    void deleteUser(Long id);
}
