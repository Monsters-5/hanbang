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

    private Long tent_cnt; // model output

    private String timestamp; // 현재 시간

    public TentLog toEntity() {
        return TentLog.builder()
                .id(id)
                .tent_cnt(tent_cnt)
                .timestamp(timestamp)
                .build();
    }

    public static TentLogDto from(TentLog entity) {
        return TentLogDto.builder()
                .id(entity.getId())
                .tent_cnt(entity.getTent_cnt())
                .timestamp(entity.getTimestamp())
                .build();
    }
}
