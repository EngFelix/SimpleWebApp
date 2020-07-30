package de.enghofers.projects.springdemoapi.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.util.Collection;

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

    @Getter
    @Setter
    @OneToMany(cascade = CascadeType.ALL)
    private Collection<TimeEntry> timeEntries;

    @Override
    public String toString() {
        return super.toString() +
                ", First Name: " + firstName +
                ", Last Name: " + lastName +
                (birthDate == null ? "" : (", Birth Date: " + birthDate.toString()));
    }
}
