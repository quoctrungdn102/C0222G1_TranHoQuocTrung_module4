package com.codegym.blog.repository;

import com.codegym.blog.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

@Transactional
public interface ICategoryRepository extends JpaRepository<Category, Integer> {
    @Modifying
    @Query(value = "insert into category(name_category) value(:name) ", nativeQuery = true)
    void saveCategory(@Param("name") String name);
//    @Query(value = "insert into category(name_category) value(:name) ", nativeQuery = true)

    Category findAllByNameCategory(String nameCategory);

}
