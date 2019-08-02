import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import Menus from './components/menus'
import './layout.scss'
const { Header, Sider, Content } = Layout;
class Layouts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }
  onCollapse = (val) => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render () {
    return (
      <Layout className='wrap_layout'>
        <Header>
          <div>
            react练手系统
          </div>
        </Header>
        <Layout>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <Menus collapsed={this.state.collapsed} />
          </Sider>
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default connect((state) => ({
  initData: state.initData
}))(Layouts)