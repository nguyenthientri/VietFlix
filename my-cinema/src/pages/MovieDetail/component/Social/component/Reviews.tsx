import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Review } from "../../../../../types/Review.type";
import * as dayjs from "dayjs";

interface ReviewsProps {
    ReviewsData?: Review;
}
const Reviews = ({ ReviewsData }: ReviewsProps) => {
    const formatDate = (date?: string) => {
        return dayjs(date).format("MMMM D, YYYY");
    };
    return (
        <>
            <div className="p-4 mt-4 flex flex-col rounded-md border-1 border-gray-300 shadow-md shadow-gray-500">
                <div className="flex gap-4 items-center">
                    <div className="w-[45px] h-[45px] shrink-0 rounded-[50%] overflow-hidden cursor-pointer">
                        <img
                            src={`https://media.themoviedb.org/t/p/w45_and_h45_face/${ReviewsData?.author_details.avatar_path}?s=300&d=mm`}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-xl">
                            A review by {ReviewsData?.author}
                        </p>
                        <div className="flex items-center  gap-3">
                            <button className="bg-[#032541] rounded-md shrink-0 text-white text-[12px] px-2 py-1">
                                <FontAwesomeIcon
                                    className="text-[12px] pr-1"
                                    icon={faStar}
                                />
                                {ReviewsData?.author_details.rating}%
                            </button>
                            <p className="text-[13px]">
                                Written by{" "}
                                <span className="font-bold">
                                    {ReviewsData?.author}
                                </span>{" "}
                                on {formatDate(ReviewsData?.created_at)}
                                {/* on April 30, 2025 */}
                            </p>
                        </div>
                    </div>
                </div>
                <p className="mt-3">{ReviewsData?.content}</p>
            </div>
        </>
    );
};
export default Reviews;
