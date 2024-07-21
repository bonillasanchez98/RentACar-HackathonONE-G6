package one.alumni.hackathon.dto;

import lombok.Data;
import one.alumni.hackathon.entity.enums.CarTransmission;
import one.alumni.hackathon.entity.enums.VehicleType;

@Data
public class CarDto {

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
}
