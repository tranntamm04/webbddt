package com.example.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.entity.Product;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * \n" +
            "from product p\n" +
            "inner join product_type pt on pt.id_type= p.id_type\n" +
            "where pt.name_type like %:t%", nativeQuery = true)
    Page<Product> searchTag(@Param("t") String t, Pageable pageable);

    @Query("select p from Product p inner join ProductType pt on pt.idType = p.productType.idType where p.productName like %:itemSearch% or pt.nameType like %:itemSearch% order by p.idProduct")
    Page<Product> searchItem(@Param("itemSearch") String itemSearch, Pageable pageable);
}
