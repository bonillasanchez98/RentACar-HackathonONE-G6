package one.alumni.hackathon.service.admin;

import lombok.RequiredArgsConstructor;
import one.alumni.hackathon.dto.CarDto;
import one.alumni.hackathon.entity.Car;
import one.alumni.hackathon.repository.CarRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService{

    private final CarRepository carRepository;

    @Override
    public boolean saveCar(CarDto carDto) {
        try{
            Car car = new Car();
            car.setBrand(carDto.getBrand());
            car.setModel(carDto.getModel());
            car.setYear(carDto.getYear());
            car.setColor(carDto.getColor());
            car.setCapacity(carDto.getCapacity());
            car.setCarTransmission(carDto.getCarTransmission());
            car.setFuel(carDto.getFuel());
            car.setVehicleType(carDto.getVehicleType());
            car.setPrice(carDto.getPrice());
            carRepository.save(car);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    @Override
    public List<CarDto> findAllCars() {
        return carRepository.findAll().stream().map(Car::getCarDto).collect(Collectors.toList());
    }

    @Override
    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }

    @Override
    public CarDto getCarById(Long id) {
        Optional<Car> optCar = carRepository.findById(id);
        return optCar.map(Car::getCarDto).orElse(null);
    }

    @Override
    public boolean updateCar(Long id, CarDto carDto) {
        Optional<Car> optCar = carRepository.findById(id);
        if (optCar.isPresent()){
            Car existingCar = optCar.get();
            existingCar.setBrand(carDto.getBrand());
            existingCar.setModel(carDto.getModel());
            existingCar.setYear(carDto.getYear());
            existingCar.setColor(carDto.getColor());
            existingCar.setCapacity(carDto.getCapacity());
            existingCar.setCarTransmission(carDto.getCarTransmission());
            existingCar.setFuel(carDto.getFuel());
            existingCar.setVehicleType(carDto.getVehicleType());
            existingCar.setPrice(carDto.getPrice());
            carRepository.save(existingCar);
            return true;
        }else{
            return false;

        }
    }
}
