package com.example.wbdbonlinesp20javalinyu3294.repositories;

import com.example.wbdbonlinesp20javalinyu3294.models.Widget;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface WidgetRepository
        extends CrudRepository <Widget, Integer> {
        // SELECT * FROM widgets WHERE topic_id=tid
        @Query(value="SELECT * FROM widgets WHERE topic_id=:tid", nativeQuery = true)
        public List<Widget> findWidgetForTopic(@Param("tid") Integer topicId);
}
