package com.domain.access_and_roles;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
public class ExampleController {
    @GetMapping("hello")
    public String hello() {
        return "Hello World 123-654";
    }

    @PostMapping(value = "hello")
    public Boolean hello(@RequestBody Integer body) {
        return true;
    }
}
