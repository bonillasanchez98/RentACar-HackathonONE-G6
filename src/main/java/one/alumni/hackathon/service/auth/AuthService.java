package one.alumni.hackathon.service.auth;

import one.alumni.hackathon.dto.SignupRequest;
import one.alumni.hackathon.dto.UserDto;

public interface AuthService {

    //Metodo para crear un customer, donde se pedira como paramentro una clase de tipo signup request
    UserDto createCustomer(SignupRequest signupRequest);

    //Metodo para validar que el email que se envia ya existe
    boolean isCustomerEmailExist(String email);
}
