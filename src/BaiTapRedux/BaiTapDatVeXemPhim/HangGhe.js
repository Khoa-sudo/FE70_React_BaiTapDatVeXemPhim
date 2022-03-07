import React, { Component } from 'react'

import { connect } from 'react-redux'
import { datGheAction } from '../../redux/actions/BaiTapVeActions';

class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map(((ghe, index) => {
            let cssGheDaDat = '';
            let disabled = false;

            //Ghế đã được đặt
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disabled = true;
            }

            // //Xét trạng thái ghế đang đặt
            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe)
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon'
            }

            return <button onClick={() => {
                this.props.datGhe(ghe);
            }} key={index} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} >
                {ghe.soGhe}
            </button>
        }))
    }
    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button key={index} className='rowNumber'>
                {hang.soGhe}
            </button>
        })
    }
    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div>{this.props.hangGhe.hang}
                {this.renderSoHang()}
            </div>
        }
        else {
            return <div>
                {this.props.hangGhe.hang}{this.renderGhe()}
            </div>
        }
    }
    render() {
        return (
            <div className='text-light ml-2 mt-2' style={{ fontSize: '28px' }}>
                {this.renderHangGhe()}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        datGhe: (ghe) =>{
            dispatch(datGheAction(ghe))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HangGhe)