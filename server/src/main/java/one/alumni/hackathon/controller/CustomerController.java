package one.alumni.hackathon.controller;

import lombok.RequiredArgsConstructor;
import one.alumni.hackathon.dto.BookACarDto;
import one.alumni.hackathon.dto.CarDto;
import one.alumni.hackathon.service.customer.CustomerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rentCar/customer")
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService customerService;

    @GetMapping("/cars")
    public ResponseEntity<List<CarDto>> findAllCars(){
        return new ResponseEntity<>(customerService.findAllCars(), HttpStatus.OK);
    }

    @PostMapping("/car/book")
    public ResponseEntity<?> bookACar(@RequestBody BookACarDto bookACarDto){
        boolean isBookCreated = customerService.bookACar(bookACarDto);
        if(isBookCreated){
            return new ResponseEntity<>("Book created successfully!", HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>("Book couldn't be created", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/car/{id}")
    public ResponseEntity<CarDto> getCarById(@PathVariable Long id){
        CarDto carDto = customerService.getCarById(id);
        if(carDto == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(carDto);
    }

}
