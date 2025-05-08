import { RecommendationResponse } from "../../../../types/Recommendations.type";
import Recommendations from "./component/Recommendations";

interface RecommendationProps {
    RecommendationsData?: RecommendationResponse;
}
export default function Recommendation({
    RecommendationsData,
}: RecommendationProps) {
    return (
        <>
            <div className="overflow-x-auto">
                <p className="font-bold my-3 text-lg">Recommendations</p>
                <div className="flex flex-nowrap gap-3 md:gap-5">
                    {RecommendationsData?.results
                        ?.slice(0, 10)
                        .map((Recommendation) => (
                            <Recommendations
                                key={Recommendation.id}
                                Recommendation={Recommendation}
                            />
                        ))}
                </div>
            </div>
        </>
    );
}
