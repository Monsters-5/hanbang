# hanbang
- 2023.09.03 ~ 2023.11.17
- 한강의 그늘막 설치 구역의 정보를 확인하고 AI(YOLOv8)를 활용해 구역별 실시간 혼잡도를 제공하는 서비스 
<br><br>

### Service
<img src="https://github.com/Monsters-5/hanbang/assets/90389517/1dc0fd1c-4a74-4bc7-865f-816f87a15843"><br>
- 한강 그늘막 설치허용 구역 일괄 조회 및 AI를 활용한 혼잡도 확인
    - 지도상으로 구역 표시 및 혼잡도에 따라 색으로 구분
    - 미운영 / 여유 / 포화 / 혼잡 으로 구분
    - 좌측 목록을 통해 전 구역 요약정보 및 혼잡도 확인 가능
- 실시간 그늘막 설치 허용 구역 혼잡도 업데이트
    - 모델로부터 30분주기로 텐트 수에 대한 데이터를 받아 혼잡도와 세부내용의 ‘상태’ 정보 업데이트
- 설치 구역 클릭 후 세부 내용 조회
    - 요약정보: 구분, 주소, 위치정보 제공
    - 세부내용: 상태, 공원, 연면적, 이용기간, 운영시간, 이용방법, 이용료, 시설안내, 연락처정보 추가 제공
<br><br>

### Diagram
- use case diagram<br> 
<img src="https://github.com/Monsters-5/hanbang/assets/90389517/00180e25-1a0a-44db-96b6-1f32c1e8be1e"><br>

- sequence diagram<br>
<img src="https://github.com/Monsters-5/hanbang/assets/90389517/9d3a6d85-490e-45dc-ad6e-a0cbc1dea4b7"><br>

- [API 명세서](https://docs.google.com/spreadsheets/d/1e_t6tWlzqFRATgGQv2T0xq7iVp0s2pM9-5Nwjd51NhA/edit#gid=0)<br>
<br>

### Project Docs
- [Notion](https://www.notion.so/Monsters-93e467237df84caa9636d3a3065ed580?pvs=21)
- [GitHub Organization](https://github.com/Monsters-5)
    - [hanbang_infer](https://github.com/Monsters-5/hanbang_infer)
<br><br>

### Development Environment
- IntelliJ IDEA Ultimate 2022.03
- Java 17
- Spring Boot 3.1.3
- React 18.2.0
<br><br>

### Tech Stack
- Frontend<br>
  <img src="https://img.shields.io/badge/Figma-F24E1E.svg?style=for-the-badge&logo=Figma&logoColor=white"/> <img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/KakaoMap-FFCD00?style=for-the-badge&logo=Kakao&logoColor=white"/> <br>
- Backend<br>
  <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white"/> <img src="https://img.shields.io/badge/Spring DATA JPA-6DB33F?style=for-the-badge&logo=Spring&logoColor=white"/> <img src="https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=Gradle&logoColor=white"/> <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=MariaDB&logoColor=white"/> <br>
- Server<br>
  <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white"> <img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white"> <img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=GitHub Actions&logoColor=white"> <br>  
- Model<br>
  <img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"> <img src="https://img.shields.io/badge/YOLOv8-00FFFF?style=for-the-badge&logo=&logoColor=white"> <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=Flask&logoColor=white"> <br>
- Team Tools<br>
  <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/gitkraken-%179287.svg?style=for-the-badge&logo=gitkraken&logoColor=white"/> <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"/> <img src="https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white"/> <br>
<br>

### Members

|                                                        김다은                                                                     |                                      김정호                                                                        |
|:-------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------:|
| <img width="200" src="https://user-images.githubusercontent.com/77656241/215424915-043d3e72-5605-41c5-84af-4925d72732d2.png" /> | <img width="200" src="https://github.com/chy0503/chy0503/assets/90389517/86cae49c-c6c0-4d5d-a7e0-5d061580e2cb" /> |
|                                   **[Team Leader]**<br/>Model Server                                                                  |                                    Model Server                                                                   |
|                                     [@DaeunKim9](https://github.com/DaeunKim9)                                                  |                   [@KimJeongHo](https://github.com/Jeongho-K)                                                     |

|                                                               박성부                                                              |                                                        이낙규                                                      |                                     조희연                                       |
|:-------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------:|
| <img width="200" src="https://github.com/chy0503/chy0503/assets/90389517/eac504ea-b35c-4a12-8775-0b3270eeb51f" />               | <img width="200" src="https://github.com/chy0503/chy0503/assets/90389517/748e8440-d87e-448f-8894-76efbd762ed1" /> | <img width="200" src="https://avatars.githubusercontent.com/u/90389517?v=4" /> |
|                                                             Backend                                                             |                                               Backend                                                             |                              Backend<br/>Frontend                              |
|                                           [@parksboo](https://github.com/parksboo)                                              |                                        [@naku2](https://github.com/naku2)                                         |                     [@chy0503](https://github.com/chy0503)                     |

<br>

