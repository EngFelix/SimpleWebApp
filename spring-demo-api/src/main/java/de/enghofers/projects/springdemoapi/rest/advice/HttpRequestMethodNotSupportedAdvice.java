package de.enghofers.projects.springdemoapi.rest.advice;

import org.springframework.http.HttpStatus;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

public class HttpRequestMethodNotSupportedAdvice {

    @ResponseBody
    @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
    @ResponseStatus(HttpStatus.NOT_IMPLEMENTED)
    String httpRequestMethodNotSupportedHandler(HttpRequestMethodNotSupportedException ex) {
        return ex.getMessage();
    }
}
