package com.practice.bookstore.bookstoreapp.repository;

import com.practice.bookstore.bookstoreapp.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource
@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
}
