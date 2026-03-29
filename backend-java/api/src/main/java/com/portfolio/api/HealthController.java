package com.portfolio.api;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class HealthController {

	@GetMapping("/health")
	public Map<String, String> health() {
		return Map.of(
				"status", "ok",
				"service", "spring-boot");
	}
}