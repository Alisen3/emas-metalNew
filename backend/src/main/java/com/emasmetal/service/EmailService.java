package com.emasmetal.service;

import com.emasmetal.entity.ContactMessage;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${app.mail.to:info@emasmetal.com}")
    private String toEmail;

    @Value("${app.mail.from:noreply@emasmetal.com}")
    private String fromEmail;

    @Value("${app.mail.enabled:true}")
    private boolean mailEnabled;

    @Value("${app.file.upload-dir:./uploads}")
    private String uploadDir;

    @Async
    public void sendContactNotification(ContactMessage message) {
        if (!mailEnabled) {
            log.info("Email sending is disabled. Skipping notification for message: {}", message.getId());
            return;
        }

        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(toEmail);
            helper.setReplyTo(message.getEmail());
            helper.setSubject(buildSubject(message));
            helper.setText(buildEmailBody(message), true);

            // Attach file if exists
            if (message.getAttachmentUrl() != null && !message.getAttachmentUrl().isEmpty()) {
                attachFile(helper, message);
            }

            mailSender.send(mimeMessage);
            log.info("Contact notification email sent successfully for message: {}", message.getId());

        } catch (MessagingException e) {
            log.error("Failed to send contact notification email for message: {}", message.getId(), e);
        }
    }

    private void attachFile(MimeMessageHelper helper, ContactMessage message) {
        try {
            // attachmentUrl format: /uploads/attachments/filename.ext
            String relativePath = message.getAttachmentUrl();
            if (relativePath.startsWith("/uploads/")) {
                relativePath = relativePath.substring("/uploads/".length());
            }

            Path filePath = Paths.get(uploadDir, relativePath);
            File file = filePath.toFile();

            if (file.exists() && file.isFile()) {
                FileSystemResource resource = new FileSystemResource(file);
                String filename = message.getAttachmentFilename() != null
                    ? message.getAttachmentFilename()
                    : file.getName();
                helper.addAttachment(filename, resource);
                log.info("Attached file: {} to email", filename);
            } else {
                log.warn("Attachment file not found: {}", filePath);
            }
        } catch (MessagingException e) {
            log.error("Failed to attach file to email", e);
        }
    }

    private String buildSubject(ContactMessage message) {
        String company = message.getCompany() != null && !message.getCompany().isEmpty()
            ? " - " + message.getCompany()
            : "";
        return String.format("[EMAS Metal] Yeni İletişim Formu: %s%s", message.getName(), company);
    }

    private String buildEmailBody(ContactMessage message) {
        StringBuilder sb = new StringBuilder();
        sb.append("<html><body style='font-family: Arial, sans-serif;'>");
        sb.append("<h2 style='color: #1e3a5f;'>Yeni İletişim Formu Mesajı</h2>");
        sb.append("<hr style='border: 1px solid #e0e0e0;'>");

        sb.append("<table style='width: 100%; border-collapse: collapse;'>");

        addRow(sb, "Ad Soyad", message.getName());

        if (message.getCompany() != null && !message.getCompany().isEmpty()) {
            addRow(sb, "Şirket", message.getCompany());
        }

        addRow(sb, "E-posta", String.format("<a href='mailto:%s'>%s</a>",
            message.getEmail(), message.getEmail()));

        if (message.getPhone() != null && !message.getPhone().isEmpty()) {
            addRow(sb, "Telefon", String.format("<a href='tel:%s'>%s</a>",
                message.getPhone(), message.getPhone()));
        }

        sb.append("</table>");

        sb.append("<h3 style='color: #1e3a5f; margin-top: 20px;'>Mesaj:</h3>");
        sb.append("<div style='background-color: #f5f5f5; padding: 15px; border-radius: 5px;'>");
        sb.append(message.getMessage().replace("\n", "<br>"));
        sb.append("</div>");

        if (message.getAttachmentFilename() != null) {
            sb.append("<p style='margin-top: 20px; color: #666;'>");
            sb.append("<strong>Ek Dosya:</strong> ");
            sb.append(message.getAttachmentFilename());
            sb.append(" (bu e-postaya eklenmiştir)");
            sb.append("</p>");
        }

        sb.append("<hr style='border: 1px solid #e0e0e0; margin-top: 30px;'>");
        sb.append("<p style='color: #888; font-size: 12px;'>");
        sb.append("Bu mesaj EMAS Metal web sitesindeki iletişim formundan gönderilmiştir.");
        sb.append("</p>");

        sb.append("</body></html>");
        return sb.toString();
    }

    private void addRow(StringBuilder sb, String label, String value) {
        sb.append("<tr>");
        sb.append("<td style='padding: 8px 0; font-weight: bold; width: 120px; color: #333;'>");
        sb.append(label).append(":</td>");
        sb.append("<td style='padding: 8px 0; color: #555;'>").append(value).append("</td>");
        sb.append("</tr>");
    }
}
