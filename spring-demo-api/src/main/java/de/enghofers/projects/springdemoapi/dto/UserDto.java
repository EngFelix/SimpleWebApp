package de.enghofers.projects.springdemoapi.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
public class UserDto extends BaseDto {

    public UserDto(Long id,
                   @NotBlank(message = "First name is mandatory") String firstName,
                   @NotBlank(message = "Last name is mandatory") String lastName,
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

    @Getter
    @Setter
    @NotBlank(message = "First name is mandatory")
    private String firstName;

    @Getter
    @Setter
    @NotBlank(message = "Last name is mandatory")
    private String lastName;

    @Getter
    @Setter
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate birthDate;

    @Getter
    @Setter
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd hh:mm:ss")
    private LocalDateTime createdAt;

    @Getter
    @Setter
//    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd hh:mm:ss")
    private LocalDateTime lastModified;
}
