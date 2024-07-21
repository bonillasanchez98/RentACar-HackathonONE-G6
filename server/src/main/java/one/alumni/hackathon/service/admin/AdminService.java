package one.alumni.hackathon.service.admin;

import one.alumni.hackathon.dto.CarDto;

import java.util.List;

//Esta interface es la que gestionara las aoperaciones CRUD que hara el admin con los vehiculos
public interface AdminService {

    boolean saveCar(CarDto carDto);

    List<CarDto> findAllCars();

    void deleteCar(Long id);

    CarDto getCarById(Long id);

    boolean updateCar(Long id, CarDto carDto);
}
