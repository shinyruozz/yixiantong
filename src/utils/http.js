import axios from "axios";
import qs from "qs";

class HTTP {
    constructor() {}

    postAxios(options) {
        const { url, data, success, error } = options;
        axios({
            url: url,
            method: "post",
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            data: qs.stringify(data),
        }).then(
            (res) => {
                success(res);
            },
            (err) => {
                error(err);
            }
        );
    }
    getAxios(options) {
        const { url, params, success, error } = options;

        axios(url, params).then(
            (res) => {
                success(res);
            },
            (err) => {
                error(err);
            }
        );
    }
}

export { HTTP };