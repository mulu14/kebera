import React, {Component} from 'react';
import {Row, Col} from 'antd'
import { Form, Input, Button} from 'antd';

const FormItem = Form.Item;

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: {
            firstname: '', 
            lastname: '', 
            email: '', 
            password: '',
            confirmpassword: '',
            education: '',
            country: ''
          }
           
        };
    }

    handleChange =(e)=>{
        const cloneUser = Object.assign({}, this.state.user)
        let firstname = cloneUser.firstname; 
        let lastname = cloneUser.lastname; 
        let email = cloneUser.email; 
        let password = cloneUser.password; 
        let confirmpassword = cloneUser.confirmpassword
        let education = cloneUser.education; 
        let country = cloneUser.country; 

        switch(e.target.name){
            case 'firstname':
            firstname = e.target.value
            break; 
            case 'lastname': 
            lastname = e.target.value; 
            break;
            case 'email': 
            email = e.target.value; 
            break;  
            case 'password': 
            password = e.target.value; 
            break; 
            case 'confirmpassword':
            confirmpassword = e.target.value
            break; 
            case 'education': 
            education = e.target.value; 
            break; 
            case 'country': 
            country = e.target.value; 
            break; 
            default: 
            console.log('error')
        }

        cloneUser.firstname = firstname; 
        cloneUser.lastname = lastname; 
        cloneUser.email = email; 
        cloneUser.password = password; 
        cloneUser.confirmpassword = confirmpassword; 
        cloneUser.education = education; 
        cloneUser.country = country; 

        this.setState({
            user: cloneUser
        })



    }

    handleSubmit =(e) =>{
        e.preventDefault()
        console.log(this.state.user); 
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={12}>
                    <h1>Register here</h1>
                    </Col>
                </Row>
                <Row>
                    <Col offset={6} span={8}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            <Input 
                                type="text"
                                name="firstname"
                                onChange={this.handleChange}
                                value={this.state.user.firstname} 
                                 style={{ color: 'rgba(0,0,0,.25)' }} 
                                placeholder="First Name" />
                        </FormItem>
                        <FormItem>
                            <Input
                             type="text"
                             name="lastname"
                             onChange={this.handleChange}
                             value={this.state.user.lastname}
                             style={{ color: 'rgba(0,0,0,.25)' }}
                             placeholder="Last name" />
                        </FormItem>
                        <FormItem>
                        <Input
                             type="text"
                             name="email"
                             onChange={this.handleChange}
                             value={this.state.user.email}
                             style={{ color: 'rgba(0,0,0,.25)' }}
                             placeholder="Email" />
                        </FormItem>
                        <FormItem>
                        <Input
                             type="password"
                             name="password"
                             onChange={this.handleChange}
                             value={this.state.user.password}
                             style={{ color: 'rgba(0,0,0,.25)' }}
                             placeholder="Password" />
                        </FormItem>
                        <FormItem>
                        <Input
                             type="password"
                             name="confirmpassword"
                             onChange={this.handleChange}
                             value={this.state.user.confirmpassword}
                             style={{ color: 'rgba(0,0,0,.25)' }}
                             placeholder="Confirm Password" />
                        </FormItem>
                        <FormItem>
                        <Input
                             type="text"
                             name="education"
                             onChange={this.handleChange}
                             value={this.state.user.education}
                             style={{ color: 'rgba(0,0,0,.25)' }}
                             placeholder="Education" />
                        </FormItem>
                        <FormItem>
                        <Input
                             type="text"
                             name="country"
                             onChange={this.handleChange}
                             value={this.state.user.country}
                             style={{ color: 'rgba(0,0,0,.25)' }}
                             placeholder="Country" />
                        </FormItem>
                        <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">Register</Button>
                        </FormItem>
                    </Form>
                </Col>
                </Row>

            </div>
        );
    }
}

export default Register;
