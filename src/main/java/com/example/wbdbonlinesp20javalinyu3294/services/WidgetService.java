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
public class WidgetService {
    @Autowired
    WidgetRepository widgetRepository;

    @Autowired
    TopicRepository topicRepository;

    public Widget createWidgetForTopic(Integer topicId, Widget newWidget) {
        Topic topic = topicRepository.findById(topicId).get();
        newWidget.setTopic(topic);
        topic.addWidgets(newWidget);
        return widgetRepository.save(newWidget);

    }

    public int updateWidget(Integer widgetId, Widget updateWidget) {
        Widget oldWidget = widgetRepository.findById(widgetId).get();
        oldWidget.setTitle(updateWidget.getTitle());
        oldWidget.setType(updateWidget.getType());
        oldWidget.setOrder(updateWidget.getOrder());
        oldWidget.setText(updateWidget.getText());
        oldWidget.setURL(updateWidget.getURL());
        oldWidget.setWidth(updateWidget.getWidth());
        oldWidget.setHeight(updateWidget.getHeight());
        oldWidget.setCssClass(updateWidget.getCssClass());
        oldWidget.setTitle(updateWidget.getTitle());
        oldWidget.setValue(updateWidget.getValue());
        widgetRepository.save(oldWidget);
        return 1;
    }

    public int deleteWidget(Integer widgetId) {
        widgetRepository.deleteById(widgetId);
        return 1;
    }

    public List<Widget> findAllWidgets() {
        return (List<Widget>)widgetRepository.findAll();
    }

    public List<Widget> findWidgetsForTopic(Integer topicId) {
        return widgetRepository.findWidgetForTopic(topicId);
    }

    public Widget findWidgetById(Integer wid){
        return widgetRepository.findById(wid).get();
    }


}

