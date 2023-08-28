package com.example.college.repository;

import com.example.college.model.Officer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfficerRepository extends JpaRepository<Officer,Integer> {
    Officer getByEmailAndPassword(String email, String password);
}
