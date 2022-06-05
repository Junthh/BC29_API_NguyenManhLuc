function Validation() {
    this.kiemTraTK = function (value, mess1, mess2, mness3, list) {
        if (value.length >= 1) {
            getEle('tbTK').innerHTML = "";
            return true;
        } else if (list.taiKhoan === value) {
            getEle('tbTK').innerHTML = mess1;
            getEle('tbTK').style.display = "block";
            return false;
        } else {
            getEle('tbTK').innerHTML = mess2;
            getEle('tbTK').style.display = "block";
            return false;
        }
    }

    this.kiemTraChuoiKiTu = function (value, mess1, mess2) {
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.match(letter)) {
            getEle('tbTen').innerHTML = "";
            return true;
        } else if (value === "") {
            getEle('tbTen').innerHTML = mess1;
            getEle('tbTen').style.display = "block";
            return false;
        } else {
            getEle('tbTen').innerHTML = mess2;
            getEle('tbTen').style.display = "block";
            return false;
        }
    }

    this.kiemTraPassword = function (value, mess1, mess2, mess3) {
        var letter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if (value.length >= 6 && value.length <= 8) {
            if (value.match(letter)) {
                getEle('tbMatKhau').innerHTML = "";
                return true;
            } else {
                getEle('tbMatKhau').innerHTML = mess3;
                getEle('tbMatKhau').style.display = "block";
                return false;
            }
        } else if (value === "") {
            getEle('tbMatKhau').innerHTML = mess1;
            getEle('tbMatKhau').style.display = "block";
            return false;
        } else {
            getEle('tbMatKhau').innerHTML = mess2;
            getEle('tbMatKhau').style.display = "block";
            return false;
        }
    }

    this.kiemTraEmail = function (value, mess1, mess2) {
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(letter)) {
            getEle('tbEmail').innerHTML = "";
            return true;
        } else if (value === "") {
            getEle('tbEmail').innerHTML = mess1;
            getEle('tbEmail').style.display = "block";
            return false;
        } else {
            getEle('tbEmail').innerHTML = mess2;
            getEle('tbEmail').style.display = "block";
            return false;
        }
    }

    this.kiemTraHinhAnh = function (value, mess1) {
        if (value === "") {
            getEle('tbHinhAnh').innerHTML = mess1;
            getEle('tbHinhAnh').style.display = "block";
            return false;
        } else {
            getEle('tbHinhAnh').innerHTML = "";
            return true;
        }
    }

    this.kiemTraLoaiND = function (value, mess) {
        if (value >= 1 && value <= 2) {
            getEle('tbloaiND').innerHTML = "";
            return true;
        }
        getEle('tbloaiND').innerHTML = mess;
        getEle('tbloaiND').style.display = "block";
        return false;
    }

    this.kiemTraNgonNgu = function (value, mess) {
        if (value >= 1 && value <= 7) {
            getEle('tbloaiNgonNgu').innerHTML = "";
            return true;
        }
        getEle('tbloaiNgonNgu').innerHTML = mess;
        getEle('tbloaiNgonNgu').style.display = "block";
        return false;
    }

    this.kiemTraMoTa = function (value, mess1, mess2) {
        if (value.length >= 1 && value.length <= 60) {
            getEle('tbMoTa').innerHTML = "";
            return true;
        } else if (value === "") {
            getEle('tbMoTa').innerHTML = mess1;
            getEle('tbMoTa').style.display = "block";
            return false;
        } else {
            getEle('tbMoTa').innerHTML = mess2;
            getEle('tbMoTa').style.display = "block";
            return false;
        }
    }
}

