package com.example.college.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@ToString
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String title;
    private boolean approved;

    @Lob
    private byte[] imageData;
    private String content;
    private String creator;

    private int likes;
    private int dislikes;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    private List<Comment> comments;

    public Post(String title, String content, byte[] imageData) {
        this.title = title;
        this.content = content;
        this.imageData = imageData;
    }

}
