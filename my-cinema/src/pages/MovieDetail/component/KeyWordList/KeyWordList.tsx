import { KeywordsResponse } from "../../../../types/Keyword.type";
import Keywords from "./component/Keywords";

interface KeywordProps {
    KeywordsData?: KeywordsResponse;
}
export default function KeyWordList({ KeywordsData }: KeywordProps) {
    return (
        <>
            <div className="md:w-[70%] w-full">
                <p className="font-bold mb-3">Keywords</p>

                {/* Mobile view  */}
                <div className="flex flex-wrap gap-2 md:hidden w-full">
                    {KeywordsData?.keywords?.slice(0, 10).map((keyword) => (
                        <Keywords key={keyword.id} keyword={keyword} />
                    ))}
                </div>

                {/* Desktop view */}
                <div className="hidden md:block">
                    <div className="flex flex-wrap gap-2 w-full ">
                        {KeywordsData?.keywords?.slice(0, 20).map((keyword) => (
                            <Keywords key={keyword.id} keyword={keyword} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
