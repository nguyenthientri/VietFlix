import { ReviewResponse } from "../../../../types/Review.type";
import Reviews from "./component/Reviews";
interface ReviewsDataProps {
    ReviewsData?: ReviewResponse;
}
export default function Social({ ReviewsData }: ReviewsDataProps) {
    return (
        <>
            <div>
                <div className="flex justify-between items-center">
                    <p className="font-bold">Social</p>
                    <div className="flex gap-5">
                        <p className="font-bold text-[13px] hover:cursor-pointer">
                            Reviews
                            <span className="text-gray-500 pl-1">
                                {ReviewsData?.results?.length}
                            </span>
                        </p>
                    </div>
                </div>
                {ReviewsData?.results?.slice(0, 1).map((ReviewsData) => (
                    <Reviews key={ReviewsData?.id} ReviewsData={ReviewsData} />
                ))}
            </div>
        </>
    );
}
