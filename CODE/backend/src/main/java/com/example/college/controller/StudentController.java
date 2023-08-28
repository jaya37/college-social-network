package com.example.college.controller;

import com.example.college.model.Message;
import com.example.college.model.Student;
import com.example.college.service.MessageService;
import com.example.college.service.StudentService;
import org.hibernate.annotations.GeneratorType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {
    @Autowired
    public StudentService studentService;

    @Autowired
    private MessageService messageService;

    @PostMapping("/students/login")
    private ResponseEntity<?> studentLogin(@RequestBody HashMap<String, String> body) {
        try {
            String email = body.get("email");
            String password = body.get("password");
            Student s = studentService.getByEmailAndPassword(email, password);
            if (s != null) {
                if (s.isApproved()) {
                    return new ResponseEntity<>(s, HttpStatus.OK);
                } else {
                    Hashtable<String, String> map = new Hashtable<>();
                    map.put("msg", "You are not approved by the admin yet");
                    return new ResponseEntity<>(map, HttpStatus.OK);
                }
            } else {
                Hashtable<String, String> map = new Hashtable<>();
                map.put("msg", "Please check the credentials");
                return new ResponseEntity<>(map, HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(e.getLocalizedMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/students")
    private ResponseEntity<?> allStudents() {
        return new ResponseEntity<>(studentService.allStudents(), HttpStatus.OK);
    }

    @GetMapping("/students/{id}")
    private ResponseEntity<?> studentGetById(@PathVariable("id") int id) {
        try {
            return new ResponseEntity<>(studentService.studentGetById(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

    @PostMapping("/students")
    private ResponseEntity<?> postStudent(@RequestBody Student s) {
        try {
            studentService.postStudent(s);
            return new ResponseEntity<>(studentService.studentGetById(s.getId()), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PatchMapping("/students/{id}")
    private ResponseEntity<?> updateStudent(@RequestBody Student s, @PathVariable int id) {
        try {
            Student a = studentService.studentGetById(id);
            a.setName(s.getName());
            a.setEmail(s.getEmail());
            a.setMarks(s.getMarks());
            a.setBacklogs(s.getBacklogs());
            a.setApproved(true);
            a.setSubject(s.getSubject());
            studentService.updateStudent(a);
            return new ResponseEntity<>(a, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getLocalizedMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/students/{id}")
    private ResponseEntity<?> deleteStudent(@PathVariable("id") int id) {
        try {
            studentService.deleteStudent(id);
            HashMap<String, String> res = new HashMap<>();
            res.put("msg", "Student Deleted Successfully");
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping("/students/messages")
    private ResponseEntity<?> addMessage(@RequestBody Message m) {
        try {
            messageService.addMessage(m);
            HashMap<String, String> res = new HashMap<>();
            res.put("msg", "Message sent successfully");
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/students/messages")
    private ResponseEntity<?> getAllMessages() {
        try {
            return new ResponseEntity<>(messageService.messageList(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/students/messages/{from}/{to}")
    private ResponseEntity<?> getMessagesSenderToReceiver(@PathVariable String from, @PathVariable String to) {
        try {
            return new ResponseEntity<>(messageService.getMessageBySenderAndReceiver(from, to), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
