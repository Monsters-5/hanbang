package com.monsters.hanbang.dto;

import com.monsters.hanbang.entity.Tent;
import lombok.*;

@Getter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TentDto {
    private Long id;

    private String name; // 그늘막 구역 이름

    private String status; // 운영 상태 : 포화, 혼잡, 여유, 미운영

    private String division; // 구분 : 직영시설

    private String address; // 주소

    private String location; // 위치

    private String park; // 공원

    private long gfa; // 연면적

    private String periodOfUse; // 이용기간

    private String operationTime; // 운영시간

    private String howToUse; // 이용방법

    private String fee; // 이용료

    private String info; // 시설(이용)안내

    private String contact; // 연락처

    public static TentDto from(Tent entity) {
        return TentDto.builder()
                .id(entity.getId())
                .name(entity.getName())
                .status(entity.getStatus())
                .division(entity.getDivision())
                .address(entity.getAddress())
                .location(entity.getLocation())
                .park(entity.getPark())
                .gfa(entity.getGfa())
                .periodOfUse(entity.getPeriodOfUse())
                .operationTime(entity.getOperationTime())
                .howToUse(entity.getHowToUse())
                .fee(entity.getFee())
                .info(entity.getInfo())
                .contact(entity.getContact())
                .build();
    }
}
