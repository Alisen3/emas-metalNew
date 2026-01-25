package com.emasmetal.config;

import com.emasmetal.entity.GalleryItem;
import com.emasmetal.entity.Reference;
import com.emasmetal.entity.Role;
import com.emasmetal.entity.User;
import com.emasmetal.repository.GalleryItemRepository;
import com.emasmetal.repository.ReferenceRepository;
import com.emasmetal.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
@Slf4j
public class DataInitializer {

    @Value("${admin.username:admin}")
    private String adminUsername;

    @Value("${admin.password:admin123}")
    private String adminPassword;

    @Value("${admin.email:admin@emasmetal.com}")
    private String adminEmail;

    @Bean
    @Profile("dev")
    public CommandLineRunner initData(
            ReferenceRepository referenceRepository,
            GalleryItemRepository galleryItemRepository,
            UserRepository userRepository,
            PasswordEncoder passwordEncoder) {

        return args -> {
            // Initialize admin user
            if (!userRepository.existsByUsername(adminUsername)) {
                log.info("Creating admin user...");
                User admin = User.builder()
                        .username(adminUsername)
                        .email(adminEmail)
                        .password(passwordEncoder.encode(adminPassword))
                        .role(Role.ADMIN)
                        .enabled(true)
                        .build();
                userRepository.save(admin);
                log.info("Admin user created with username: {}", adminUsername);
            }
            if (referenceRepository.count() == 0) {
                log.info("Initializing company references...");

                referenceRepository.save(Reference.builder()
                        .name("Arıkan Automotive")
                        .websiteUrl("https://www.arikanautomotive.com/tr")
                        .logoUrl("/images/references/arikan.png")
                        .industry("Otomotiv Yan Sanayi")
                        .displayOrder(1)
                        .build());

                referenceRepository.save(Reference.builder()
                        .name("Köklüce Makina")
                        .websiteUrl("https://www.koklucemakina.com/")
                        .logoUrl("/images/references/kokluce.png")
                        .industry("Tarım Makineleri")
                        .displayOrder(2)
                        .build());

                referenceRepository.save(Reference.builder()
                        .name("EPTA")
                        .websiteUrl("https://eptaglobal.com/")
                        .logoUrl("/images/references/epta.png")
                        .industry("Beyaz Eşya Yan Sanayi")
                        .displayOrder(3)
                        .build());

                referenceRepository.save(Reference.builder()
                        .name("ÖNAYSAN")
                        .websiteUrl("https://www.onaysan.com.tr/")
                        .logoUrl("/images/references/onaysan.png")
                        .industry("Beyaz Eşya Yan Sanayi")
                        .displayOrder(4)
                        .build());

                referenceRepository.save(Reference.builder()
                        .name("HİSARLAR")
                        .websiteUrl("https://www.hisarlar.com.tr/index.html")
                        .logoUrl("/images/references/hisarlar.png")
                        .industry("Tarım Makineleri")
                        .displayOrder(5)
                        .build());

                referenceRepository.save(Reference.builder()
                        .name("DÜŞLERSAN")
                        .websiteUrl("https://www.duslersan.com/")
                        .logoUrl("/images/references/duslersan.png")
                        .industry("Robotik")
                        .displayOrder(6)
                        .build());

                log.info("Company references created");
            }
            
            if (galleryItemRepository.count() == 0) {
                log.info("Initializing gallery items...");

                // Milling (Freze) kategorisi
                galleryItemRepository.save(GalleryItem.builder()
                        .title("CNC Freze Makinesi")
                        .imageUrl("/images/gallery/IMG_1136.jpg")
                        .category("Milling")
                        .description("Yüksek hassasiyetli CNC freze işleme merkezi")
                        .displayOrder(1)
                        .build());

                // Turning (Torna) kategorisi
                galleryItemRepository.save(GalleryItem.builder()
                        .title("CNC Torna İşlemi")
                        .imageUrl("/images/gallery/IMG_1130.jpg")
                        .category("Turning")
                        .description("Hassas CNC torna operasyonu")
                        .displayOrder(2)
                        .build());

                galleryItemRepository.save(GalleryItem.builder()
                        .title("Torna Üretimi")
                        .imageUrl("/images/gallery/IMG_1131.jpg")
                        .category("Turning")
                        .description("Yüksek toleranslı torna işleme")
                        .displayOrder(3)
                        .build());

                galleryItemRepository.save(GalleryItem.builder()
                        .title("Döner Şaft Üretimi")
                        .imageUrl("/images/gallery/IMG_1133.jpg")
                        .category("Turning")
                        .description("Hassas şaft ve mil üretimi")
                        .displayOrder(4)
                        .build());

                galleryItemRepository.save(GalleryItem.builder()
                        .title("Torna Atölyesi")
                        .imageUrl("/images/gallery/IMG_1142.jpg")
                        .category("Turning")
                        .description("Modern torna üretim hattı")
                        .displayOrder(5)
                        .build());

                log.info("Gallery items created");
            }
        };
    }
}
