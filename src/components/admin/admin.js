import React,{Component} from 'react';
import { Row, Col } from 'antd';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: {
                name: '', 
            }
        };
    }

handeleSumbit =(e)=>{
    e.preventDefault(); 
}

    render() {
        return (
            <div>
                <Row>
                    <Col offset={6} span={8} 
                    >
                    <form onSubmit={this.handeleSumbit}>
                     <label>Subject</label>
                     <textarea> </textarea>

                     <button type="submit"> Submit</button>
                    </form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Admin;
