package one.alumni.hackathon.controller;

import lombok.RequiredArgsConstructor;
import one.alumni.hackathon.dto.CarDto;
import one.alumni.hackathon.service.admin.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rentCar/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @PostMapping("/car")
    public ResponseEntity<?> saveCar(@RequestBody CarDto carDto){
        boolean isCarCreated = adminService.saveCar(carDto);
        if(isCarCreated){
            return new ResponseEntity<>("Car created successfully!", HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>("Car couldn't be created", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/cars")
    public ResponseEntity<List<CarDto>> getAllCars(){
        return new ResponseEntity<>(adminService.findAllCars(), HttpStatus.OK);
    }

    @DeleteMapping("/car/{id}")
    public ResponseEntity<?> deleteCarById(@PathVariable Long id){
        adminService.deleteCar(id);
        return new ResponseEntity<>("Car deleted successfully!", HttpStatus.OK);
    }

    @GetMapping("/car/{id}")
    public ResponseEntity<CarDto> getCarById(@PathVariable Long id){
        CarDto cardto = adminService.getCarById(id);
        return new ResponseEntity<>(cardto, HttpStatus.OK);
    }

    @PutMapping("/car/{id}")
    public ResponseEntity<?> updateCar(@PathVariable Long id, @RequestBody CarDto carDto){
        boolean isCarExist = adminService.updateCar(id,carDto);
        if (isCarExist)
            return new ResponseEntity<>("Car updated successfully!", HttpStatus.OK);
        return new ResponseEntity<>("Car couldn't be update", HttpStatus.BAD_REQUEST);
    }
}
