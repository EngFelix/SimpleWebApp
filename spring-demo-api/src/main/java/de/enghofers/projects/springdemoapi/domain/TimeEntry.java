package de.enghofers.projects.springdemoapi.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "TimeEntry")
@Table(name="time_entry")
@AllArgsConstructor
@NoArgsConstructor
public class TimeEntry extends BaseEntity {

    @Getter
    @Setter
    @ManyToOne()
    private User user;

    @Getter
    @Setter
    @Column(name = "start_time")
    private LocalDateTime startTime;

    @Getter
    @Setter
    @Column(name = "end_time")
    private LocalDateTime endTime;

    @Override
    public String toString() {
        return super.toString() + "startTime: " + startTime + "; endTime: " + endTime + ";";
    }
}
