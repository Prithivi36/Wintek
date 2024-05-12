package Mail.SMTP;

import jakarta.mail.MessagingException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class ControllerM {
    @Autowired
    private ServiceM emailService;

    @PostMapping("/submitForm")
    public ResponseEntity<String> submitForm(@RequestBody FromSubmission submission) {
        try {
            String bOfM= submission.getMessage()+" \n \nContact : \n Name : \t "+submission.getName()+"\n Phone : \t"+submission.getPhone()+"\n Location : \t"
                    +submission.getLocation() +"Mail : \t"+submission.getEmail();
            emailService.sendEmail(submission.getEmail(), "New Customer request from "+ submission.getName() +"Through Website" ,bOfM);
            return ResponseEntity.ok("Form submitted successfully!");
        } catch (MessagingException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to submit form. Please try again later.");
        }
        //
    }
}
