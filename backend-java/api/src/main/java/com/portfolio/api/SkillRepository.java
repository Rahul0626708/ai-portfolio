package com.portfolio.api;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface SkillRepository extends JpaRepository<Skill, UUID> {
}