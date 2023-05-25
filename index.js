// BÀI ! :QUẢN LÝ TUYỂN SINH 
function diemkhuvuc(khuvuc) {
    // switch (khuvuc) {
    //     case 'A': { khuvuc = 2; break }
    //     case 'B': { khuvuc = 1; break }
    //     case 'C': { khuvuc = 0.5; break }
    //     default: { khuvuc = 0; break }
    // }
    if (khuvuc === "A") return 2;
    if (khuvuc === "B") return 1;
    if (khuvuc === "C") return 0.5;
    return 0;
}
// console.log(khuvuc)
function diemdoituong(doituong) {
    // switch (doituong) {
    //     case '1': { doituong = 2.5; break }
    //     case '2': { doituong = 1.5; break }
    //     case '3': { doituong = 1; break }
    //     default: { khuvuc = 0; break }
    // }
    if (doituong === "1") return 2.5;
    if (doituong === "2") return 1.5;
    if (doituong === "3") return 1;
    return 0;
}
var ketquathi = "";
var diemtongcong = 0;
function tuyensinh() {
    var diemchuan = +document.getElementById("diemchuan").value;
    var khuvuc = document.getElementById("khuvuc").value;
    var doituong = document.getElementById("doituong").value;
    var dm1 = +document.getElementById("dm1").value;
    var dm2 = +document.getElementById("dm2").value;
    var dm3 = +document.getElementById("dm3").value;
    var dkv = diemkhuvuc(khuvuc);
    var ddt = diemdoituong(doituong);
    diemtongcong = dm1 + dm2 + dm3 + dkv + ddt;
    if (dm1 === 0 || dm2 === 0 || dm3 === 0) {
        ketquathi = "Bạn đã rớt vì có 1 môn bị điểm 0 ";
    }
    else if (diemtongcong >= diemchuan) {
        ketquathi = "Bạn đã đậu. ";
    } else
        ketquathi = "Bạn đã rớt. ";
    document.getElementById("xuatraketqua").innerHTML = ketquathi;
    document.getElementById("xuatradiem").innerHTML = 'Tổng điểm :' + diemtongcong;
}
document.getElementById("ketqua").onclick = tuyensinh;

//BÀI 2 : TÍNH TIỀN ĐIỆN
var tiendien = 0;
function tinhtiendien(kw) {
    if (kw === 0) {
        tiendien = 0;

    } else if (kw <= 50) {
        tiendien = kw * 500;
    } else
        if (kw <= 100) {
            tiendien = 50 * 500 + (kw - 50) * 650;
        } else
            if (kw <= 200) {
                tiendien = 50 * 500 + 50 * 650 + (kw - 100) * 850;
            } else
                if (kw <= 350) {
                    tiendien = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
                } else tiendien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350);
    document.getElementById("xuatrahoten").innerHTML = document.getElementById("hoten").value;
    document.getElementById("ketquatiendien").innerHTML = (tiendien).toLocaleString();
}
document.getElementById("tinhtiendien").onclick = function () {
    var kw = +document.getElementById("sokw").value;
    var hoten = document.getElementById("hoten").value;
    tinhtiendien(kw);
}
// BÀI 3 : TÍNH THUẾ THU NHẬP CÁ NHÂN
function tinhthuethunhap(tong_thu_nhap_nam, so_nguoi_phu_thuoc) {
    var thu_nhap_chiu_thue = 0;
    var thue_thu_nhap = 0;

    thu_nhap_chiu_thue = +(tong_thu_nhap_nam - 4000000 - (so_nguoi_phu_thuoc * 1600000));
    if (thu_nhap_chiu_thue <= 60000000) {
        thue_thu_nhap = thu_nhap_chiu_thue * 0.05;
    } else if (thu_nhap_chiu_thue <= 120000000) {
        thue_thu_nhap = thu_nhap_chiu_thue * 0.1;
    } else if (thu_nhap_chiu_thue <= 210000000) {
        thue_thu_nhap = thu_nhap_chiu_thue * 0.15;
    } else if (thu_nhap_chiu_thue <= 384000000) {
        thue_thu_nhap = thu_nhap_chiu_thue * 0.2;
    } else if (thu_nhap_chiu_thue <= 624000000) {
        thue_thu_nhap = thu_nhap_chiu_thue * 0.25;
    } else if (thu_nhap_chiu_thue <= 960000000) {
        thue_thu_nhap = thu_nhap_chiu_thue * 0.3;
    } else thue_thu_nhap = thu_nhap_chiu_thue * 0.35;

    document.getElementById("ho&ten").innerHTML = document.getElementById("ho_ten").value;
    document.getElementById("xuatthuethunhap").innerHTML = (thue_thu_nhap).toLocaleString();
}
document.getElementById("tinhtienthue").onclick = function () {
    var tong_thu_nhap_nam = document.getElementById("tong_thu_nhap_nam").value;
    var so_nguoi_phu_thuoc = document.getElementById("so_nguoi_phu_thuoc").value;
    tinhthuethunhap(tong_thu_nhap_nam, so_nguoi_phu_thuoc);
}
// TÍNH TIỀN CÁP
var loai_khach_hang = "";
function myFuntion() {
    loai_khach_hang = document.getElementById("loai_khach_hang").value;
    console.log(loai_khach_hang);
    if (loai_khach_hang === "doanh_nghiep") {
        document.getElementById("kenh_ket_noi").style.display = "block";
    } else document.getElementById("kenh_ket_noi").style.display = "none";
}
// console.log('loai_khach_hang',loai_khach_hang);
var phi_xư_ly_hoa_don;
var phi_dich_vu_co_ban;
var thue_kenh_cao_cap;
document.getElementById("tinh_tien_cap").onclick = function () {
    var tiencap;
    var ma_kh = document.getElementById("ma_kh").value;
    var kenh_cao_cap = document.getElementById("kenh_cao_cap").value;
    // console.log('kenh_cao_cap',kenh_cao_cap);
    if (loai_khach_hang === "nha_dan") {
        phi_xư_ly_hoa_don = 4.5;
        phi_dich_vu_co_ban = 20.5;
        thue_kenh_cao_cap = 7.5;
        tiencap = phi_xư_ly_hoa_don + phi_dich_vu_co_ban + thue_kenh_cao_cap * kenh_cao_cap;
    } else if (loai_khach_hang === "doanh_nghiep") {
        phi_xư_ly_hoa_don = 15;
        var kkn = +document.getElementById("kenh_ket_noi").value;
        // console.log('kkn',kkn);
        if (kkn <= 10) {
            phi_dich_vu_co_ban = 75;
        } else phi_dich_vu_co_ban = 75 + (kkn - 10) * 5;
        // console.log('phi_dich_vu_co_ban',phi_dich_vu_co_ban);
        thue_kenh_cao_cap = 50;
        tiencap = phi_xư_ly_hoa_don + phi_dich_vu_co_ban + thue_kenh_cao_cap * kenh_cao_cap;
    }
    // console.log('tien cap', tiencap);
    document.getElementById("ma_khach_hang").innerHTML = ma_kh;
    document.getElementById("xuattiencap").innerHTML = tiencap;
}