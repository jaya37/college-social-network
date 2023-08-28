package com.example.college.repository;

import com.example.college.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

    Student getByEmailAndPassword(String email, String password);
}
