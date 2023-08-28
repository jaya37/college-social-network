package com.example.college.controller;

import com.example.college.model.Officer;
import com.example.college.service.OfficerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class OfficerController {
    @Autowired
    private OfficerService officerService;

    @PostMapping("/officers/login")
    private ResponseEntity<?> officerLogin(@RequestBody HashMap<String, String> body) {
        try {
            String email = body.get("email");
            String password = body.get("password");
            Officer s = officerService.getByEmailAndPassword(email, password);
            if (s != null) {
                return new ResponseEntity<>(s, HttpStatus.OK);
            } else {
                HashMap<String, String> map = new HashMap<>();
                map.put("msg", "Please check the credentials");
                return new ResponseEntity<>(map, HttpStatus.OK);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/officers")
    private ResponseEntity<?> allOfficers() {
        return new ResponseEntity<>(officerService.allOfficer(), HttpStatus.OK);
    }

    @GetMapping("/officers/{id}")
    private ResponseEntity<?> OfficerGetById(@PathVariable("id") int id) {
        try {
            return new ResponseEntity<>(officerService.officerGetById(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/officers")
    private ResponseEntity<?> postOfficer(@RequestBody Officer s) {
        try {
            officerService.postOfficer(s);
            HashMap<String, String> res = new HashMap<>();
            res.put("msg", "Officer added successfully");
            return new ResponseEntity<>(s, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PatchMapping("/officers/{id}")
    private ResponseEntity<?> updateOfficer(@RequestBody Officer s, @PathVariable int id) {
        try {
            Officer a = officerService.officerGetById(id);
            a.setName(s.getName());
            a.setEmail(s.getEmail());
            a.setPassword(s.getPassword());
            a.setDept(s.getDept());
            a.setSubject(s.getSubject());
            officerService.updateOfficer(a);
            return new ResponseEntity<>(a, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/officers/{id}")
    private ResponseEntity<?> deleteOfficer(@PathVariable int id) {
        try {
            officerService.deleteOfficer(id);
            return new ResponseEntity<>(new HashMap<>().put("msg", "Officer Deleted Successfully"), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
