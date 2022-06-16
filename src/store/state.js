const state = {
    cityInfo: {
        cityId: "0",
        cityName: "全部",
        field: "view",
    },
};

try {
    if (!localStorage.getItem("cityInfo")) {
        localStorage.setItem("cityInfo", JSON.stringify(state.cityInfo));
    } else {
        state.cityInfo = JSON.parse(localStorage.getItem("cityInfo"));
    }
} catch (e) {}

export default state;