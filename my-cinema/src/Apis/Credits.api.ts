import { CreditResponse } from "../types/Credit.type";
import http from "../utils/http";

export const getCredits = (id: string, language = "vi-VN") => {
    return http
        .get<CreditResponse>(`movie/${id}/credits`, {
            params: { language },
        })
        .then((res) => res.data);
};
