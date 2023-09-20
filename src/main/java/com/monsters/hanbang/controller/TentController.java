package com.monsters.hanbang.controller;

import com.monsters.hanbang.dto.TentDto;
import com.monsters.hanbang.service.TentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/api/tents")
@RestController
public class TentController {
    private final TentService tentService;

    @GetMapping
    public ResponseEntity<List<TentDto>> getAllTents() {
        return ResponseEntity.ok(tentService.getAllTent());
    }
}
