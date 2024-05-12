package Mail.SMTP;

import jakarta.mail.MessagingException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@CrossOrigin("*")
public class ControllerM {
    @Autowired
    private ServiceM emailService;

    @PostMapping("/submitForm")
    public ResponseEntity<String> submitForm(@RequestBody FromSubmission submission) {
        try {
            String bOfM= " \n \nContact Information \n \n Name : \t "+submission.getName()+"\n Phone : \t"+submission.getPhone()+"\n Location : \t"
                    +submission.getLocation() +"\n Mail : \t"+submission.getEmail() +"\n \n"+submission.getMessage();
            emailService.sendEmail(submission.getEmail(), "New Customer request from "+ submission.getName() +"Through Website" ,bOfM);
            return ResponseEntity.ok("Form submitted successfully!");
        } catch (MessagingException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to submit form. Please try again later.");
        }
        //
    }
}
