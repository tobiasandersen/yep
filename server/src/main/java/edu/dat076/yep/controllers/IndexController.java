package edu.dat076.yep.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

import static edu.dat076.yep.utils.State.populateModel;

@Controller
public class IndexController {
    @RequestMapping(value = {"/", "/join", "/board", "/new"}, method = RequestMethod.GET)
    public ModelAndView index(HttpServletRequest request) {

        ModelAndView result = new ModelAndView();

        populateModel(result, request);

        result.addObject("title", "Yep");

        result.setViewName("index");

        return result;

    }
}
