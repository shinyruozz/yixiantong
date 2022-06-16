const mutation = {
    cityChange(state, info) {
        state.cityInfo.cityId = info.cityId;
        state.cityInfo.cityName = info.cityName;
        localStorage.setItem("cityInfo", JSON.stringify(state.cityInfo));
    },
    fieldChange(state, fieldInfo) {
        state.cityInfo.field = fieldInfo.field;
        localStorage.setItem("cityInfo", JSON.stringify(state.cityInfo));
    },
};

export default mutation;