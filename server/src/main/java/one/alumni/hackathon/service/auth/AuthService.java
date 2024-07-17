package one.alumni.hackathon.service.auth;

import one.alumni.hackathon.dto.SignupRequest;
import one.alumni.hackathon.dto.UserDto;

public interface AuthService {

    UserDto createdCustomer(SignupRequest signupRequest);
}
