package de.enghofers.projects.springdemoapi.repositories;

import de.enghofers.projects.springdemoapi.domain.TimeEntry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITimeEntryRepository extends JpaRepository<TimeEntry, Long> {
}
