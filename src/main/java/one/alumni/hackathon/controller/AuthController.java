package one.alumni.hackathon.controller;

import lombok.RequiredArgsConstructor;
import one.alumni.hackathon.dto.SignupRequest;
import one.alumni.hackathon.dto.UserDto;
import one.alumni.hackathon.service.auth.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rentCar/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<?> sigupCustomer(@RequestBody SignupRequest signupRequest){
        //Validando que el email que se recibe no exista
        if(authService.isCustomerEmailExist(signupRequest.getEmail()))
            return new ResponseEntity<>("Customer already exist with email: " + signupRequest.getEmail(),
                    HttpStatus.NOT_ACCEPTABLE);
        //Creando el customer que se recibe
        UserDto customerCreatedDto = authService.createCustomer(signupRequest);
        if (customerCreatedDto==null)
            return new ResponseEntity<>("Customer couldn't be created", HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(customerCreatedDto, HttpStatus.CREATED);
    }

}
