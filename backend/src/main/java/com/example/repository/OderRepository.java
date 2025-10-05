package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.entity.Oder;

@Repository
public interface OderRepository extends JpaRepository<Oder, Integer> {

}
