package one.alumni.hackathon.entity;

import jakarta.persistence.*;
import lombok.Data;
import one.alumni.hackathon.dto.CarDto;
import one.alumni.hackathon.entity.enums.CarTransmission;
import one.alumni.hackathon.entity.enums.VehicleType;

@Entity
@Data
@Table(name = "cars")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_car;
    private String brand;
    private String model;
    private Integer year;
    private String color;
    private String capacity;
    private CarTransmission carTransmission;
    private String fuel;
    private VehicleType vehicleType;
    private double price;

    public CarDto getCarDto(){
        CarDto carDto = new CarDto();
        carDto.setId_car(id_car);
        carDto.setBrand(brand);
        carDto.setModel(model);
        carDto.setYear(year);
        carDto.setColor(color);
        carDto.setCapacity(capacity);
        carDto.setCarTransmission(carTransmission);
        carDto.setFuel(fuel);
        carDto.setVehicleType(vehicleType);
        carDto.setPrice(price);
        return carDto;
    }
}
