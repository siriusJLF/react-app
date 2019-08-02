import { Menu } from 'antd';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import './menus.scss'
import { setDefaultSelectedKeys } from '@/store/action'
const { SubMenu } = Menu;


class Menus extends Component {
  state = {
    defaultSelectedKeys: ['1']
  }
  go = (key) => {
    this.props.setDefaultSelectedKeys([key])
    this.props.history.push({ pathname: '/about', query: { day: 'Friday', id: 666 } })
  }
  render () {
    // 通过memu可以根据用户的权限定制主菜单
    let memu = this.props.initData.memu
    return (
      <div style={{ width: '100%' }} className='menus'>
        <Menu
          defaultSelectedKeys={this.props.initData.defaultSelectedKeys}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.props.collapsed}
        >
          {memu.includes(2) ?
            <Menu.Item key="1" onClick={() => { this.props.setDefaultSelectedKeys(['1']); this.props.history.push('/home') }}>
              <i className="iconfont icon-shouye"></i>
              <span className="tit">首页</span>
            </Menu.Item>
            : ''
          }
          <SubMenu
            key="sub1"
            title={
              <span>
                <i className="iconfont icon-yingxiaoguanli"></i>
                <span className="tit">其他</span>
              </span>
            }
          >
            <Menu.Item key="5" onClick={() => { this.go('5') }}>关于</Menu.Item>
            <Menu.Item key="6" onClick={() => { window.open('https://blog.csdn.net/weixin_43206949', '_target') }}>博客</Menu.Item>
          </SubMenu>
          {
            memu.includes(50) ?
              <SubMenu key="sub3" title={
                <span>
                  <i className="iconfont icon-jigouguanli"></i>
                  <span className="tit">组织机构</span>
                </span>
              }>
                <Menu.Item key="11">组织结构</Menu.Item>
                <Menu.Item key="12">角色权限</Menu.Item>
              </SubMenu> : ''
          }
        </Menu>
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  initData: state.initData
}), { setDefaultSelectedKeys })(Menus))