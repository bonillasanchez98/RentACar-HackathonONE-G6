package one.alumni.hackathon.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.text.DateFormat;

@Entity
@Data
@Table(name = "book_a_car")
public class BookACar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_booking;
    private DateFormat booking_start_date;
    private DateFormat booking_end_date;
    private Long booking_days;
    private double price;
    //TODO: Relaciones entre entidades
    /*private User user;
    private Car car;*/
}
