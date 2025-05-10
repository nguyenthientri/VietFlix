import { KeywordsResponse } from "../../../../types/Keyword.type";

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
                        <button
                            key={keyword.id}
                            className="bg-[#E5E5E5] px-2 py-[3px] rounded-md text-[12px]
            hover:cursor-pointer border-1 border-[#D7D7D7] "
                        >
                            {keyword.name}
                        </button>
                    ))}
                </div>

                {/* Desktop view */}
                <div className="hidden md:block">
                    <div className="flex flex-wrap gap-2 w-full ">
                        {KeywordsData?.keywords?.slice(0, 20).map((keyword) => (
                            <button
                                key={keyword.id}
                                className="bg-[#E5E5E5] px-2 py-[3px] rounded-md text-[12px]
             hover:cursor-pointer border-1 border-[#D7D7D7] "
                            >
                                {keyword.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
