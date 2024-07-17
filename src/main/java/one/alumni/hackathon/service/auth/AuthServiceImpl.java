package one.alumni.hackathon.service.auth;

import lombok.RequiredArgsConstructor;
import one.alumni.hackathon.dto.SignupRequest;
import one.alumni.hackathon.dto.UserDto;
import one.alumni.hackathon.entity.User;
import one.alumni.hackathon.entity.enums.UserRole;
import one.alumni.hackathon.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{

    private final UserRepository userRepository;

    @Override
    public UserDto createCustomer(SignupRequest signupRequest) {
        //Seteando los valores del signup al user
        User user = new User();
        user.setUsername(signupRequest.getName());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(signupRequest.getPassword());
        user.setUserRole(UserRole.CUSTOMER); //Asignando el rol customer al usuario que se registra
        User createdUser = userRepository.save(user); //El usuario credo se almacena en esta variable

        //Se instancia un UserDto para almacenar el id del usuario guardado anteriormente y retornarlo
        UserDto userDto =  new UserDto();
        user.setId_user(createdUser.getId_user());

        return userDto;
    }

    @Override
    public boolean isCustomerEmailExist(String email) {
        return userRepository.findFirstByEmail(email).isPresent();
    }
}
