package Mail.SMTP;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FromSubmission {
    private String name;
    private String email;
    private String message;
    private String location;
    private String phone;
}
