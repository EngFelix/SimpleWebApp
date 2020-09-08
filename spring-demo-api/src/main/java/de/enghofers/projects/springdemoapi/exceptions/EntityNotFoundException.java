package de.enghofers.projects.springdemoapi.exceptions;

import de.enghofers.projects.springdemoapi.domain.BaseEntity;

public class EntityNotFoundException extends RuntimeException {
    public EntityNotFoundException(Class<? extends BaseEntity> entityClass, Long id) {
        super("Could not find entity " + entityClass.getName() + " with id " + id);
    }
}
