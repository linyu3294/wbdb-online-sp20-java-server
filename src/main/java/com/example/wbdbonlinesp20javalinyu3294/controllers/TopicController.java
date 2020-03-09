package com.example.wbdbonlinesp20javalinyu3294.controllers;

import com.example.wbdbonlinesp20javalinyu3294.models.Topic;
import com.example.wbdbonlinesp20javalinyu3294.services.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TopicController {
    @Autowired
    TopicService tService;

    @PostMapping("/api/lessons/{lessonId}/topics")
    public Topic createTopic(@PathVariable("lessonId") String lessonId,
            @RequestBody Topic newTopic) {
        newTopic.setLessonId(lessonId);
        return tService.createTopic(newTopic);
    }

    @PutMapping("/api/topics/{tid}")
    public int updateTopic(@PathVariable("tid") Integer topicId,
                            @RequestBody Topic topic) {
    return tService.updateTopic(topicId, topic);
    }

    @DeleteMapping("/api/topics/{tid}")
    public int deleteTopic(@PathVariable("tid") Integer topicId) {
        return tService.deleteTopic(topicId);
    }
    @GetMapping("/api/topics")
    public List<Topic> findAllTopics() {
        return tService.findAllTopics();
    }

    @GetMapping("/api/lessons/{lid}/topics")
    public List<Topic> findTopicsForLesson(@PathVariable("lid") String lessonId) {
        System.out.println("Finding Topics for LessonId = " + lessonId);
        return tService.findTopicsForLesson(lessonId);

    }

    @GetMapping("/api/topics/{tid}")
    public Topic findTopicById(@PathVariable("tid") Integer topicId) {
        return tService.findTopicById(topicId);
    }
}
