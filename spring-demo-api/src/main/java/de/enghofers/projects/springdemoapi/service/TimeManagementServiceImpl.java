package de.enghofers.projects.springdemoapi.service;

import de.enghofers.projects.springdemoapi.domain.TimeEntry;
import de.enghofers.projects.springdemoapi.exception.EntityNotFoundException;
import de.enghofers.projects.springdemoapi.repository.TimeEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class TimeManagementServiceImpl implements TimeManagementService {

    private final TimeEntryRepository timeEntryRepository;
    private final UserService userService;

    @Autowired
    public TimeManagementServiceImpl(TimeEntryRepository timeEntryRepository, UserService userService) {
        this.timeEntryRepository = timeEntryRepository;
        this.userService = userService;
    }


    @Override
    public Collection<TimeEntry> getAllTimeEntries() {
        return timeEntryRepository.findAll();
    }

    @Override
    public Collection<TimeEntry> getAllTimeEntriesOfUser(Long userId) {
        return timeEntryRepository.findAllByUserId(userId);
    }

    @Override
    public Optional<TimeEntry> getTimeEntry(Long id) throws EntityNotFoundException {
        return timeEntryRepository.findById(id);
    }

    @Override
    public TimeEntry createNewTimeEntry(TimeEntry timeEntry) {
        return timeEntryRepository.save(timeEntry);
    }
}
