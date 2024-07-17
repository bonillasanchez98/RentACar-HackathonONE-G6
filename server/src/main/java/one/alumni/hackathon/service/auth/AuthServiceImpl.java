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
    public UserDto createdCustomer(SignupRequest signupRequest) {
        //Se setean los campos requeridos del signup al usuario
        User user = new User();
        user.setEmail(signupRequest.getEmail());
        user.setUsername(signupRequest.getName());
        user.setPassword(signupRequest.getPassword());
        user.setUserRole(UserRole.CUSTOMER); //Se le asgina por defecto el rol de CUSTOMER

        User userCreated = userRepository.save(user); //Se guardan los atributos de la peticion en una variable

        //Se setea el id del usuario guardado en una instancia de userDto y la misma se retorna
        UserDto userDto = new UserDto();
        userDto.setId_user(userCreated.getId_user());

        return userDto;
    }

    //Metodo para valida que el email del customer no exista
    @Override
    public boolean isCustomerEmailExists(String email) {
        return userRepository.findFirstByEmail(email).isPresent();
    }
}
