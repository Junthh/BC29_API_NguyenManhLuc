function Services() {
    this.getListPeopleApi = function () {
        return axios({
            url: "https://629bbfa1cf163ceb8d1d7d07.mockapi.io/peopleOurWay",
            method: "GET",
        });
    };

    this.deletePeopleApi = function (id) {
        return axios({
            url: `https://629bbfa1cf163ceb8d1d7d07.mockapi.io/peopleOurWay/${id}`,
            method: "DELETE",
        });
    };

    this.addPeopleApi = function (people) {
        return axios({
            url: "https://629bbfa1cf163ceb8d1d7d07.mockapi.io/peopleOurWay",
            method: "POST",
            data: people,
        });
    };

    this.getPeopleById = function(id){
        return axios({
            url: `https://629bbfa1cf163ceb8d1d7d07.mockapi.io/peopleOurWay/${id}`,
            method: "GET",
        });
    };

    this.updatePeopleApi = function (people) {
        return axios({
            url: `https://629bbfa1cf163ceb8d1d7d07.mockapi.io/peopleOurWay/${people.id}`,
            method: "PUT",
            data: people,
        });
    };
}