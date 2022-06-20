package com.revature.project2.service;

import com.revature.project2.entity.User;
import com.revature.project2.exception.UserNotFound;
import com.revature.project2.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.UUID;

@Service
@Transactional
public class UserService {
    private final UserRepo userRepo;

    @Autowired
    public UserService(UserRepo userRepo){
        this.userRepo = userRepo;
    }

    public User addUser(User user) {
        user.setUsername(user.getUsername());
        user.setEmail(user.getEmail());
        user.setPassword(user.getPassword());
        user.setName(user.getName());
        return userRepo.save(user);
    }

    public User login(User user){
        return userRepo.findByUsernameAndPassword(user.getUsername(), user.getPassword());
    }
}
