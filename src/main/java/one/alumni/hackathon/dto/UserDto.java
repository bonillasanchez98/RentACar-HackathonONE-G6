package one.alumni.hackathon.dto;

import lombok.Data;
import one.alumni.hackathon.entity.enums.UserRole;

@Data
public class UserDto {

    private Long id_user;
    private String username;
    private String email;
    private UserRole userRole;
}
