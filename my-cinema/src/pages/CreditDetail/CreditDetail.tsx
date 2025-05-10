import { useQuery } from "@tanstack/react-query";
import CreditInfo from "./components/CreditInfo/CreditInfo";
import Menu from "./components/Menu/Menu";
import { useParams } from "react-router-dom";
import { getPersonInfo } from "../../Apis/Credits.api";

export default function CreditDetail() {
    const { personId } = useParams();
    const id = Number(personId?.split("-")[0]); // tách ID = "12345"
    const { data: CreditDetailData } = useQuery({
        queryKey: ["/person", id],
        queryFn: () => getPersonInfo(id),
    });
    console.log(CreditDetailData);

    return (
        <>
            <Menu />
            <CreditInfo CreditInfo={CreditDetailData} />
        </>
    );
}
