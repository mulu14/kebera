import React, {Component} from 'react';
import YouTube from 'react-youtube';
import { Row, Col, Icon, Avatar, Card } from 'antd';

const opts = {
    height: '390',
    width: '640',
    playerVars: { 
      autoplay: 1
    }
  };

  
const {Meta} = Card; 


class StartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _onReady(event) {
        event.target.pauseVideo();
      }

    render() {
        return (
            <div>
            <Row>
                <Col offset={8} span={8}>
                <Card
                    style={{ width: 300 }}
                    cover={<img alt="example" src="https://i0.wp.com/hadiyajourney.com/wp-content/uploads/2017/05/bildarchiv_233-Badawacho-Hadiya3.png?fit=700%2C968&ssl=1"/>}
                    >
                </Card>
             </Col>
            </Row>
             <Row>
                 <Col  offset={6} span={8}>
                   <YouTube
                    videoId="1ySDOpOCf5w"
                    opts={opts}
                    onReady={this._onReady}
                /> 
               </Col>
            </Row> 
            </div>
        );
    }
}

export default StartPage;
