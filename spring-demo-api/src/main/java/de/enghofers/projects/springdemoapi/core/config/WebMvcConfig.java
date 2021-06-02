package de.enghofers.projects.springdemoapi.core.config;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.core.Version;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.module.SimpleModule;
import de.enghofers.projects.springdemoapi.core.serializer.LocalDateDeserializer;
import de.enghofers.projects.springdemoapi.core.serializer.LocalDateSerializer;
import de.enghofers.projects.springdemoapi.core.serializer.LocalDateTimeDeserializer;
import de.enghofers.projects.springdemoapi.core.serializer.LocalDateTimeSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.TimeZone;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**/*")
                .addResourceLocations("classpath:/static/")
                .resourceChain(true)
                .addResolver(new PathResourceResolver() {
                    @Override
                    protected Resource getResource(String resourcePath, Resource location) throws IOException {
                        Resource requestedResource = location.createRelative(resourcePath);
                        return requestedResource.exists() && requestedResource.isReadable() ? requestedResource : new ClassPathResource("/static/index.html");
                    }
                });
    }

    @Bean
    public MappingJackson2HttpMessageConverter persistentBagConverter() {

        MappingJackson2HttpMessageConverter messageConverter = new MappingJackson2HttpMessageConverter();

        ObjectMapper mapper = new ObjectMapper().configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
        SimpleModule persistentBagModule = new SimpleModule("persistentBagModule", new Version(1,
                0,
                0,
                null,
                null,
                null));
        persistentBagModule.addSerializer(new LocalDateSerializer());
        persistentBagModule.addDeserializer(LocalDate.class, new LocalDateDeserializer());
        persistentBagModule.addSerializer(new LocalDateTimeSerializer());
        persistentBagModule.addDeserializer(LocalDateTime.class, new LocalDateTimeDeserializer());

        mapper.setTimeZone(TimeZone.getDefault());

//        LOGGER.info("time zone info : " + TimeZone.getDefault().getDisplayName() );

        messageConverter.setObjectMapper(mapper);
        mapper.setVisibility(
                mapper.getSerializationConfig().
                        getDefaultVisibilityChecker().
                        withFieldVisibility(JsonAutoDetect.Visibility.ANY).
                        withGetterVisibility(JsonAutoDetect.Visibility.NONE));

        mapper.registerModule(persistentBagModule);
        return messageConverter;
    }
}
