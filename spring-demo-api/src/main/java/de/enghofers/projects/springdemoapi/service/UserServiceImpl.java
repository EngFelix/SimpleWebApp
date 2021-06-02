package de.enghofers.projects.springdemoapi.service;

import de.enghofers.projects.springdemoapi.domain.User;
import de.enghofers.projects.springdemoapi.dto.UserDto;
import de.enghofers.projects.springdemoapi.exception.EntityNotFoundException;
import de.enghofers.projects.springdemoapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDto createOrUpdateUser(@Valid UserDto userDto) {
        User user;
        if (userDto.getId() == null) {
            user = newUserFromDto(userDto);
        }else {
            user = userRepository.findById(userDto.getId())
                    .map(user1 -> updateUser(user1, userDto))
                    .orElse(newUserFromDto(userDto));
        }
        User savedUser = userRepository.save(user);
        return convertUser(savedUser);
    }

    private User newUserFromDto(UserDto userDto) {
        return new User(userDto.getId(),
                userDto.getFirstName(),
                userDto.getLastName(),
                userDto.getBirthDate(),
                LocalDateTime.now(),
                LocalDateTime.now());
    }

    private User updateUser(User user, UserDto userDto) {
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setBirthDate(userDto.getBirthDate());
        user.setLastModified(LocalDateTime.now());
        return user;
    }

    private UserDto convertUser(User user) {
        return new UserDto(user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getBirthDate(),
                user.getCreatedAt(),
                user.getLastModified());
    }


    @Override
    public List<UserDto> getAllUserDtos() {
        return userRepository.findAll().stream()
                .map(this::convertUser)
                .collect(Collectors.toList());
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
    public Optional<UserDto> getUserDto(Long id) throws EntityNotFoundException {
        return userRepository.findById(id)
                .map(this::convertUser);
    }

    @Override
    public Optional<User> getUser(Long id) throws EntityNotFoundException {
        return userRepository.findById(id);
    }
}
