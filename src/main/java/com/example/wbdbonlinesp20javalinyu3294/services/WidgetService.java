package com.example.wbdbonlinesp20javalinyu3294.services;

import com.example.wbdbonlinesp20javalinyu3294.models.Widget;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class WidgetService {

    List<Widget> widgets = new ArrayList<Widget>();

    {
        Widget w1 = new Widget();
        Widget w2 = new Widget();
        w1.setTitle("Widget 1");
        w1.setId("123");
        w1.setType("HEADING");
        w1.setText("Welcome to WebDev!");
        w1.setSize(2);
        w1.setTopicId("111");
        w2.setTitle("Widget 2");
        w2.setId("234");
        w2.setType("PARAGRAPH");
        w2.setTopicId("222");
        widgets.add(w1);
        widgets.add(w2);
    }

    public int deleteWidget(String widgetId) {
        widgets = widgets.stream()
                .filter(w -> !w.getId().equals(widgetId)).collect(Collectors.toList());
        return 1;
    }

    public Widget createWidget(Widget newWidget) {
        widgets.add(newWidget);
        return newWidget;
    }

    public List<Widget> findAllWidgets() {
        return widgets;
    }

    public List<Widget> findWidgetsForTopic(String topicId) {
        List<Widget> resultWidgets = new ArrayList<Widget>();
        for(Widget w: widgets) {
            if(topicId.equals(w.getTopicId())) {
                resultWidgets.add(w);
            }
        }
        return resultWidgets;
    }

    public int updateWidget(String widgetId, Widget updateWidget) {
        for(int i=0; i<widgets.size(); i++) {
            Widget widget = widgets.get(i);
            if(widget.getId().equals(widgetId)) {
                widgets.set(i, updateWidget);
                return 1;
            }
        }
        return 0;
    }
}
