package de.enghofers.projects.springdemoapi.rest;

import de.enghofers.projects.springdemoapi.domain.User;
import de.enghofers.projects.springdemoapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping(value = "/api")
public class UserRestController {

    private final UserService userService;
//    private Logger logger = LoggerFactory.getLogger(UserRestController.class);

    @Autowired
    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(value = "/users", consumes = "application/json", produces = "application/json")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.createOrUpdateUser(user));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/users")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.createOrUpdateUser(user));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("users/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
