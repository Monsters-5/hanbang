package com.monsters.hanbang.dto;

import lombok.*;

import java.util.List;

@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RequestTentLogDto {
    private List<Long> id;
}
