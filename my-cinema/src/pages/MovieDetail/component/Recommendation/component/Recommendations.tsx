import {
    faBookmark,
    faCalendarDays,
    faHeart,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RecommendationMovieDetails } from "../../../../../types/Recommendations.type";
import { Link } from "react-router-dom";
import path from "../../../../../constants/path";

interface RecommendationsProps {
    Recommendation?: RecommendationMovieDetails;
}
const getFloor = (num: number) => {
    return Math.floor(num * 10);
};
const Recommendations = ({ Recommendation }: RecommendationsProps) => {
    return (
        <>
            <Link
                to={`${path.home}${Recommendation?.id}`}
                className="flex flex-col"
            >
                <div className=" w-[250px] h-[140px] group rounded-md overflow-hidden relative">
                    <img
                        src={`https://media.themoviedb.org/t/p/w500${Recommendation?.backdrop_path}`}
                        alt=""
                    />
                    <div
                        className="absolute px-3 py-2 flex justify-between items-center
                     w-full bottom-[-41px] group-hover:bottom-[-2px] transition-all right-0 bg-[#E5E5E5]"
                    >
                        <div>
                            <FontAwesomeIcon
                                className="text-sm mr-1"
                                icon={faCalendarDays}
                            />
                            <span className="text-[15px]">
                                {Recommendation?.release_date}
                            </span>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                className="text-[12px] mx-1"
                                icon={faBookmark}
                            />
                            <FontAwesomeIcon
                                className="text-[12px] mx-1"
                                icon={faStar}
                            />
                            <FontAwesomeIcon
                                className="text-[12px] mx-1"
                                icon={faHeart}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center my-2">
                    <p>{Recommendation?.title}</p>
                    <span className="text-sm">
                        {getFloor(Number(Recommendation?.vote_average))}%
                    </span>
                </div>
            </Link>
        </>
    );
};
export default Recommendations;
