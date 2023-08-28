package com.example.college.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor

public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String content;
    private String comment_by;

    public Comment(String content, String comment_by) {
        this.content = content;
        this.comment_by = comment_by;
    }
}
