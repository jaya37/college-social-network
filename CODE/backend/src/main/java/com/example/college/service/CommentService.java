package com.example.college.service;

import com.example.college.model.Comment;
import com.example.college.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    @Autowired
    public CommentRepository commentRepository;

    public List<Comment> allComments(){
        return commentRepository.findAll();
    }
    public  Comment commentGetById(int id){
        return commentRepository.findById(id).get();
    }
    public void postComment(Comment c){
        commentRepository.save(c);
    }
    public  void updateComment(Comment c){
         commentRepository.save(c);
    }
    public void deleteComment(int id){
        Comment c=commentRepository.getById(id);
        commentRepository.delete(c);
    }
}
