package com.xfactor.openlibrary.controllers;

import java.util.HashMap;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("helloController")
public class Hello {

    @GetMapping("/hello")
    public String hello(@RequestParam String name, int number) {
        return "Hello " + name + number + " !!";
    }

    @GetMapping("/hi/{name}/{n}")
    public String hi(@PathVariable String name, @PathVariable int n) {
        return "Hi " + name + n + " !!";
    }

    @GetMapping("/yo/{name}")
    public String yo(@PathVariable String name, @RequestParam int number) {
        return "Hi " + name + number + " !!";
    }

    @GetMapping("/sayhi/{name}/{n}")
    public HashMap<String, Object> sayhi(@PathVariable String name, @PathVariable int n) {
        HashMap<String,Object> hm = new HashMap<>();
        hm.put("name",name);
        hm.put("number", n);
        return hm;
    }

}
