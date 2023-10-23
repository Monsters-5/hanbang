package com.monsters.hanbang.service;

import com.monsters.hanbang.dto.TentDto;
import com.monsters.hanbang.entity.Tent;
import com.monsters.hanbang.repository.TentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class TentService {
    private final TentRepository tentRepository;

    public List<TentDto> getAllTent() {
        List<Tent> tents = tentRepository.findAll();
        return tents.stream().map(TentDto::from).collect(Collectors.toList());
    }
}
