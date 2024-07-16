package one.alumni.hackathon.entity;

import jakarta.persistence.*;
import lombok.Data;
import one.alumni.hackathon.entity.enums.UserRole;

@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_user;
    private String username;
    private String email;
    private String password;
    private UserRole userRole;

}
