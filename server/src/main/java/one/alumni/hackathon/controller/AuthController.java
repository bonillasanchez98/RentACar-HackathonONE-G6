package one.alumni.hackathon.controller;

import lombok.RequiredArgsConstructor;
import one.alumni.hackathon.dto.request.SignInRequest;
import one.alumni.hackathon.dto.request.SignupRequest;
import one.alumni.hackathon.dto.UserDto;
import one.alumni.hackathon.entity.User;
import one.alumni.hackathon.service.auth.AuthServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/rentCar/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthServiceImpl authService;

    @PostMapping("/signup")
    public ResponseEntity<?> signupCustomer(@RequestBody SignupRequest signupRequest){

        //Validando que el email que venga no exista
        if(authService.isCustomerEmailExists(signupRequest.getEmail())){
            Map<String, Object> map = new HashMap<>();
            map.put("message","Customer with email ["+ signupRequest.getEmail() + "] already exists");
            map.put("status",401);
            return new ResponseEntity<>(map, HttpStatus.UNAUTHORIZED);
        }

        UserDto createdCustomer = authService.createdCustomer(signupRequest);
        if(createdCustomer == null)
            return new ResponseEntity<>("Customer couldn't be created", HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(createdCustomer, HttpStatus.CREATED );
    }

    @PostMapping("/signIn")
    public ResponseEntity<?> signInCustomer(@RequestBody SignInRequest signInRequest){
        User userSigIn = authService.signIn(signInRequest.getUsername(), signInRequest.getPassword());
            Map<String, Object> map = new HashMap<>();
        if(userSigIn !=  null){
            return new ResponseEntity<>(userSigIn, HttpStatus.OK);
        }
            map.put("message","Username or Password incorrect");
            map.put("status",401);
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

}
