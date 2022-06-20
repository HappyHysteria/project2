package com.revature.project2.repository;

import com.revature.project2.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepo extends JpaRepository<User, Long> {
    List<User> findByUsername(String username);
    List<User> findByEmail(String email);
    User findByUsernameAndPassword(String username, String password);
}
