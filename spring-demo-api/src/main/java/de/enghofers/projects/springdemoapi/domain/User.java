package de.enghofers.projects.springdemoapi.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

@Entity(name = "User")
@Table(name="demo_user")
@AllArgsConstructor
@NoArgsConstructor
public class User extends BaseEntity {

    @Getter
    @Setter
    @Column(name = "first_name")
    @NotBlank(message = "First name is mandatory")
    private String firstName;

    @Getter
    @Setter
    @Column(name = "last_name")
    @NotBlank(message = "Last name is mandatory")
    private String lastName;

    @Getter
    @Setter
    @Column(name = "birth_date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone="GMT")
    private LocalDate birthDate;

    @Override
    public String toString() {
        return super.toString() +
                ", First Name: " + firstName +
                ", Last Name: " + lastName +
                (birthDate == null ? "" : (", Birth Date: " + birthDate.toString()));
    }
}
