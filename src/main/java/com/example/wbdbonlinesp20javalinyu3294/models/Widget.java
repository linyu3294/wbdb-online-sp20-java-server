package com.example.wbdbonlinesp20javalinyu3294.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@CrossOrigin(origins = "*")
@Table(name="widgets")
public class Widget {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String type;
    private int widget_order;
    private String text = "New Widget";
    private String url;
    private String title = "New Widget";
    private Integer textSize =4;
    private int width;
    private int height;
    private String cssClass;
    private String value;


    @ManyToOne
    @JsonIgnore
    private Topic topic;

    public int getTopicId () {return this.topic.getId();}

    public Topic getTopic() {return this.topic;}
    public void setTopic(Topic topic) {this.topic = topic;}

    public String getName() {return this.name;}
    public void setName(String name) {this.name = name;}

    //Needed in order to expose the id field to service url
    public Integer getId() {return id;}
    public void setId(Integer id) { this.id = id; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type;}

    public int getOrder() { return widget_order; }
    public void setOrder(int order) { this.widget_order = order;}

    public String getText() { return text; }
    public void setText(String text) { this.text = text; }

    public Integer getTextSize() {return this.textSize;}
    public void setTextSize(Integer textSize) {this.textSize = textSize;}

    public String getURL() { return url; }
    public void setURL(String text) { this.url = url; }

    public int getWidth() { return width; }
    public void setWidth(int width) { this.width = width; }

    public int getHeight() { return height; }
    public void setHeight(int height) { this.height = height; }

    public String getCssClass() {return cssClass; }
    public void setCssClass(String cssClass) { this.cssClass = cssClass; }

    public String getTitle() {return title; }
    public void setTitle(String title) { this.title = title; }

    public String getValue() { return value;}
    public void setValue(String value) { this.value = value; }

}
