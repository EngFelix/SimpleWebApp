package de.enghofers.projects.springdemoapi.service;

import de.enghofers.projects.springdemoapi.domain.User;
import de.enghofers.projects.springdemoapi.dto.UserDto;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

public interface UserService {
    UserDto createOrUpdateUser(@Valid UserDto userDto);

    List<UserDto> getAllUserDtos();

    List<User> getAllUsers();

    void deleteUser(Long id);

    Optional<UserDto> getUserDto(Long id);

    Optional<User> getUser(Long id);
}
