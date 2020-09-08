package de.enghofers.projects.springdemoapi.services;

import de.enghofers.projects.springdemoapi.domain.TimeEntry;

import java.util.Collection;
import java.util.Optional;

public interface TimeManagementService {
    Collection<TimeEntry> getAllTimeEntries();
    Collection<TimeEntry> getAllTimeEntriesOfUser(Long userId);
    Optional<TimeEntry> getTimeEntry(Long id);

    TimeEntry createNewTimeEntry(TimeEntry timeEntry);


}
