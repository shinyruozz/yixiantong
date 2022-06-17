import { HTTP } from "../utils/http";
import { API } from "utils/config";
class Detail extends HTTP {
    getDetail(id, field) {
        return new Promise((resolve, reject) => {
            this.postAxios({
                url: API.GET_DETAIL,
                data: {
                    id,
                    field,
                },
                success(res) {
                    resolve({
                        res,
                        status: 1,
                    });
                },
                error(err) {
                    resolve({
                        res: err,
                        status: 0,
                    });
                },
            });
        });
    }
}

export default new Detail();