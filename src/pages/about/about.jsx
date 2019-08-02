import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../layout/layout'

import { withRouter } from 'react-router-dom'
import str from './router'
class About extends Component {
  state = {
    routerParams: null
  }
  componentDidMount () {
    this.setState({
      routerParams: this.props.location.query
    })
    this.refs.routerDesc.innerHTML = str
  }
  render () {
    return (
      <Layout>
        <div>关于</div>
        <div>路由传参的query：</div>
        <div>
          {JSON.stringify(this.state.routerParams)}
        </div>
        <div style={{ color: 'white', marginTop: '20px' }} ref="routerDesc"></div>
      </Layout>
    )
  }
}
export default withRouter(connect()(About))