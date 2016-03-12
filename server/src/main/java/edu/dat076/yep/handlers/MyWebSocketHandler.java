package edu.dat076.yep.handlers;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
public class MyWebSocketHandler extends TextWebSocketHandler {

    private List<WebSocketSession> sessions;

    public MyWebSocketHandler() {
       sessions = new ArrayList<WebSocketSession>();
    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable throwable) throws Exception {
        System.out.println("error occured at sender");

    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        System.out.println("Session closed");
        sessions.remove(session);
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        this.sessions.add(session);

        System.out.println("Added session with ID: " + session.getId());
    }

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        String id = session.getId();

        System.out.println("Send text message to session ID: " + session.getId());

        TextMessage msg = new TextMessage(message.getPayload());

        for (WebSocketSession currentSession: this.sessions) {
            currentSession.sendMessage(msg);
        }
    }
}
