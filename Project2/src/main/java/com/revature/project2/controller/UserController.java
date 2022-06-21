package com.revature.project2.controller;


import com.revature.project2.entity.User;
import com.revature.project2.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RequestMapping("api/user")
@RestController
public class UserController {

    @Autowired
    private UserService service;


    @PostMapping("/login")
    public User userlogin(@RequestBody User user){
        return service.userLogin(user);
    }


    @PostMapping()
    public User addUser(@RequestBody User user){
        return service.addUser(user);
    }

    @PutMapping("/update")
    public String updateUser(@RequestBody User user, @PathVariable("id") int id){
        service.updateUser(user, id);
        return "Information updated successfully";
    }

    @PutMapping("/{id}")
    public String deleteUser(@PathVariable("id") int id){
        return "User information deleted";
    }

}
