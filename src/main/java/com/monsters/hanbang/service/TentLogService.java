package com.monsters.hanbang.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.monsters.hanbang.dto.TentLogDto;
import com.monsters.hanbang.repository.TentLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class TentLogService {
    private final TentLogRepository tentLogRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public List<TentLogDto> parsing(String data) throws JsonProcessingException {
        return objectMapper.readValue(data, new TypeReference<List<TentLogDto>>() {
                }).stream()
                .sorted(Comparator.comparingLong(dto -> dto.getId()))
                .collect(Collectors.toList());
    }

    public void save(String data) throws JsonProcessingException {
        List<TentLogDto> logDtos = parsing(data);
        for (TentLogDto logDto : logDtos) {
            tentLogRepository.save(logDto.toEntity());
        }
    }
}
