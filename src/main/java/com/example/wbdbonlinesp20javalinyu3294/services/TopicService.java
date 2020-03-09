package com.example.wbdbonlinesp20javalinyu3294.services;

import com.example.wbdbonlinesp20javalinyu3294.models.Topic;
import com.example.wbdbonlinesp20javalinyu3294.models.Widget;
import com.example.wbdbonlinesp20javalinyu3294.repositories.TopicRepository;
import com.example.wbdbonlinesp20javalinyu3294.repositories.WidgetRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Service
@CrossOrigin(origins = "*")
public class TopicService {
    @Autowired
    TopicRepository topicRepository;

    @Autowired
    WidgetRepository widgetRepository;

    public Topic createTopic(Topic topic) {
       return topicRepository.save(topic);
    }

    public int updateTopic (Integer topicId, Topic updateTopic) {
        Topic oldTopic = topicRepository.findById(topicId).get();
        oldTopic.setTitle(updateTopic.getTitle());
        oldTopic.setText(updateTopic.getText());
        topicRepository.save(oldTopic);
        return 1;
    }

    public int deleteTopic(Integer topicId) {
        topicRepository.deleteById(topicId);
        return 1;
    }

    public List<Topic> findAllTopics() {
        return (List<Topic>)topicRepository.findAll();
    }

    public List<Topic> findTopicsForLesson (String lessonId) {
        return topicRepository.findTopicsForLesson(lessonId);
    }

    public Topic findTopicById(Integer topicId){
        return topicRepository.findById(topicId).get();
    }

}
