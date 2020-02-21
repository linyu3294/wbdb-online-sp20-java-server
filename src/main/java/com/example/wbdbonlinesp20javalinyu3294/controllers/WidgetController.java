package com.example.wbdbonlinesp20javalinyu3294.controllers;

import com.example.wbdbonlinesp20javalinyu3294.models.Widget;
import com.example.wbdbonlinesp20javalinyu3294.services.WidgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*")
public class WidgetController {

    @Autowired
    WidgetService service;

    @PutMapping("/api/widgets/{wid}")
    public int updateWidget(@PathVariable("wid") String widgetId,
                            @RequestBody Widget widget) {
        return service.updateWidget(widgetId, widget);
    }

    @DeleteMapping("/api/widgets/{wid}")
    public int deleteWidget(@PathVariable("wid") String widgetId) {
        System.out.println("deleting");
        return service.deleteWidget(widgetId);
    }

    @PostMapping("/api/widgets")
    public Widget createWidget(@RequestBody Widget newWidget) {
        System.out.println("creating a widget");
        return service.createWidget(newWidget);
    }

    @GetMapping("/api/widgets")
    public List<Widget> findAllWidgets() {

        return service.findAllWidgets();
    }

    @GetMapping("/api/topics/{tid}/widgets")
    public List<Widget> findWidgetsForTopic(@PathVariable("tid") String tid) {
        return service.findWidgetsForTopic(tid);
    }

}
