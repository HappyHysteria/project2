package com.revature.project2.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@ToString
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private int userId;
    private String name;
    private String email;
    private String password;

}
