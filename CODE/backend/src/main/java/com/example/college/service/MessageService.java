package com.example.college.service;

import com.example.college.model.Message;
import com.example.college.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    @Autowired
    private MessageRepository repository;

    public void addMessage(Message m) {
        repository.save(m);
    }

    public List<Message> messageList() {
        return repository.findAll();
    }

    public List<Message> getMessageBySenderAndReceiver(String sender, String receiver) {
        return repository.findBySenderAndReceiver(sender, receiver);
    }
}
