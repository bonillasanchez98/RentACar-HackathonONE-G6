package one.alumni.hackathon.controller;

import lombok.RequiredArgsConstructor;
import one.alumni.hackathon.dto.SignupRequest;
import one.alumni.hackathon.dto.UserDto;
import one.alumni.hackathon.service.auth.AuthServiceImpl;
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

    private final AuthServiceImpl authService;

    @PostMapping("/signup")
    public ResponseEntity<?> signupCustomer(@RequestBody SignupRequest signupRequest){

        //Validando que el email que venga no exista
        if(authService.isCustomerEmailExists(signupRequest.getEmail()))
            return new ResponseEntity<>("Customer with email ["+ signupRequest.getEmail() + "] already exists",
                    HttpStatus.NOT_ACCEPTABLE);

        UserDto createdCustomer = authService.createdCustomer(signupRequest);
        if(createdCustomer == null)
            return new ResponseEntity<>("Customer couldn't be created", HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(createdCustomer, HttpStatus.CREATED );
    }

}
