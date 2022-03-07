import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import HangGhe from './HangGhe'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachGheData from '../../Data/danhSachGhe.json'

export default class BaiTapDatVeXemPhim extends Component {

    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return <div key={index} className='text-left'>

                {/* Thực hiện truyền props */}
                <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
            </div>
        })
    }

    render() {
        return (
            <div>
                <div className='bookingMovie' style={{
                    backgroundImage: "url('./img/bgmovie.jpg')", position: "fixed", width: "100%", height: "100%"
                    , backgroundSize: '100%'
                }}>
                    <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', width: "100%", height: '100%' }}>
                        <div className="container-fluid">
                            <div className='row'>
                                <div className="col-8 text-center">
                                    <h3 className='display-4 text-warning'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h3>
                                    <div className='mt-3 text-light' style={{ fontSize: '24px' }}>Màn hình</div>
                                    <div className='mt-2' style={{display: 'flex',
                                     flexDirection: 'column', justifyContent: 'center' }}>
                                        <div className="screen">
                                        </div>
                                        {this.renderHangGhe()}
                                    </div>
                                    
                                </div>
                                <div className="col-4">
                                    <div className="text-left text-white mt-2" style={{ fontSize: '28px' }}>DANH SÁCH GHẾ BẠN CHỌN</div>
                                    <ThongTinDatGhe />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
