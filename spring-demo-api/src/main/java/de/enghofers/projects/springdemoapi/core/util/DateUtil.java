package de.enghofers.projects.springdemoapi.core.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.Properties;

public abstract class DateUtil {

    private static final Logger LOGGER = LoggerFactory.getLogger(DateUtil.class);

    private static final Properties props;

    static {
        props = new Properties();
        try {
            String activeProfile = System.getProperty("spring.profiles.active");
            String uri = "/application";
            if (activeProfile != null && activeProfile.length() > 0) {
                uri += '-' + activeProfile;
            }
            uri += ".properties";
            props.load(DateUtil.class.getResourceAsStream(uri));
        } catch (IOException e) {
            LOGGER.error(e.getMessage(), e);
        }
    }

    public static final String DATE_PATTERN = props.getProperty("internal.date.format");

    public static final String DATE_TIME_PATTERN = props.getProperty("external.dateTime.format.ISOwithSecond");
}
