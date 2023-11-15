package com.monsters.hanbang.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.monsters.hanbang.dto.RequestTentLogDto;
import com.monsters.hanbang.dto.TentDto;
import com.monsters.hanbang.dto.TentLogDto;
import com.monsters.hanbang.service.TentLogService;
import com.monsters.hanbang.service.TentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/api/tents")
@RestController
public class TentController {
    private final RestTemplate restTemplate = new RestTemplate();
    private final TentService tentService;
    private final TentLogService tentLogService;

    @GetMapping
    public ResponseEntity<List<TentDto>> getAllTents() {
        return ResponseEntity.ok(tentService.getAllTent());
    }

    @PostMapping("/logs")
    public ResponseEntity<List<TentLogDto>> getTentLogs(@RequestBody RequestTentLogDto request) throws JsonProcessingException {
        // 1. model 요청 보내기
        // 헤더 설정
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // HttpEntity 생성
        HttpEntity<RequestTentLogDto> requestEntity = new HttpEntity<>(request, headers);

        // 서버로 POST 요청 보내기
        ResponseEntity<String> response = restTemplate.postForEntity(
                "http://ec2-13-124-119-183.ap-northeast-2.compute.amazonaws.com:5000/predict",
                requestEntity,
                String.class
        );

        if (response.getStatusCode() == HttpStatus.OK) { // status가 ok
            // 2. data 저장하기
            tentLogService.save(response.getBody());
            // 3. data 반환
            return ResponseEntity.ok().body(tentLogService.parsing(response.getBody()));
        } else {  // status가 ok가 아니면
            return ResponseEntity.status(response.getStatusCode()).build();
        }
    }
}

