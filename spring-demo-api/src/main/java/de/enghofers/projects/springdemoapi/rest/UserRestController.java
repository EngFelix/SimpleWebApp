package de.enghofers.projects.springdemoapi.rest;

import de.enghofers.projects.springdemoapi.domain.User;
import de.enghofers.projects.springdemoapi.services.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
public class UserRestController {

    private final UserService userService;
    private Logger logger = LoggerFactory.getLogger(UserRestController.class);

    @Autowired
    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/api/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/api/users")
    public User createUser(@RequestBody User user) {
        return userService.createOrUpdateUser(user);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/api/users")
    public User updateUser(@RequestBody User user) {
        return userService.createOrUpdateUser(user);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("api/users/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
