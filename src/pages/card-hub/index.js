import {LegendCard} from "./LegendCard";
import {Row} from "react-bootstrap";

const legends = [
    {
        title: 'Attack Stance',
        image: 'https://i.imgur.com/wcdKFpx.png',
        type: 'Posture',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec diam at ligula cursus rhoncus vel vitae nisl. Nam mollis cursus massa id iaculis. Cras vitae convallis libero. Donec vel pellentesque libero. Duis aliquam velit sed arcu ultrices sagittis. Sed cursus, justo a imperdiet tincidunt, velit neque condimentum velit, eget consequat nisi lectus sed lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam quam magna, volutpat nec est a, lobortis laoreet massa. Cras sed viverra quam.'
    },
    {
        title: 'Attack Stance',
        image: 'https://i.imgur.com/wcdKFpx.png',
        type: 'Posture',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec diam at ligula cursus rhoncus vel vitae nisl. Nam mollis cursus massa id iaculis. Cras vitae convallis libero. Donec vel pellentesque libero. Duis aliquam velit sed arcu ultrices sagittis. Sed cursus, justo a imperdiet tincidunt, velit neque condimentum velit, eget consequat nisi lectus sed lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam quam magna, volutpat nec est a, lobortis laoreet massa. Cras sed viverra quam.'
    },
    {
        title: 'Attack Stance',
        image: 'https://i.imgur.com/wcdKFpx.png',
        type: 'Posture',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec diam at ligula cursus rhoncus vel vitae nisl. Nam mollis cursus massa id iaculis. Cras vitae convallis libero. Donec vel pellentesque libero. Duis aliquam velit sed arcu ultrices sagittis. Sed cursus, justo a imperdiet tincidunt, velit neque condimentum velit, eget consequat nisi lectus sed lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam quam magna, volutpat nec est a, lobortis laoreet massa. Cras sed viverra quam.'
    },
    {
        title: 'Attack Stance',
        image: 'https://i.imgur.com/wcdKFpx.png',
        type: 'Posture',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec diam at ligula cursus rhoncus vel vitae nisl. Nam mollis cursus massa id iaculis. Cras vitae convallis libero. Donec vel pellentesque libero. Duis aliquam velit sed arcu ultrices sagittis. Sed cursus, justo a imperdiet tincidunt, velit neque condimentum velit, eget consequat nisi lectus sed lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam quam magna, volutpat nec est a, lobortis laoreet massa. Cras sed viverra quam.'
    },
    {
        title: 'Attack Stance',
        image: 'https://i.imgur.com/wcdKFpx.png',
        type: 'Posture',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec diam at ligula cursus rhoncus vel vitae nisl. Nam mollis cursus massa id iaculis. Cras vitae convallis libero. Donec vel pellentesque libero. Duis aliquam velit sed arcu ultrices sagittis. Sed cursus, justo a imperdiet tincidunt, velit neque condimentum velit, eget consequat nisi lectus sed lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam quam magna, volutpat nec est a, lobortis laoreet massa. Cras sed viverra quam.'
    }
]
export const CardHub = () => {
    return (
        <div>
            <h1 className={'text-center'}>Card hub</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Row className={'col-10'}>
                    {legends.map(legend => {
                        return (
                            <div className={'col-3 mb-3'}>
                                <LegendCard title={legend.title} image={legend.image} type={legend.type}
                                            description={legend.description}></LegendCard>
                            </div>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}