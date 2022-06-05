var service = new Services();

function getEle(id) {
    return document.getElementById(id);
}

function getListPeoples() {
    var promise = service.getListPeopleApi();
    promise
        .then(function (result) {
            renderListPeoples(result.data);
        })
        .catch(function (error) {
            console.log(error);
        });

}

getListPeoples();

function renderListPeoples(data) {
    var contentHTML = "";

    data.forEach(function (people) {
            contentHTML += `
                <div class="col-xl-3 wow animate__animated animate__fadeInLeftBig">
                    <div class="card">
                        <img class="card-img-top" src="./images/${people.hinhAnh}" alt="">
                        <div class="card-body">
                            <div class="card-name">${people.ngonNgu}</div>
                            <h4 class="card-title">${people.hoTen}</h4>
                            <p class="card-text">${people.moTa}</p>
                        </div>
                    </div>
                </div>
        `
    });

    getEle("listPeoples").innerHTML = contentHTML; 
}