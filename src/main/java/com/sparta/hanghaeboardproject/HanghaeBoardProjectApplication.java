package com.sparta.hanghaeboardproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class HanghaeBoardProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(HanghaeBoardProjectApplication.class, args);
    }

}
