package com.example.college.service;

import com.example.college.model.Student;
import com.example.college.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    public StudentRepository studentRepository;

    public List<Student> allStudents() {
        return studentRepository.findAll();
    }


    public Student studentGetById(int id) {
        return studentRepository.findById(id).get();
    }

    public void postStudent(Student s) {
        studentRepository.save(s);
    }

    public void updateStudent(Student s) {
        studentRepository.save(s);
    }

    public void deleteStudent(int id) {
        Student a = studentRepository.getById(id);
        studentRepository.delete(a);
    }

    public Student getByEmailAndPassword(String email, String password) {
        return studentRepository.getByEmailAndPassword(email, password);
    }


}
