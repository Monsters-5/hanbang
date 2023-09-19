import React from 'react';
import '../App.css';

const Sidebar = () => {
    return (
        <div style={{display: 'flex', backgroundColor: '#F2F4F8', height: '100vh'}}>
            {/* 사이드바 */}
            <div className="scrollbar-none"  style={{background: 'white', width: '25vw', height: '100%', borderTopRightRadius: '30px', borderBottomRightRadius: '30px', boxShadow: '3px 0px 20px gray', overflow: 'auto'}}>
                {/* 로고 */}
                <div style={{width: '100%', marginTop: '30px', paddingBottom: '30px', borderBottom: '2px solid #E9E9E9', display: 'flex', justifyContent: 'center'}}>
                    <div>logo 들어갈 자리</div>
                </div>

                {/* 그늘막 */}
                <div style={{padding: '25px', borderBottom: '2px solid #E9E9E9'}}>
                    <div style={{display: 'flex', marginBottom: '12px'}}>
                        <div style={{fontSize: '18px', fontWeight: 'bold', marginRight: '10px'}}>망원 그늘막 설치구역</div>
                        <div style={{fontWeight: 'bold', padding: '2px 10px', borderRadius: '20px', background: '#FFE486', display : 'flex', alignItems: 'center', justifyContent: 'center'}}>혼잡</div>
                    </div>
                    <div style={{display: 'flex', marginBottom: '7px'}}>
                        <div style={{width: '50px', fontWeight: 'bold'}}>구분</div>
                        <div>직영시설</div>
                    </div>
                    <div style={{display: 'flex', marginBottom: '7px'}}>
                        <div style={{width: '50px', fontWeight: 'bold'}}>주소</div>
                        <div>마포구 망원동 205-5</div>
                    </div>
                    <div style={{display: 'flex', marginBottom: '7px'}}>
                        <div style={{width: '50px', fontWeight: 'bold'}}>위치</div>
                        <div>서울함공원(야구장) 옆 녹지</div>
                    </div>
                </div>
                <div style={{padding: '25px', borderBottom: '2px solid #E9E9E9'}}>
                    <div style={{display: 'flex', marginBottom: '12px'}}>
                        <div style={{fontSize: '18px', fontWeight: 'bold', marginRight: '10px'}}>망원 그늘막 설치구역</div>
                        <div style={{fontWeight: 'bold', padding: '2px 10px', borderRadius: '20px', background: '#FF8686', display : 'flex', alignItems: 'center', justifyContent: 'center'}}>포화</div>
                    </div>
                    <div style={{display: 'flex', marginBottom: '7px'}}>
                        <div style={{width: '50px', fontWeight: 'bold'}}>구분</div>
                        <div>직영시설</div>
                    </div>
                    <div style={{display: 'flex', marginBottom: '7px'}}>
                        <div style={{width: '50px', fontWeight: 'bold'}}>주소</div>
                        <div>마포구 망원동 205-5</div>
                    </div>
                    <div style={{display: 'flex', marginBottom: '7px'}}>
                        <div style={{width: '50px', fontWeight: 'bold'}}>위치</div>
                        <div>서울함공원(야구장) 옆 녹지</div>
                    </div>
                </div>
                <div style={{padding: '25px', borderBottom: '2px solid #E9E9E9'}}>
                    <div style={{display: 'flex', marginBottom: '12px'}}>
                        <div style={{fontSize: '18px', fontWeight: 'bold', marginRight: '10px'}}>망원 그늘막 설치구역</div>
                        <div style={{fontWeight: 'bold', padding: '2px 10px', borderRadius: '20px', background: '#D2D2D2', display : 'flex', alignItems: 'center', justifyContent: 'center'}}>미운영</div>
                    </div>
                    <div style={{display: 'flex', marginBottom: '7px'}}>
                        <div style={{width: '50px', fontWeight: 'bold'}}>구분</div>
                        <div>직영시설</div>
                    </div>
                    <div style={{display: 'flex', marginBottom: '7px'}}>
                        <div style={{width: '50px', fontWeight: 'bold'}}>주소</div>
                        <div>마포구 망원동 205-5</div>
                    </div>
                    <div style={{display: 'flex', marginBottom: '7px'}}>
                        <div style={{width: '50px', fontWeight: 'bold'}}>위치</div>
                        <div>서울함공원(야구장) 옆 녹지</div>
                    </div>
                </div>
                <div style={{padding: '25px', borderBottom: '2px solid #E9E9E9'}}>
                    <div style={{display: 'flex', marginBottom: '12px'}}>
                        <div style={{fontSize: '18px', fontWeight: 'bold', marginRight: '10px'}}>망원 그늘막 설치구역</div>
                        <div style={{fontWeight: 'bold', padding: '2px 10px', borderRadius: '20px', background: '#98DC87', display : 'flex', alignItems: 'center', justifyContent: 'center'}}>여유</div>
                    </div>
                    <div style={{display: 'flex', marginBottom: '7px'}}>
                        <div style={{width: '50px', fontWeight: 'bold'}}>구분</div>
                        <div>직영시설</div>
                    </div>
                    <div style={{display: 'flex', marginBottom: '7px'}}>
                        <div style={{width: '50px', fontWeight: 'bold'}}>주소</div>
                        <div>마포구 망원동 205-5</div>
                    </div>
                    <div style={{display: 'flex', marginBottom: '7px'}}>
                        <div style={{width: '50px', fontWeight: 'bold'}}>위치</div>
                        <div>서울함공원(야구장) 옆 녹지</div>
                    </div>
                </div>
                <div style={{padding: '25px', borderBottom: '2px solid #E9E9E9'}}>
                    <div style={{display: 'flex', marginBottom: '12px'}}>
                        <div style={{fontSize: '18px', fontWeight: 'bold', marginRight: '10px'}}>망원 그늘막 설치구역</div>
                        <div style={{fontWeight: 'bold', padding: '2px 10px', borderRadius: '20px', background: '#98DC87', display : 'flex', alignItems: 'center', justifyContent: 'center'}}>여유</div>
                    </div>
                    <div style={{display: 'flex', marginBottom: '7px'}}>
                        <div style={{width: '50px', fontWeight: 'bold'}}>구분</div>
                        <div>직영시설</div>
                    </div>
                    <div style={{display: 'flex', marginBottom: '7px'}}>
                        <div style={{width: '50px', fontWeight: 'bold'}}>주소</div>
                        <div>마포구 망원동 205-5</div>
                    </div>
                    <div style={{display: 'flex', marginBottom: '7px'}}>
                        <div style={{width: '50px', fontWeight: 'bold'}}>위치</div>
                        <div>서울함공원(야구장) 옆 녹지</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;