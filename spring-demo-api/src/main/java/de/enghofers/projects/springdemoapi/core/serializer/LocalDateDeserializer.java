package de.enghofers.projects.springdemoapi.core.serializer;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import de.enghofers.projects.springdemoapi.core.util.DateUtil;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class LocalDateDeserializer extends StdDeserializer<LocalDate> {

    private static final long serialVersionUID = 1698072189822857975L;

    public LocalDateDeserializer() {
        super(LocalDate.class);
    }

    @Override
    public LocalDate deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException, JsonProcessingException {
        if (jp.getValueAsString() == null)
            return null;
        return LocalDate.parse(jp.getValueAsString(), DateTimeFormatter.ofPattern(DateUtil.DATE_PATTERN + "[['T']HH:mm:ss.SSS[xxx][xx][X]]"));
    }

}
