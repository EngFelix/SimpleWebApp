package de.enghofers.projects.springdemoapi.rest.controller;

import de.enghofers.projects.springdemoapi.domain.TimeEntry;
import de.enghofers.projects.springdemoapi.exceptions.EntityNotFoundException;
import de.enghofers.projects.springdemoapi.services.TimeManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin(origins = "http://localhost:4200")
public class TimeEntryRestController {

    private final TimeManagementService timeManagementService;

    @Autowired
    public TimeEntryRestController(TimeManagementService timeManagementService) {
        this.timeManagementService = timeManagementService;
    }

    @GetMapping("/time-entries")
    public ResponseEntity<Collection<TimeEntry>> getAllTimeEntries() {
        return ResponseEntity.ok(timeManagementService.getAllTimeEntries());
    }

    @GetMapping("/time-entries/of-user/{id}")
    public ResponseEntity<Collection<TimeEntry>> getAllTimeEntriesOfUser(@RequestParam Long id) {
        return ResponseEntity.ok(timeManagementService.getAllTimeEntriesOfUser(id));
    }

    @GetMapping("/time-entries/{id}")
    public ResponseEntity<TimeEntry> getTimeEntry(@RequestParam Long id) {
        return ResponseEntity.ok(timeManagementService.getTimeEntry(id).orElseThrow(() ->new EntityNotFoundException(TimeEntry.class, id)));
    }
}
