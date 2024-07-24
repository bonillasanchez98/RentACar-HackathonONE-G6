package one.alumni.hackathon.dto.request;

import lombok.Data;

@Data
public class SignupRequest {
    private String email;
    private String username;
    private String password;

}
