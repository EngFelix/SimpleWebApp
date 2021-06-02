package de.enghofers.projects.springdemoapi.repository;

import de.enghofers.projects.springdemoapi.domain.TimeEntry;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface TimeEntryRepository extends JpaRepository<TimeEntry, Long> {
    Collection<TimeEntry> findAllByUserId(Long userId);
}
