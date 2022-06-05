var services = new Services();
var validation = new Validation();

function getEle(id){
    return document.getElementById(id);
}

function getListPeoples(){
    services
        .getListPeopleApi()
        .then(function(result){
            renderListPeoples(result.data);
        })
        .catch(function(error){
            console.log(error);
        });
}

getListPeoples();

function renderListPeoples(data){
    var content = "";
    data.forEach(function(people, index){
        content += `
            <tr>
                <td>${index + 1}</td>
                <td>${people.taiKhoan}</td>
                <td>${people.matKhau}</td>
                <td>${people.hoTen}</td>
                <td>${people.email}</td>
                <td>${people.ngonNgu}</td>
                <td>${people.loaiND}</td>
                <td>${people.moTa}</td>
                <td>
                <img class="img-fluid" src="./../../assets/img/${people.hinhAnh}" width="100"/>
                </td>
                <td>
                    <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editPeople(${people.id})">Sửa</button>
                    <button class="btn btn-danger" onclick="deletePeople(${people.id})">Xóa</button>
                </td>
            </tr>
        `
    });

    getEle("tblDanhSachNguoiDung").innerHTML = content;
}

/**
 * Delete people
 */

function deletePeople(id){
    services
        .deletePeopleApi(id)
        .then(function(result){
            alert("Delete success")
            getListPeoples();
        })
        .catch(function(error){
            console.log(error)
        });
}

/**
 * Add people
 */

getEle("btnThemNguoiDung").onclick = function(){
    // Sửa modal heading
    document.getElementsByClassName("modal-title")[0].innerHTML = "Add people";

    // Thêm nút "add" vào footer modal
    var btFooter = `<button class="btn btn-success" onclick="addPeople()">Add</button>`
    document.getElementsByClassName("modal-footer")[0].innerHTML = btFooter;
}

function addPeople(){
    var taiKhoan = getEle("TaiKhoan").value;
    var hoTen = getEle("HoTen").value;
    var matKhau = getEle("MatKhau").value; 
    var email = getEle("Email").value;
    var loaiNgonNgu = getEle("loaiNgonNgu").value;
    var loaiNguoiDung = getEle("loaiNguoiDung").value;
    var moTa = getEle("MoTa").value;
    var hinhAnh = getEle("HinhAnh").value;

    var isValid = true;

    isValid &= validation.kiemTraTK(taiKhoan, '(*) Vui lòng nhập tài khoản', "(*) Tài khoản chỉ từ 4-6 ký số");

    isValid &= validation.kiemTraChuoiKiTu(hoTen, '(*) Không được để trống', '(*) Tên nguời dùng phải là chữ');

    isValid &= validation.kiemTraPassword(matKhau, '(*) Không được để trống', '(*) Mật Khẩu từ 6-8 ký tự', 'Mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt');

    isValid &= validation.kiemTraEmail(email, '(*) Không được để trống', '(*) Email không hợp lệ');

    isValid &= validation.kiemTraHinhAnh(hinhAnh, '(*) Không được để trống');

    isValid &= validation.kiemTraLoaiND(loaiNguoiDung, '(*) Không được để trống');

    isValid &= validation.kiemTraNgonNgu(loaiNgonNgu, '(*) Không được để trống');

    isValid &= validation.kiemTraMoTa(moTa, '(*) Không được để trống', "(*) Mô tả không quá 60 kí tự")

    if (!isValid) return;

    // đối tượng people
    var people = new People("", taiKhoan, hoTen, matKhau, email, loaiNgonNgu, loaiNguoiDung , moTa, hinhAnh);

    services
        .addPeopleApi(people)
        .then(function(){
            getListPeoples();
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function(error){
            console.log(error);
        });
}

function editPeople(id){
        // Sửa modal heading
        document.getElementsByClassName("modal-title")[0].innerHTML = "Edit people";

        // Thêm nút "add" vào footer modal
        var btFooter = `<button class="btn btn-success" onclick="updatePeople(${id})">Update</button>`;
        document.getElementsByClassName("modal-footer")[0].innerHTML = btFooter;

        services
        .getPeopleById(id)
        .then(function(result){
            getEle("TaiKhoan").value = result.data.taiKhoan;
            getEle("HoTen").value = result.data.hoTen;
            getEle("MatKhau").value = result.data.matKhau;
            getEle("Email").value = result.data.email;
            getEle("loaiNgonNgu").value = result.data.loaiNgonNgu;
            getEle("loaiNguoiDung").value = result.data.loaiNguoiDung;
            getEle("MoTa").value = result.data.moTa;
            getEle("HinhAnh").value = result.data.hinhAnh;
        })
        .catch(function(error){
            console.log(error);
        });
}

/**
 * Update people
 */

function updatePeople(id){
    var taiKhoan = getEle("TaiKhoan").value;
    var hoTen = getEle("HoTen").value;
    var matKhau = getEle("MatKhau").value; 
    var email = getEle("Email").value;
    var loaiNgonNgu = getEle("loaiNgonNgu").value;
    var loaiNguoiDung = getEle("loaiNguoiDung").value;
    var moTa = getEle("MoTa").value;
    var hinhAnh = getEle("HinhAnh").value;

    var people = new People(id, taiKhoan, hoTen, matKhau, email, loaiNgonNgu, loaiNguoiDung, moTa, hinhAnh);

    services
        .updatePeopleApi(people)
        .then(function(){
            getListPeoples();
            document.getElementsByClassName("close")[0].click();
        })
        .catch(function(error){
            console.log(error);
        });
}

