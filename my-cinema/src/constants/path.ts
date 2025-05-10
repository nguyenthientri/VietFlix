const path = {
    home: "/",
    login: "/login",
    register: "/register",
    logout: "/logout",
    movieDetail: ":id",
    creditDetail: "/person/:personId",
} as const;

export default path;
