import { HTTP } from "../utils/http";
import { API } from "utils/config";

class List extends HTTP {
    getListDatas(cityId, field) {
        return new Promise((resolve, rejcet) => {
            this.postAxios({
                url: API.GET_LIST_DATAS,
                data() {
                    cityId,
                    field;
                },
                success(res) {
                    resolve({
                        status: 1,
                        data: res.data,
                    });
                },
                error(err) {
                    resolve({
                        status: 0,
                        err,
                    });
                },
            });
        });
    }
}

export default new List();