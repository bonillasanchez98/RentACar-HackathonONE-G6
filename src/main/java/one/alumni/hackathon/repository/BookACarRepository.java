package one.alumni.hackathon.repository;

import one.alumni.hackathon.entity.BookACar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookACarRepository extends JpaRepository<BookACar, Long> {
}
