import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../../redux/actions/BaiTapVeActions'



class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className='mt-5 text-left'>
                    <button className='mr-3 gheDuocChon'></button>
                    <span className='text-light' style={{ fontSize: '26px' }}>
                        Ghế đã đặt
                    </span>
                    <br />
                    <button className='mr-3 gheDangChon'></button>
                    <span className='text-light' style={{ fontSize: '26px' }}>
                        Ghế đang đặt
                    </span>
                    <br />
                    <button style={{ marginLeft: '0px' }} className='mr-3 ghe'></button>
                    <span className='text-light' style={{ fontSize: '26px' }}>
                        Ghế chưa đặt
                    </span>
                </div>

                <div className='mt-5'>
                    <table className="table" border='2' style={{borderColor:'white'}}>
                        <thead>
                            <tr className='text-light' style={{ fontSize: '28px' }}>

                                <th>Số ghế</th>
                                <th>Giá</th>
                            </tr>
                        </thead>
                        <tbody style={{ color: 'yellowgreen' }}>
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index}>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()}</td>
                                    <td><button onClick={() => {
                                        //Cách 2 này thay thế mapDispatchToProps
                                        this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                                    }}>Huỷ</button> </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td className='text-white'>Tổng tiền</td>
                                <td className='text-warning'>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index)=>{
                                    return tongTien += gheDangDat.gia;
                                },0)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(ThongTinDatGhe)