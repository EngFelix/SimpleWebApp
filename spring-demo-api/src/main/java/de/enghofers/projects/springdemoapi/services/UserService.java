package de.enghofers.projects.springdemoapi.services;

import de.enghofers.projects.springdemoapi.domain.User;
import de.enghofers.projects.springdemoapi.exceptions.UserNotFoundException;
import de.enghofers.projects.springdemoapi.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class UserService implements IUserService {

    private final IUserRepository userRepository;

    @Autowired
    public UserService(IUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User createOrUpdateUser(@Valid User user) {
        user.setLastModified(LocalDateTime.now());
        if (user.getId() == null || !userRepository.existsById(user.getId())) {
            user.setCreatedAt(LocalDateTime.now());
        }
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public Optional<User> getUser(Long id) throws UserNotFoundException{
        return userRepository.findById(id);
    }
}
