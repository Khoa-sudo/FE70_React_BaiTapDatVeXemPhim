const stateDefault = {
    danhSachGheDangDat: [
        //{soGhe:1,gia:1000}

    ]
}

const BaiTapDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) {
                //Khi người dùng click vào ghế đã có trong mảng => Remove đi 
                danhSachGheDangDatUpdate.splice(index, 1);
            } else {
                //Khi người dùng click vào ghế chưa có trong mảng => push vào mảng
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            //Cập nhật lại mảng
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return { ...state }
        }
        case 'HUY_GHE':{
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.soGhe === action.soGhe)
            if(index !== -1){
                danhSachGheDangDatUpdate.splice(index,1);
            }
            state.danhSachGheDangDat=danhSachGheDangDatUpdate;
            return {...state}
        }
        default: return { ...state }
    }
}

export default BaiTapDatVeReducer;