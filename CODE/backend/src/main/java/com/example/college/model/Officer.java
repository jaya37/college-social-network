package com.example.college.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@ToString
@Entity
public class Officer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String email;
    private String password;

    private String phone;
    private String dept;
    private String subject;

    public Officer(String name, String email, String password, String dept, String subject) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.dept = dept;
        this.subject = subject;
    }

}
