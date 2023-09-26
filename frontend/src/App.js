import './App.css';
import React, {useEffect, useState} from 'react';
import logo from './images/logo.png';
import arrow from './images/arrow.png';

const {kakao} = window;

function App() {
    const [tentData, setTentData] = useState([]);
    const [expandedTents, setExpandedTents] = useState({});

    const getTents = async () => {
        try {
            const tents = await fetch('http://localhost:8080/api/tents', {
                method: 'GET'
            });

            if (tents.ok) {
                const tentData = await tents.json();
                setTentData(tentData);
            } else {
                console.log('그늘막 구역 목록 불러오기 실패');
            }
        } catch (error) {
            console.error('그늘막 구역 목록 불러오기 에러 - ', error);
        }
    }

    useEffect(() => {
        getTents();

        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.52221694757347, 127.0129412878935),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);

        function createPolygon(path) {
            return new kakao.maps.Polygon({
                path: path,              // 그려질 다각형의 좌표 배열입니다
                strokeWeight: 0,         // 선의 두께입니다
                fillColor: '#011AFF',    // 채우기 색깔입니다
                fillOpacity: 0.4         // 채우기 불투명도 입니다
            });
        }

        // 배열에 다각형의 좌표 배열들을 저장합니다
        let polygonPaths = [
            [ // 망원 (상류)
                new kakao.maps.LatLng(37.5537017889497, 126.89792568378567),
                new kakao.maps.LatLng(37.55321252503122, 126.89738030615888),
                new kakao.maps.LatLng(37.552895323641316, 126.89784190660978),
                new kakao.maps.LatLng(37.55290443635681, 126.89796072211138),
                new kakao.maps.LatLng(37.55329676263628, 126.89841569670563),
                new kakao.maps.LatLng(37.55340932633026, 126.89834481252487)
            ],
            [ // 망원 (하류)
                new kakao.maps.LatLng(37.55639484892438, 126.89431739489962),
                new kakao.maps.LatLng(37.55583566243294, 126.89368441078184),
                new kakao.maps.LatLng(37.55486381925075, 126.89506366571858),
                new kakao.maps.LatLng(37.555253919088265, 126.89553561606348)
            ],
            [ // 강서
                new kakao.maps.LatLng(37.58413967365272, 126.82349228007874),
                new kakao.maps.LatLng(37.58413709509015, 126.82327434413862),
                new kakao.maps.LatLng(37.58406924109245, 126.82308769726144),
                new kakao.maps.LatLng(37.583978972461296, 126.82297469448142),
                new kakao.maps.LatLng(37.58379414659538, 126.82289305045768),
                new kakao.maps.LatLng(37.58363200679151, 126.8229189081456),
                new kakao.maps.LatLng(37.58347902541475, 126.82304380771542),
                new kakao.maps.LatLng(37.58298960643182, 126.82412899883506),
                new kakao.maps.LatLng(37.58298320299713, 126.82436676517193),
                new kakao.maps.LatLng(37.583046516378644, 126.82453077816407),
                new kakao.maps.LatLng(37.58315482434139, 126.82465789100185),
                new kakao.maps.LatLng(37.583326125773844, 126.82473390963392),
                new kakao.maps.LatLng(37.58347251549608, 126.82471941448365),
                new kakao.maps.LatLng(37.58362103996933, 126.82462566316892)
            ],
            [ // 광나루
                new kakao.maps.LatLng(37.546348928799254, 127.11963230922937),
                new kakao.maps.LatLng(37.546683552252354, 127.11838808349412),
                new kakao.maps.LatLng(37.54376593218836, 127.11676534407835),
                new kakao.maps.LatLng(37.54361213431614, 127.11739877447555),
                new kakao.maps.LatLng(37.5441616189865, 127.11752410798506),
                new kakao.maps.LatLng(37.54447632439614, 127.11816959525696),
                new kakao.maps.LatLng(37.54500740215944, 127.11867964234192),
                new kakao.maps.LatLng(37.54558351609711, 127.11920108421243)
            ],
            [ // 난지
                new kakao.maps.LatLng(37.56217063870638, 126.88510176128605),
                new kakao.maps.LatLng(37.56246819805568, 126.88533899054582),
                new kakao.maps.LatLng(37.562522504788575, 126.88559357132132),
                new kakao.maps.LatLng(37.563988854774216, 126.88327101145313),
                new kakao.maps.LatLng(37.563384126109156, 126.88220235388306),
                new kakao.maps.LatLng(37.56286218557391, 126.88284266818674),
                new kakao.maps.LatLng(37.56247115907787, 126.88376007027827),
                new kakao.maps.LatLng(37.562413100323404, 126.88427514693099),
                new kakao.maps.LatLng(37.562300880188374, 126.88468844089002)
            ],
            [ // 뚝섬
                new kakao.maps.LatLng(37.52936417792776, 127.07034667866994),
                new kakao.maps.LatLng(37.52865253511871, 127.07009711810431),
                new kakao.maps.LatLng(37.52850141382045, 127.07043920284622),
                new kakao.maps.LatLng(37.52845189248472, 127.07038259001015),
                new kakao.maps.LatLng(37.528264826743076, 127.0705634258583),
                new kakao.maps.LatLng(37.52836599967904, 127.07088029190719),
                new kakao.maps.LatLng(37.52812942403515, 127.0709847152038),
                new kakao.maps.LatLng(37.527939590534984, 127.0720140343746),
                new kakao.maps.LatLng(37.52881102358655, 127.07248154609108)
            ],
            [ // 반포 (상류)
                new kakao.maps.LatLng(37.512588178332926, 126.99906402623502),
                new kakao.maps.LatLng(37.51280667385759, 126.99936658992587),
                new kakao.maps.LatLng(37.51287875565004, 126.99976247099377),
                new kakao.maps.LatLng(37.5128562306284, 127.00019228532823),
                new kakao.maps.LatLng(37.51293281254083, 127.00092183942719),
                new kakao.maps.LatLng(37.51234490237245, 127.00141950847426),
                new kakao.maps.LatLng(37.512173715283666, 127.00106604277399),
                new kakao.maps.LatLng(37.51204082100849, 127.00047505270157),
                new kakao.maps.LatLng(37.5118020557389, 126.99985861571778),
                new kakao.maps.LatLng(37.51218498253758, 126.99983882109483),
                new kakao.maps.LatLng(37.512347158317134, 126.99890284999087)
            ],
            [ // 반포 (하류)
                new kakao.maps.LatLng(37.50899974672586, 126.99338911812039),
                new kakao.maps.LatLng(37.509594437507495, 126.99390368930335),
                new kakao.maps.LatLng(37.50996838436979, 126.99451442404788),
                new kakao.maps.LatLng(37.509873799030146, 126.99496684903376),
                new kakao.maps.LatLng(37.509522409139834, 126.99501211422202),
                new kakao.maps.LatLng(37.50924309040092, 126.99484247746133),
                new kakao.maps.LatLng(37.508999801177055, 126.99444663300976),
                new kakao.maps.LatLng(37.50894572104783, 126.99403946579979),
                new kakao.maps.LatLng(37.50897273658385, 126.99375670576066)
            ],
            [ // 양화
                new kakao.maps.LatLng(37.54184203845737, 126.89751187408594),
                new kakao.maps.LatLng(37.542040115563076, 126.89734753103697),
                new kakao.maps.LatLng(37.542040115563076, 126.89734753103697),
                new kakao.maps.LatLng(37.54169745051337, 126.89701985851973),
                new kakao.maps.LatLng(37.541328376072244, 126.89740508282883),
                new kakao.maps.LatLng(37.541103567757155, 126.89791457319286),
                new kakao.maps.LatLng(37.54093253442653, 126.89809584857396),
                new kakao.maps.LatLng(37.540572709245, 126.89876392816373),
                new kakao.maps.LatLng(37.54094240914749, 126.89910288246101),
                new kakao.maps.LatLng(37.54101424698733, 126.8988199069214),
                new kakao.maps.LatLng(37.54131988070406, 126.89799914223131)
            ],
            [ // 여의도 (상류)
                new kakao.maps.LatLng(37.525723639623386, 126.93674989195556),
                new kakao.maps.LatLng(37.52514643658781, 126.93570960579792),
                new kakao.maps.LatLng(37.525731516530946, 126.93466832211256),
                new kakao.maps.LatLng(37.5260376373758, 126.93427210401768),
                new kakao.maps.LatLng(37.526433926628705, 126.93400024553873),
                new kakao.maps.LatLng(37.52716328618143, 126.93319637573146),
                new kakao.maps.LatLng(37.52778554232543, 126.93420269148288),
                new kakao.maps.LatLng(37.52661518600854, 126.93592329191019)
            ],
            [ // 여의도 (하류)
                new kakao.maps.LatLng(37.53126917003777, 126.92861067370814),
                new kakao.maps.LatLng(37.53065587662001, 126.92760434902401),
                new kakao.maps.LatLng(37.531528723694834, 126.92579331042568),
                new kakao.maps.LatLng(37.53181681581967, 126.92543098461974),
                new kakao.maps.LatLng(37.53238864651447, 126.92494957675534),
                new kakao.maps.LatLng(37.53252847023857, 126.92521531257603),
                new kakao.maps.LatLng(37.53205154507024, 126.92617746154961),
                new kakao.maps.LatLng(37.53225441492708, 126.92640919506867)
            ],
            [ // 이촌
                new kakao.maps.LatLng(37.51579165894115, 126.97912491351572),
                new kakao.maps.LatLng(37.515300608931035, 126.97910808338837),
                new kakao.maps.LatLng(37.51525118051717, 126.97983767362528),
                new kakao.maps.LatLng(37.515219774177666, 126.9806068476313),
                new kakao.maps.LatLng(37.51522440030258, 126.98135904515107),
                new kakao.maps.LatLng(37.515274078668526, 126.98215647707653),
                new kakao.maps.LatLng(37.51560295611098, 126.9822299223279),
                new kakao.maps.LatLng(37.515733510810655, 126.98163604624449),
                new kakao.maps.LatLng(37.51576500965974, 126.98140415604574)
            ],
            [ // 잠실
                new kakao.maps.LatLng(37.519883122679765, 127.09345942151262),
                new kakao.maps.LatLng(37.519558551348354, 127.09372484656151),
                new kakao.maps.LatLng(37.51935614612037, 127.09332019373062),
                new kakao.maps.LatLng(37.51871781353671, 127.0915575886518),
                new kakao.maps.LatLng(37.51913466059492, 127.0913855923268),
                new kakao.maps.LatLng(37.51917520568706, 127.0913856417735),
                new kakao.maps.LatLng(37.51920897794558, 127.09140547870983),
                new kakao.maps.LatLng(37.51922921108687, 127.09145640675968),
                new kakao.maps.LatLng(37.51923805888021, 127.09166568698927),
                new kakao.maps.LatLng(37.519258215008236, 127.09181559384615),
                new kakao.maps.LatLng(37.519705489651635, 127.09306045437235)
            ],
            [ // 잠원
                new kakao.maps.LatLng(37.52262244269755, 127.01253411240437),
                new kakao.maps.LatLng(37.52210442768674, 127.01194013012491),
                new kakao.maps.LatLng(37.52154797942505, 127.01269795975892),
                new kakao.maps.LatLng(37.52189932131019, 127.01314768189819),
                new kakao.maps.LatLng(37.52189932131019, 127.01314768189819),
                new kakao.maps.LatLng(37.522011932417946, 127.01327496484893),
                new kakao.maps.LatLng(37.52210202472301, 127.01334568266839)
            ],
        ];

        // 배열에 저장된 다각형의 좌표 배열을 이용하여 다각형을 생성하고 지도에 표시합니다
        for (let i = 0; i < polygonPaths.length; i++) {
            let polygon = createPolygon(polygonPaths[i]);
            polygon.setMap(map);
        }

    }, []);

    useEffect(() => {
        const initialExpandedState = {};
        tentData.forEach((tent) => {
            initialExpandedState[tent.id] = false;
        });
        setExpandedTents(initialExpandedState);
    }, [tentData]);


    return (
        <div style={{display: 'flex', height: '100vh'}}>
            {/* 사이드바 */}
            <div className="scrollbar-none" style={{
                background: 'white',
                width: '30vw',
                height: '100%',
                borderTopRightRadius: '30px',
                borderBottomRightRadius: '30px',
                boxShadow: '3px 0px 20px gray',
                overflow: 'auto',
                zIndex: '99'
            }}>
                {/* 로고 */}
                <div style={{
                    width: '100%',
                    marginTop: '30px',
                    paddingBottom: '30px',
                    borderBottom: '2px solid #E9E9E9',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <img src={logo}/>
                </div>

                {/* 그늘막 */}
                {tentData.map((tent) => (
                    <div key={tent.id}
                         style={{padding: '25px', borderBottom: '2px solid #E9E9E9', cursor: 'pointer'}}
                         onClick={() => {
                             setExpandedTents((prevState) => ({
                                 ...prevState,
                                 [tent.id]: !prevState[tent.id]
                             }));
                         }}
                    >
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '12px'
                        }}>
                            <div style={{display: 'flex', marginBottom: '12px'}}>
                                <div style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    marginRight: '10px'
                                }}>{tent.name}</div>
                                <div style={{
                                    fontWeight: 'bold',
                                    padding: '2px 10px',
                                    borderRadius: '20px',
                                    background:
                                        tent.status === '미운영'
                                            ? '#E9E9E9'
                                            : (tent.currentTents / tent.recommendedTents) >= 0.8
                                                ? '#E77871' // 포화
                                                : (tent.currentTents / tent.recommendedTents) >= 0.5
                                                    ? '#ECDE62' // 혼잡
                                                    : '#98DC87', // 여유
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>{tent.status === '미운영'
                                    ? tent.status
                                    : (tent.currentTents / tent.recommendedTents) >= 0.8
                                        ? '포화'
                                        : (tent.currentTents / tent.recommendedTents) >= 0.5
                                            ? '혼잡'
                                            : '여유'}</div>
                            </div>
                            <div>
                                <img src={arrow}
                                     style={{
                                         transform: expandedTents[tent.id] ? 'rotate(180deg)' : 'rotate(0deg)', // 이미지 회전
                                         transition: 'transform 0.3s ease'
                                     }}/>
                            </div>
                        </div>
                        <div style={{display: 'flex', marginBottom: '7px'}}>
                            <div style={{width: '20%', fontWeight: 'bold'}}>구분</div>
                            <div style={{width: '80%'}}>{tent.division}</div>
                        </div>
                        <div style={{display: 'flex', marginBottom: '7px'}}>
                            <div style={{width: '20%', fontWeight: 'bold'}}>주소</div>
                            <div style={{width: '80%'}}>{tent.address}</div>
                        </div>
                        <div style={{display: 'flex', marginBottom: '7px'}}>
                            <div style={{width: '20%', fontWeight: 'bold'}}>위치</div>
                            <div style={{width: '80%'}}>{tent.location}</div>
                        </div>

                        {/* 상세 설명 확장 */}
                        {expandedTents[tent.id] && (
                            <div>
                                {tent.status === '운영' && (
                                    <div style={{display: 'flex', marginBottom: '7px'}}>
                                        <div style={{width: '20%', fontWeight: 'bold'}}>상태</div>
                                        <div style={{width: '80%'}}>{tent.currentTents} / {tent.recommendedTents} (이용 텐트
                                            /
                                            권장 텐트)
                                        </div>
                                    </div>
                                )}
                                <div style={{display: 'flex', marginBottom: '7px'}}>
                                    <div style={{width: '20%', fontWeight: 'bold'}}>공원</div>
                                    <div style={{width: '80%'}}>{tent.park}</div>
                                </div>
                                <div style={{display: 'flex', marginBottom: '7px'}}>
                                    <div style={{width: '20%', fontWeight: 'bold'}}>연면적</div>
                                    <div style={{width: '80%', display: 'flex'}}>
                                        <div>{tent.gfa}m</div>
                                        <div><sup>2</sup></div>
                                    </div>
                                </div>
                                <div style={{display: 'flex', marginBottom: '7px'}}>
                                    <div style={{width: '20%', fontWeight: 'bold'}}>이용기간</div>
                                    <div style={{width: '80%'}}>{tent.periodOfUse}</div>
                                </div>
                                <div style={{display: 'flex', marginBottom: '7px'}}>
                                    <div style={{width: '20%', fontWeight: 'bold'}}>운영시간</div>
                                    <div style={{width: '80%'}}>
                                        {tent.operationTime.split('\n').map((line, index) => (
                                            <React.Fragment key={index}>
                                                {line}
                                                <br/>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                                <div style={{display: 'flex', marginBottom: '7px'}}>
                                    <div style={{width: '20%', fontWeight: 'bold'}}>이용방법</div>
                                    <div style={{width: '80%'}}>{tent.howToUse}</div>
                                </div>
                                <div style={{display: 'flex', marginBottom: '7px'}}>
                                    <div style={{width: '20%', fontWeight: 'bold'}}>이용료</div>
                                    <div style={{width: '80%'}}>{tent.fee}</div>
                                </div>
                                <div style={{display: 'flex', marginBottom: '7px'}}>
                                    <div style={{width: '20%', fontWeight: 'bold'}}>시설안내</div>
                                    <div style={{width: '80%'}}>
                                        {tent.info.split('\n').map((line, index) => (
                                            <React.Fragment key={index}>
                                                {line}
                                                <br/>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                                <div style={{display: 'flex', marginBottom: '7px'}}>
                                    <div style={{width: '20%', fontWeight: 'bold'}}>연락처</div>
                                    <div style={{width: '80%'}}>
                                        {tent.contact.split('\n').map((line, index) => (
                                            <React.Fragment key={index}>
                                                {line}
                                                <br/>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* 지도 */}
            <div id="map" style={{width: '75vw', height: '100%', position: "absolute", left: "25vw"}}>
            </div>
        </div>
    );
};

export default App;
