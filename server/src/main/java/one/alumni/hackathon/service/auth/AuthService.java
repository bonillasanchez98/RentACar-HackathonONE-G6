package one.alumni.hackathon.service.auth;

import one.alumni.hackathon.dto.request.SignupRequest;
import one.alumni.hackathon.dto.UserDto;
import one.alumni.hackathon.entity.User;

public interface AuthService {

    UserDto createdCustomer(SignupRequest signupRequest);

    //Metodo para validacion de email existente
    boolean isCustomerEmailExists(String email);

    User signIn (String username, String password);
}
