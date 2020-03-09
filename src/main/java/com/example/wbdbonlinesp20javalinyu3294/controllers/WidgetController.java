package com.example.wbdbonlinesp20javalinyu3294.controllers;

import com.example.wbdbonlinesp20javalinyu3294.models.Widget;
import com.example.wbdbonlinesp20javalinyu3294.services.TopicService;
import com.example.wbdbonlinesp20javalinyu3294.services.WidgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@CrossOrigin(origins = "*")
public class WidgetController {

    @Autowired
    WidgetService wService;



    @PostMapping("/api/topics/{topicId}/widgets")
    public Widget createWidget(@PathVariable ("topicId") Integer topicId,
                               @RequestBody Widget newWidget) {
        return wService.createWidgetForTopic(topicId, newWidget);
    }

    @PutMapping("/api/widgets/{wid}")
    public int updateWidget(@PathVariable("wid") Integer widgetId,
                            @RequestBody Widget widget) {
        System.out.println("hello");
        System.out.println("Testing Widget Update" + widget.getTextSize());
        return wService.updateWidget(widgetId, widget);
    }

    @DeleteMapping("/api/widgets/{wid}")
    public int deleteWidget(@PathVariable("wid") Integer widgetId) {
        return wService.deleteWidget(widgetId);
    }

    @GetMapping("/api/widgets")
    public List<Widget> findAllWidgets() {return wService.findAllWidgets();
    }

    @GetMapping("/api/topics/{tid}/widgets")
    public List<Widget> findWidgetsForTopic(@PathVariable("tid") Integer topicId) {
        return wService.findWidgetsForTopic(topicId);
    }

    @GetMapping("/api/widgets/{wid}")
    public Widget findWidgetById(@PathVariable("wid") Integer widgetId) {
        return wService.findWidgetById(widgetId);
    }

}
