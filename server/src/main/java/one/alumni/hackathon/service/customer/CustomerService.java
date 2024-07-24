package one.alumni.hackathon.service.customer;

import one.alumni.hackathon.dto.BookACarDto;
import one.alumni.hackathon.dto.CarDto;

import java.util.List;

public interface CustomerService {

    List<CarDto> findAllCars();

    boolean bookACar(BookACarDto bookACarDto);

    CarDto getCarById (Long id);
}
