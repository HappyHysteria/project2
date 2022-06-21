package com.revature.project2.service.impl;

import com.revature.project2.entity.User;
import com.revature.project2.repository.UserRepo;
import com.revature.project2.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo repository;

    @Override
    public User addUser(User user) {
        repository.save(user);
        return user;
    }

    @Override
    public User userLogin(User user) {
        return repository.findLoginInfo(user.getEmail(), user.getPassword());
    }

    @Override
    public void deleteUser(int id) {
        repository.deleteById(id);
    }

    @Override
    public void updateUser(User user, int id) {
        User userDb = repository.findById(id).get();
        userDb.setName(user.getName());
        userDb.setEmail(user.getEmail());
        repository.save(user);
    }
}