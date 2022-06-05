function Services(){
    this.getListPeopleApi = function(){
        return axios({
            url: "https://629bbfa1cf163ceb8d1d7d07.mockapi.io/peopleOurWay",
            method: "GET",
        });
    };
}