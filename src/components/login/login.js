import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {Row, Col} from 'antd'
import { Form, Icon, Input, Button} from 'antd';

const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: {
            email: '', 
            password: '',
          }
           
        };
    }

    handleChange =(e)=>{
        const cloneUser = Object.assign({}, this.state.user)
        let email = cloneUser.email; 
        let password = cloneUser.password; 


        switch(e.target.name){
            case 'email': 
            email = e.target.value;
            break;   
            case 'password': 
            password = e.target.value; 
            break; 
            default: 
            console.log('error')
        }
        cloneUser.email = email; 
        cloneUser.password = password; 

        this.setState({
            user: cloneUser
        })



    }

    handleSubmit =() =>{

    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                    <h1>Login component</h1>
                    </Col>
                </Row>
                <Row>
                    <Col offset={8} span={8}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        </FormItem>
                        <FormItem>
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        </FormItem>
                        <FormItem>
                        <Link className="login-form-forgot" to="/">Forgot password</Link>
                        <br/>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        </FormItem>
                    </Form>
                </Col>
                </Row>

            </div>
        );
    }
}

export default Login;
