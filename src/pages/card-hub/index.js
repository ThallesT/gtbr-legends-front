import {LegendCard} from "./LegendCard";
import {Row} from "react-bootstrap";

export const CardHub = () => {
    return (
        <div>
            <h1>Card hub</h1>
            <Row>
               <div className={'col-3'}>
                   <LegendCard></LegendCard>
               </div>
            </Row>
        </div>
    )
}