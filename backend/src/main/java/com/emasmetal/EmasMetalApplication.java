package com.emasmetal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class EmasMetalApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(EmasMetalApplication.class, args);
    }
}
