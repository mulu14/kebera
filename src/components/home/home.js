import React,{Component} from 'react';
import {Row, Col} from 'antd'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div> <h1> Home page </h1>
            <Row gutter={16}>
            <Col offset={2} span={10}>Layout 1</Col>
            <Col >Layout 2 </Col>
            </Row>
            </div>
        );
    }
}


export default Home;
