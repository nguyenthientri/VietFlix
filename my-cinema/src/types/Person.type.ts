export interface Person {
    adult: boolean; // Defaults to true
    also_known_as: string[];
    biography: string;
    birthday: string;
    deathday: string;
    gender: number; // Defaults to 0
    homepage: string;
    id: number; // Defaults to 0
    imdb_id: string;
    known_for_department: string;
    name: string;
    place_of_birth: string;
    popularity: number; // Defaults to 0
    profile_path: string;
}
