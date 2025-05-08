import { Keyword } from "../../../../../types/Keyword.type";

interface KeywordsProps {
    keyword: Keyword;
}
const Keywords: React.FC<KeywordsProps> = ({ keyword }: KeywordsProps) => {
    return (
        <>
            <button
                className="bg-[#E5E5E5] px-2 py-[3px] rounded-md text-[12px]
            hover:cursor-pointer border-1 border-[#D7D7D7] "
            >
                {keyword.name}
            </button>
        </>
    );
};
export default Keywords;
