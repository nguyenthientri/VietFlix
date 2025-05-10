import { CreditResponse } from "../types/Credit.type";
import { Person } from "../types/Person.type";
import http from "../utils/http";

export const getCredits = (id: string, language = "vi-VN") => {
    return http
        .get<CreditResponse>(`movie/${id}/credits`, {
            params: { language },
        })
        .then((res) => res.data);
};

export const getPersonInfo = (id: number, language = "en-US") => {
    return http
        .get<Person>(`person/${id}`, {
            params: { language },
        })
        .then((res) => res.data);
};

// const getPersonInfo = (id: string, language = "vi-VN") => {
//     return http
//         .get<CreditResponse>(`person/${id}`, {
//             params: { language },
//         })
//         .then((res) => res.data);
// };
