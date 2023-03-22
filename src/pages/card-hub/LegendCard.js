import {Card} from "react-bootstrap";

export const LegendCard = (props) => {
    return (
        <Card className={'text-center'}>
            <h3>{props.title}</h3>
            <Card.Img src={props.image}/>
            <Card.Body>
                <h5>{props.type}</h5>
                <hr/>
                <h6>{props.description}</h6>
            </Card.Body>
        </Card>
    )
}