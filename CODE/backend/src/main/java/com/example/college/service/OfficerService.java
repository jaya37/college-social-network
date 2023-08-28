package com.example.college.service;

import com.example.college.model.Officer;
import com.example.college.repository.OfficerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class OfficerService {
    @Autowired
    public OfficerRepository officerRepository;

    public List<Officer> allOfficer() {
        return officerRepository.findAll();
    }

    public Officer officerGetById(int id) {
        return officerRepository.findById(id).get();
    }

    public void postOfficer(@RequestBody Officer s) {
        officerRepository.save(s);
    }

    public void updateOfficer(Officer s) {
        officerRepository.save(s);
    }

    public void deleteOfficer(int id) {
        officerRepository.deleteById(id);
    }

    public Officer getByUsernameAndPassword(String email, String password) {
        return officerRepository.getByEmailAndPassword(email, password);
    }

    public Officer getByEmailAndPassword(String email, String password) {
        return officerRepository.getByEmailAndPassword(email, password);
    }
}
