package de.enghofers.projects.springdemoapi.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity(name = "User")
@Table(name="demo_user")
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
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate birthDate;

    @Getter
    @Setter
    @Column(name = "created_at")
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd hh:mm:ss")
    private LocalDateTime createdAt;

    @Getter
    @Setter
    @Column(name = "last_modified")
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd hh:mm:ss")
    private LocalDateTime lastModified;

    public User(Long id,
                String firstName,
                String lastName,
                LocalDate birthDate,
                LocalDateTime createdAt,
                LocalDateTime lastModified) {

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.createdAt = createdAt;
        this.lastModified = lastModified;
    }

    @Override
    public String toString() {
        return super.toString() +
                ", First Name: " + firstName +
                ", Last Name: " + lastName +
                (birthDate == null ? "" : (", Birth Date: " + birthDate.toString()));
    }
}
