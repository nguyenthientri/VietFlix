import { KeywordsResponse } from "../types/Keyword.type";
import { MovieDetails, MoviesResponse } from "../types/Movie.type";
import { RecommendationResponse } from "../types/Recommendations.type";
import { ReviewResponse } from "../types/Review.type";
import http from "../utils/http";

export const getPopularMovies = (
    language: string = "en-US",
    page: number | string
) => {
    return http
        .get<MoviesResponse>(`movie/popular`, {
            params: {
                language: language,
                page: page,
            },
        })
        .then((response) => response.data);
};

export const getMovieDetails = (id: string | number, language = "en-US") => {
    return http
        .get<MovieDetails>(`movie/${id}`, {
            params: { language },
        })
        .then((response) => {
            return response.data;
        });
};

export const getTopRatedMovies = (
    language: string = "en-US",
    page: number | string
) => {
    return http
        .get<MoviesResponse>(`movie/top_rated`, {
            params: {
                language: language,
                page: page,
            },
        })
        .then((response) => response.data);
};

export const getMovieSearch = (query: string) => {
    return http
        .get<MoviesResponse>(`search/movie`, {
            params: {
                query: query,
            },
        })
        .then((response) => response.data);
};

export const getKeyword = (id: string | number) => {
    return http
        .get<KeywordsResponse>(`movie/${id}/keywords`)
        .then((response) => {
            return response.data;
        });
};

export const getMovieRecommendations = (
    id: string | number,
    language = "en-US"
) => {
    return http
        .get<RecommendationResponse>(`movie/${id}/recommendations`, {
            params: { language },
        })
        .then((response) => {
            return response.data;
        });
};

export const getReviews = (
    id: string | number,
    language: string = "en-US",
    page: string | number = 1
) => {
    return http
        .get<ReviewResponse>(`movie/${id}/reviews`, {
            params: {
                language: language,
                page: page,
            },
        })
        .then((response) => {
            return response.data;
        });
};
