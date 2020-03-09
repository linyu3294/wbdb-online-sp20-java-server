package com.example.wbdbonlinesp20javalinyu3294.models;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@CrossOrigin(origins = "*")
@Table(name="topics")
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String lessonId;
    private String title;
    private String text;

    @OneToMany
    private List<Widget> widgets;


    public List<Widget> getWidgets() {return this.widgets;}
    public void setWidgets(List<Widget> widgets) {this.widgets = widgets;}
    public void addWidget(Widget widget) {this.widgets.add(widget);}
    public void removeWidget(Widget widget) {this.widgets.remove(widget);}

    public void setLessonId (String lessonId) { this.lessonId = lessonId;}
    public String getLessonId () {return this.lessonId;}

    public Integer getId () {return this.id;}

    public String getTitle() { return this.title; }
    public void setTitle(String title) { this.title = title;}

    public String getText() { return this.text; }
    public void setText(String text) { this.text = text;}


}
