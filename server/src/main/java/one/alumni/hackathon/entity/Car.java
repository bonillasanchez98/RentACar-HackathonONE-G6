package one.alumni.hackathon.entity;

import jakarta.persistence.*;
import lombok.Data;
import one.alumni.hackathon.entity.enums.CarTransmission;
import one.alumni.hackathon.entity.enums.VehicleType;

import java.text.DateFormat;

@Entity
@Data
@Table(name = "cars")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_car;
    private String brand;
    private String model;
    private DateFormat year;
    private String color;
    private String capacity;
    private CarTransmission carTransmission;
    private String fuel;
    private VehicleType vehicleType;
    private double price;
}
