package com.monsters.hanbang.dto;

import com.monsters.hanbang.entity.TentLog;
import lombok.*;

@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TentLogDto {
    private Long id;

    private String name; // 그늘막 구역 이름

    private Long value; // model output

    private String timestamp; // 현재 시간

    public static TentLogDto from(TentLog entity) {
        return TentLogDto.builder()
                .id(entity.getId())
                .name(entity.getName())
                .value(entity.getValue())
                .timestamp(entity.getTimestamp())
                .build();
    }
}
