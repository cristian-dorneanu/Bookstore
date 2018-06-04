package com.practice.bookstore.bookstoreapp.controller;

import com.practice.bookstore.bookstoreapp.model.Book;
import com.practice.bookstore.bookstoreapp.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.Collection;

@RestController
public class BookController {

    @Autowired
    BookRepository bookRepository;

    @GetMapping("/books")
    public Collection<Book> retrieveAllBooks() {
        return bookRepository.findAll();
    }

    @PostMapping("/books")
    public ResponseEntity<Object> saveBook(@RequestBody Book book) {
        Book savedBook = bookRepository.save(book);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("{id}")
                        .buildAndExpand(savedBook.getId()).toUri();

        return ResponseEntity.created(location).build();
    }

}
