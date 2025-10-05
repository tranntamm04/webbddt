package com.example.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.entity.Oder;
import com.example.repository.OderRepository;
import com.example.service.OderService;

import java.util.List;

@Service
public class OderServiceImpl implements OderService {
    @Autowired
    OderRepository oderRepository;

    @Override
    public List<Oder> findAll() {
        return this.oderRepository.findAll();
    }
}
