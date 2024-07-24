package one.alumni.hackathon.service.customer;

import ch.qos.logback.core.util.TimeUtil;
import lombok.RequiredArgsConstructor;
import one.alumni.hackathon.dto.BookACarDto;
import one.alumni.hackathon.dto.CarDto;
import one.alumni.hackathon.entity.BookACar;
import one.alumni.hackathon.entity.Car;
import one.alumni.hackathon.entity.User;
import one.alumni.hackathon.entity.enums.BookCarStatus;
import one.alumni.hackathon.repository.BookACarRepository;
import one.alumni.hackathon.repository.CarRepository;
import one.alumni.hackathon.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService{

    private final CarRepository carRepository;
    private final UserRepository userRepository;
    private final BookACarRepository bookACarRepository;

    @Override
    public List<CarDto> findAllCars() {
        return carRepository.findAll().stream().map(Car::getCarDto).collect(Collectors.toList());
    }

    @Override
    public boolean bookACar(BookACarDto bookACarDto) {
        Optional<Car> optCar = carRepository.findById(bookACarDto.getId_car());
        Optional<User> optUser = userRepository.findById(bookACarDto.getId_user());
        if(optCar.isPresent() && optUser.isPresent()){
            Car existCar = optCar.get();
            BookACar bookACar = new BookACar();
            bookACar.setCar(existCar);
            bookACar.setUser(optUser.get());
            bookACar.setBookCarStatus(BookCarStatus.APPROVED);
            long dif = bookACarDto.getBooking_start_date().getTime() - bookACarDto.getBooking_end_date().getTime();
            long days = TimeUtil.computeStartOfNextDay(dif);
            bookACar.setBooking_days(days);
            bookACar.setPrice(existCar.getPrice() * days);
            bookACarRepository.save(bookACar);
            return true;
        }
        return false;
    }

    @Override
    public CarDto getCarById(Long id) {
        Optional<Car> optCar = carRepository.findById(id);
        return optCar.map(Car::getCarDto).orElse(null);
    }
}
