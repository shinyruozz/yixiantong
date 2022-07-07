import { HTTP } from "../utils/http";
import { API } from "utils/config";
import { forMatKeyWord } from "utils/tools.js";

class Search extends HTTP {
    searchData(keyword, cityId) {
        return new Promise((resolve, reject) => {
            this.postAxios({
                url: API.SEARCH_ACTION,
                data: {
                    keyword,
                    cityId,
                },
                success(res) {
                    const data = res.data;
                    data.foodDatas && (data.foodDatas = forMatKeyWord(data.foodDatas, "keyword"));
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

export default new Search();