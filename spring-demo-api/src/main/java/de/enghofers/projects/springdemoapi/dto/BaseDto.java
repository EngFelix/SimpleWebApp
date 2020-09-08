package de.enghofers.projects.springdemoapi.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
public abstract class BaseDto {
    @Getter
    @Setter
    protected Long id;
}
