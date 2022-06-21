package com.revature.project2.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.revature.project2.service.UserService;
import com.revature.project2.entity.User;

@RestController
@RequestMapping("/user")
public class UserResource {
    private final UserService userService;

    public UserResource(UserService userService){
        this.userService = userService;
    }

    @PostMapping("/login")
//    public ResponseEntity<User> userLogin (@PathVariable("username" + "password") String username, String password) {
    public ResponseEntity<User> userLogin (@RequestBody User user) {
        User loggedin = userService.login(user.getUsername(), user.getPassword());
        return new ResponseEntity<>(loggedin, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        User newUser = userService.addUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
}
