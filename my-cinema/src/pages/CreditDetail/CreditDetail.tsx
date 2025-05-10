import { useQuery } from "@tanstack/react-query";
import CreditInfo from "./components/CreditInfo/CreditInfo";
import Menu from "./components/Menu/Menu";
import { useParams } from "react-router-dom";
import { getCombinedCredit, getPersonInfo } from "../../Apis/Credits.api";
import ListKnowFor from "./components/ListKnownFor/ListKnowFor";

export default function CreditDetail() {
    const { personId } = useParams();
    const id = Number(personId?.split("-")[0]); // tách ID = "12345"
    const id_combined = String(personId?.split("-")[0]);

    const { data: CreditDetailData } = useQuery({
        queryKey: ["/person", id],
        queryFn: () => getPersonInfo(id),
    });

    const { data: CombinedCreditData } = useQuery({
        queryKey: ["/person", id_combined, "combined_credits"],
        queryFn: () => getCombinedCredit(id_combined),
        enabled: !!id_combined,
    });

    // console.log(CombinedCreditData);

    return (
        <>
            <Menu />
            <CreditInfo CreditInfo={CreditDetailData} />
            <ListKnowFor CombinedCreditData={CombinedCreditData} />
        </>
    );
}
