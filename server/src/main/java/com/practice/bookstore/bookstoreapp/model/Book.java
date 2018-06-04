package com.practice.bookstore.bookstoreapp.model;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@NamedQuery(name = Book.FIND_ALL, query = "SELECT book FROM Book book")
@XmlRootElement
public class Book {
    static final String FIND_ALL = "Book.findAll";

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @Size(min = 5, max = 100)
    private String title;

    @NotNull @Size(min = 5, max = 100)
    private String author;

    @Column(name = "image_url")
    private String imageUrl;

    @NotNull @Min(1) @Max(Integer.MAX_VALUE)
    @Column(name = "number_of_pages")
    private Integer numberOfPages;

    @Column(name = "star_rating", columnDefinition = "FLOAT default 0")
    private Double starRating;

    private String editor;
    private String description;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Integer getNumberOfPages() {
        return numberOfPages;
    }

    public void setNumberOfPages(Integer numberOfPages) {
        this.numberOfPages = numberOfPages;
    }

    public Double getStarRating() {
        return starRating;
    }

    public void setStarRating(Double starRating) {
        this.starRating = starRating;
    }

    public String getEditor() {
        return editor;
    }

    public void setEditor(String editor) {
        this.editor = editor;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", numberOfPages=" + numberOfPages +
                ", starRating=" + starRating +
                ", editor='" + editor + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
