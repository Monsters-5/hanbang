import React, {useEffect, useState} from 'react';
import '../App.css';
import logo from '../images/logo.png';
import arrow from '../images/arrow.png';

const Sidebar = () => {

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
    }, []);

    useEffect(() => {
        const initialExpandedState = {};
        tentData.forEach((tent) => {
            initialExpandedState[tent.id] = false;
        });
        setExpandedTents(initialExpandedState);
    }, [tentData]);


    return (
        <div style={{display: 'flex', backgroundColor: '#F2F4F8', height: '100vh'}}>
            {/* 사이드바 */}
            <div className="scrollbar-none" style={{
                background: 'white',
                width: '30vw',
                height: '100%',
                borderTopRightRadius: '30px',
                borderBottomRightRadius: '30px',
                boxShadow: '3px 0px 20px gray',
                overflow: 'auto'
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
                                        tent.status === '포화'
                                            ? '#E77871'
                                            : tent.status === '혼잡'
                                                ? '#ECDE62'
                                                : tent.status === '여유'
                                                    ? '#98DC87'
                                                    : '#E9E9E9',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>{tent.status}</div>
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
                                <div style={{display: 'flex', marginBottom: '7px'}}>
                                    <div style={{width: '20%', fontWeight: 'bold'}}>상태</div>
                                    <div style={{width: '80%'}}>이용중: 100 / 권장 텐트 개수: 125</div>
                                </div>
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
        </div>
    );
};

export default Sidebar;