package com.portfolio.api;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:5173")
public class ProjectController {

    private final ProjectRepository repo;

    public ProjectController(ProjectRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Project> all() {
        return repo.findAll();
    }

    @GetMapping("/featured")
    public List<Project> featured() {
        return repo.findByFeaturedTrue();
    }

    @PostMapping
    public Project create(@RequestBody Project project) {
        return repo.save(project);
    }
}