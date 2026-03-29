package com.portfolio.api;

import jakarta.persistence.*;
import lombok.Data;
import java.util.UUID;

@Entity
@Table(name = "projects")
@Data
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String title;
    private String description;
    private String techStack;
    private String githubUrl;
    private String liveUrl;
    private String imageUrl;
    private Boolean featured;
}