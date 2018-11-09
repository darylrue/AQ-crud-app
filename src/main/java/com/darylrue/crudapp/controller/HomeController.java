package com.darylrue.crudapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Simple controller to serve the landing page (index.html)
 */
@Controller
public class HomeController {

    /**
     * This is the landing page
     *
     * @return index.html
     */
    @GetMapping("/")
    public String index() {
        return "index";
    }
}
