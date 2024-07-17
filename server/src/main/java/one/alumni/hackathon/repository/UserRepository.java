package one.alumni.hackathon.repository;

import one.alumni.hackathon.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    //Se declara de tipo Optional<> para oder acceder al metodo isPresent() y valida que exista
    Optional<User> findFirstByEmail(String email);
}
