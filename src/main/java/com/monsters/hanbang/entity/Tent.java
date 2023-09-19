package com.monsters.hanbang.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@ToString
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Entity
public class Tent {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
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
}
