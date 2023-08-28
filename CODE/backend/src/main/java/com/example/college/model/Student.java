package com.example.college.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@ToString
@NoArgsConstructor
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String email;
    private String password;
    private String name;

    private String phone;

    private int marks;
    private int backlogs;
    private String subject;

    private boolean isApproved;

    public Student(String email, String password, String name, String subject) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.subject = subject;
    }
}
