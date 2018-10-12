import React, { Component } from 'react';
import { Layout, Menu} from 'antd';
import {Link} from 'react-router-dom'
import  ComponentRoute from './componentroute/route'
import StartPage from './components/startpage/startpage'
import './App.css'


const { SubMenu } = Menu;
const { Header, Content, Sider,  Footer } = Layout;

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
     collapsed: false, 
     login: false,
    }
  }
  render() {
    const islogin = this.state.login? 
    <Content style={{ padding: '0 50px' }}>
    <Layout style={{ padding: '24px 0', background: '#fff' }}>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
        >
          <SubMenu key="sub1" title={<span>Kebera</span>}>
            <Menu.Item key="1">Mission</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Developement</Menu.Item>
            <Menu.Item key="4">Histrory</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span>Contributer</span>}>
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span>News</span>}>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <ComponentRoute/>
      </Content>
    </Layout>
  </Content> : <StartPage/>; 

    return (
      <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/register">Register</Link></Menu.Item>
        </Menu>
      </Header>
      {islogin}
    <Footer style={{ textAlign: 'center' }}>
       Kebera ©2018 
    </Footer>
    </Layout>
    )
  }
}

export default App;
