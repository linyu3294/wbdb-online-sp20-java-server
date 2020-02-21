package com.example.wbdbonlinesp20javalinyu3294.models;

public class Widget {
    private String name;
    private String id;
    private String type = "HEADING";
    private int order;
    private String text = "New Widget";
    private String url;
    private String title = "New Widget";
    private int width;
    private int height;
    private int size = 2;
    private String cssClass;
    private String style;
    private String value;
    private String topicId;

    private String getName() {return this.name;}
    private void setName(String name) {this.name = name;}

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getType() { return type; }
    public void setType(String type) { this.type = type;}

    public int getOrder() { return order; }
    public void setOrder(int order) { this.order = order;}

    public String getText() { return text; }
    public void setText(String text) { this.text = text; }

    public String getURL() { return url; }
    public void setURL(String text) { this.url = url; }

    public int getSize() {return size; }
    public void setSize(int size) { this.size = size; }

    public int getWidth() { return width; }
    public void setWidth(int width) { this.width = width; }

    public int getHeight() { return height; }
    public void setHeight(int size) { this.height = height; }

    public String getCssClass() {return cssClass; }
    public void setCssClass(String cssClass) { this.cssClass = cssClass; }

    public String getTitle() {return title; }
    public void setTitle(String title) { this.title = title; }

    public String getValue() { return value;}
    public void setValue(String value) { this.value = value; }

    public String getTopicId() { return topicId; }
    public void setTopicId(String topicId) { this.topicId = topicId; }
}
