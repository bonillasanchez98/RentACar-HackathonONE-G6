package one.alumni.hackathon.dto;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;
import one.alumni.hackathon.entity.enums.UserRole;

@Data
public class UserDto {

    private Long id_user;
    private String username;
    private String email;
    @Enumerated(EnumType.STRING)
    private UserRole userRole;
}
