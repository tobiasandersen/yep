package edu.dat076.yep.controllers;

import edu.dat076.yep.models.Board;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


/**
 * Created by marcus on 2016-02-18.
 */
@RestController
public class BoardController {

    @RequestMapping(value="/boards", method=RequestMethod.GET)
    public List<Board> findAllBoards() {
        return null;
    }

    @RequestMapping(value="/boards/{boardID}", method=RequestMethod.GET)
    public Board findBoardByID(@PathVariable int boardID) {
        return null;
    }

}
