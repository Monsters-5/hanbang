import React, {useEffect, useState} from 'react';
import '../App.css';
import logo from '../images/logo.png';

const Sidebar = () => {

    const [tentData, setTentData] = useState([]);

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

    return (
        <div style={{display: 'flex', backgroundColor: '#F2F4F8', height: '100vh'}}>
            {/* 사이드바 */}
            <div className="scrollbar-none" style={{
                background: 'white',
                width: '25vw',
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
                    <div style={{padding: '25px', borderBottom: '2px solid #E9E9E9'}}>
                        <div style={{display: 'flex', marginBottom: '12px'}}>
                            <div style={{fontSize: '18px', fontWeight: 'bold', marginRight: '10px'}}>{tent.name}</div>
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
                        <div style={{display: 'flex', marginBottom: '7px'}}>
                            <div style={{width: '50px', fontWeight: 'bold'}}>구분</div>
                            <div>{tent.division}</div>
                        </div>
                        <div style={{display: 'flex', marginBottom: '7px'}}>
                            <div style={{width: '50px', fontWeight: 'bold'}}>주소</div>
                            <div>{tent.address}</div>
                        </div>
                        <div style={{display: 'flex', marginBottom: '7px'}}>
                            <div style={{width: '50px', fontWeight: 'bold'}}>위치</div>
                            <div>{tent.location}</div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Sidebar;