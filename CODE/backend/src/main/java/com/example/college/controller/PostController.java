package com.example.college.controller;

import com.example.college.model.Comment;
import com.example.college.model.Post;
import com.example.college.service.CommentService;
import com.example.college.service.PostService;
import com.example.college.utils.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.awt.font.ImageGraphicAttribute;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PostController {
    @Autowired
    private PostService postService;

    @Autowired
    private CommentService commentService;


    @GetMapping("/posts")
    private ResponseEntity<?> allPosts() {
        List<Post> posts = new ArrayList<>();
        for (Post p : postService.allPosts()) {
            p.setImageData(ImageUtils.decompressBytes(p.getImageData()));
            posts.add(p);
        }
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    @GetMapping("/posts/{id}")
    private ResponseEntity<?> postGetById(@PathVariable("id") int id) {
        try {
            Post p = postService.postGetById(id);
            p.setImageData(ImageUtils.decompressBytes(p.getImageData()));
            return new ResponseEntity<>(p, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/posts")
    private ResponseEntity<?> postPost(@RequestParam("title") String title,
                                       @RequestParam("content") String content,
                                       @RequestParam("creator") String creator,
                                       @RequestParam("image") MultipartFile file) {
        try {
            byte[] imageData = ImageUtils.compressBytes(file.getBytes());
            Post p = new Post(title, content, imageData);
            p.setCreator(creator);
            postService.postPost(p);
            return new ResponseEntity<>(p, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PatchMapping("/posts/{id}")
    private ResponseEntity<?> updatePost(@RequestBody Post p, @PathVariable int id) {
        try {
            Post a = postService.postGetById(id);
            a.setTitle(p.getTitle());
            a.setCreator(p.getCreator());
            a.setApproved(true);
            a.setContent(p.getContent());
            postService.updatePost(a);
            return new ResponseEntity<>(a, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PatchMapping("/posts/{id}/comment")
    private ResponseEntity<?> commentOnPost(@PathVariable int id, @RequestBody Comment c) {
        try {
            Post p = postService.postGetById(id);
            commentService.postComment(c);
            p.getComments().add(c);
            postService.updatePost(p);
            return new ResponseEntity<>(new HashMap<>().put("msg", "comment added successfully"), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @DeleteMapping("/posts/{id}")
    private ResponseEntity<?> deletePost(@PathVariable int id) {
        try {
            postService.deletePost(id);
            HashMap<String, String> res = new HashMap<>();
            res.put("msg", "Post deleted successfully");
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
