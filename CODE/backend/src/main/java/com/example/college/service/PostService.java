package com.example.college.service;

import com.example.college.model.Post;
import com.example.college.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Autowired
    public PostRepository postRepository;

    public List<Post> allPosts() {
        return postRepository.findAll();
    }

    public Post postGetById(int id) {
        return postRepository.findById(id).get();
    }

    public void postPost(Post p) {
        postRepository.save(p);
    }

    public void updatePost(Post p) {
        postRepository.save(p);
    }

    public void deletePost(int id) {
        postRepository.deleteById(id);
    }

}
