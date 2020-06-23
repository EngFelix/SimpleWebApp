package de.enghofers.projects.springdemoapi.domain;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity(name = "User")
@Table(name="demo_user")
@AllArgsConstructor
@NoArgsConstructor
public class User extends BaseEntity {

    @Getter
    @Setter
    @NonNull
    @Column(name = "first_name")
    private String firstName;

    @Getter
    @Setter
    @NonNull
    @Column(name = "last_name")
    private String lastName;

    @Getter
    @Setter
    @NonNull
    @Column(name = "birth_date")
    private LocalDate birthDate;

    @Override
    public String toString() {
        return super.toString() + ", First Name: " + firstName + ", Last Name: " + lastName + ", Birth Date: " + birthDate.toString();
    }
}
