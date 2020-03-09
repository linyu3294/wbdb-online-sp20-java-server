package com.example.wbdbonlinesp20javalinyu3294.repositories;
import com.example.wbdbonlinesp20javalinyu3294.models.Topic;
import com.example.wbdbonlinesp20javalinyu3294.models.Widget;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TopicRepository
    extends CrudRepository <Topic, Integer>{
    @Query(value="SELECT * FROM topics WHERE lesson_id=:lid", nativeQuery = true)
    public List<Topic> findTopicsForLesson(@Param("lid") String lessonId);

}
