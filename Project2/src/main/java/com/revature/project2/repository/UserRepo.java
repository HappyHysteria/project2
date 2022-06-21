package com.revature.project2.repository;

import com.revature.project2.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
    List<User> findByUsername(String username);
    List<User> findByEmail(String email);
    Optional<User> findByUsernameAndPassword(String username, String password);
}
