import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Person } from "../../../../types/Person.type";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

interface CreditInfoProps {
    CreditInfo?: Person;
}

const CreditInfo = ({ CreditInfo }: CreditInfoProps) => {
    const bioRef = useRef<HTMLParagraphElement>(null);
    const [showReadMore, setShowReadMore] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const element = bioRef.current;
        if (element) {
            const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
            const maxLines = 6;
            const maxHeight = lineHeight * maxLines;

            if (element.scrollHeight > maxHeight) {
                setShowReadMore(true);
            }
        }
    }, [CreditInfo?.biography]);

    return (
        <>
            <div className="flex flex-col items-center px-5 py-8">
                <div className="w-[175px] h-[175px]">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `url('https://media.themoviedb.org/t/p/w300${CreditInfo?.profile_path}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                </div>
                <p className="font-bold text-3xl mt-4 cursor-pointer">
                    {CreditInfo?.name}
                </p>
                <div className="flex">
                    <FontAwesomeIcon
                        className="text-2xl cursor-pointer p-2"
                        icon={faTwitter}
                    />
                    <FontAwesomeIcon
                        className="text-2xl cursor-pointer p-2"
                        icon={faInstagram}
                    />
                </div>
                <div className="flex flex-col justify-start w-full  gap-3 mt-6">
                    <p className="font-bold text-lg">Personal Info</p>
                    <div>
                        <p className="font-bold">Known For</p>
                        <p className="text-gray-700 text-[15px]">
                            {CreditInfo?.known_for_department}
                        </p>
                    </div>
                    <div>
                        <p className="font-bold">Gender</p>
                        <p className="text-gray-700 text-[15px]">
                            {CreditInfo?.gender}
                        </p>
                    </div>
                    <div>
                        <p className="font-bold">Birthday</p>
                        <p className="text-gray-700 text-[15px]">
                            {CreditInfo?.birthday}
                        </p>
                    </div>
                    <div>
                        <p className="font-bold">Place of Birth</p>
                        <p className="text-gray-700 text-[15px]">
                            {CreditInfo?.place_of_birth}
                        </p>
                    </div>
                    <div>
                        <p className="font-bold">Biography</p>
                        <div>
                            <p
                                ref={bioRef}
                                className={`text-gray-700 text-[15px] ${
                                    !isExpanded ? "line-clamp-6" : ""
                                }`}
                            >
                                {CreditInfo?.biography}
                            </p>
                            {showReadMore && (
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="font-bold hover:text-blue-400 mt-1"
                                >
                                    {isExpanded ? (
                                        <>Show less</>
                                    ) : (
                                        <>
                                            Read more{" "}
                                            <FontAwesomeIcon
                                                icon={faArrowRight}
                                            />
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CreditInfo;
