import { API } from "utils/config.js";
import { forMatKeyWord } from "utils/tools.js";

import { HTTP } from "../utils/http";

class Home extends HTTP {
    getHomeDatas(cityId) {
        return new Promise((resolve, reject) => {
            this.postAxios({
                url: API.GET_HOME_DATAS,
                data: {
                    cityId,
                },
                success(res) {
                    const data = res.data;
                    data.foodDatas = forMatKeyWord(data.foodDatas, "keyword");
                    resolve({
                        status: 1,
                        data,
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

export default new Home();