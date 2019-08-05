import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types'; // 这个插件可以指定props的类型、是否必穿
import { getContractList, setUserInfo } from '@/store/action'
import { Icon, Input, Button } from 'antd';
import './login.scss'
import $api from '@/api'
class Login extends Component {
  static propTypes = {
    // orderStatus: PropTypes.object.isRequired,
  }
  state = {
    codeImg: process.env.REACT_APP_ROOT + '/upload/captcha?t=' + Math.random(),
    login_name: '',
    password: '',
    verifyCode: ""
  }
  changeCode = () => {
    this.setState({
      codeImg: process.env.REACT_APP_ROOT + '/upload/captcha?t=' + Math.random()
    })
  }
  login = () => {
    let params = {
      login_name: this.state.login_name,
      password: this.state.password,
      verifyCode: this.state.verifyCode,
      action_id: '0c0a2b9cd16e9594774c2979951d709b4'
    }
    $api.post('/login/index', params).then(res => {
      if (res.code === 200) {
        this.props.setUserInfo(res.data)
        this.props.getContractList()
        // 跳转到首页
        this.props.history.push('/home')
      }
    })
  }
  componentDidMount () {
    // 
  }
  render () {
    return (
      <div className="loginbox">
        <Input
          value={this.state.login_name}
          type='text'
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          onChange={(e) => {
            this.setState({
              login_name: e.target.value
            })
          }}
          placeholder="Username"
        />
        <Input
          value={this.state.password}
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="密码"
          onChange={(e) => {
            this.setState({
              password: e.target.value
            })
          }}
        />
        <Input
          value={this.state.verifyCode}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          onChange={(e) => {
            this.setState({
              verifyCode: e.target.value
            })
          }}
          placeholder="验证码"
        />
        <img src={this.state.codeImg} alt="" onClick={this.changeCode} />
        <Button type="primary" onClick={this.login} className="login-form-button" style={{ marginTop: '15px' }}>
          login
          </Button>
        <Button type="link" onClick={() => { this.props.history.push('/home') }} style={{ marginTop: '15px' }}>直接进去</Button>
      </div>
    );
  }
}

export default connect(state => {
  return { // 第一个参数是返回store的state
    initData: state.initData,
  }
},
  { // 这里是action，需要引入
    getContractList,
    setUserInfo
  })(Login); // Login为react的一个页面
