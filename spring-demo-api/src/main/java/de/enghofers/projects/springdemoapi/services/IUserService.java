package de.enghofers.projects.springdemoapi.services;

import de.enghofers.projects.springdemoapi.domain.User;

import java.util.List;

public interface IUserService {
    public User createOrUpdateUser(User user);
    public List<User> getAllUsers();
}
