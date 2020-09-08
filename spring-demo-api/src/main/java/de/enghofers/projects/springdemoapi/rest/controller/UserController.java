package de.enghofers.projects.springdemoapi.rest.controller;

import de.enghofers.projects.springdemoapi.dto.UserDto;
import de.enghofers.projects.springdemoapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController()
@RequestMapping(value = "/api")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserService UserService;
//    private Logger logger = LoggerFactory.getLogger(UserDtoRestController.class);

    @Autowired
    public UserController(UserService UserService) {
        this.UserService = UserService;
    }


    @GetMapping("/users/")
    public ResponseEntity<Collection<UserDto>> getAllUsers() {
        return ResponseEntity.ok(UserService.getAllUserDtos());
    }

    @GetMapping("/user/{id}/")
    public ResponseEntity<UserDto> getUser(@PathVariable Long id) {
        return UserService.getUserDto(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());  //404 Not found
    }

    @PostMapping(value = "/user/")
    public ResponseEntity<UserDto> createUserDto(@RequestBody UserDto userDto) {
        return ResponseEntity.ok(UserService.createOrUpdateUser(userDto));
    }

    @PutMapping("/user/")
    public ResponseEntity<UserDto> updateUser(@RequestBody UserDto UserDto) {
        return ResponseEntity.ok(UserService.createOrUpdateUser(UserDto));
    }

    @DeleteMapping("/user/{id}/")
    public void deleteUser(@PathVariable Long id) {
        UserService.deleteUser(id);
    }
}
