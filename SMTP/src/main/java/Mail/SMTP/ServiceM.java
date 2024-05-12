package Mail.SMTP;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class ServiceM {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmail(String to, String subject, String body) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setTo("prithivip01@gmail.com");
        helper.setSubject(subject);
        helper.setText(body);
        javaMailSender.send(message);

        helper.setTo(to);
        helper.setSubject("Welcome To Wintek");
        helper.setText("We have Recieved Your Request SuccessFully , We Will Shortly Contact You");

        javaMailSender.send(message);
    }
}
