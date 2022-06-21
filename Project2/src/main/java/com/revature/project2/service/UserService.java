package com.revature.project2.service;

import com.revature.project2.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    User addUser(User user);
    User userLogin(User user);
    void deleteUser(int id);
    void updateUser(User user, int id);
}