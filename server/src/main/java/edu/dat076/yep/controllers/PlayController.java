package edu.dat076.yep.controllers;

/**
 * Created by andersen on 2016-03-10.
 */
import edu.dat076.yep.models.Greeting;
import edu.dat076.yep.models.HelloMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class PlayController {

    @MessageMapping("/events")
    @SendTo("/events")
    public Greeting player(HelloMessage message) throws Exception {
        System.out.println("Here");
        return new Greeting("Hello, " + message.getName() + "!");
    }

}
