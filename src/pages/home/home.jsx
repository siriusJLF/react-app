import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../layout/layout'
import { Select, Input, DatePicker, Row, Col, Button, Table } from 'antd'
import moment from 'moment'
import $api from '@/api'
import { withRouter } from 'react-router-dom'

const { RangePicker } = DatePicker;
const { Option } = Select

class Home extends Component {
  state = {
    loading: false,
    searchParams: {
      searchType: 1,
      content: '',
      create_time: '',
      page: 1,
      pageSize: 10
    },
    tabColumns: [
      {
        title: '区域',
        dataIndex: 'area_name',
        key: 'area_name',
      },
      {
        title: '客户名称',
        dataIndex: 'company_name',
        key: 'company_name',
      },
      {
        title: '签订时间',
        key: 'create_time',
        dataIndex: 'create_time',
        render: (text) => (
          <span>{moment(text * 1000).format('YYYY-MM-DD')}</span>
        )
      },
      {
        title: '纳税类型',
        key: 'tax_type_name',
        dataIndex: "tax_type_name"
      },
    ],
    tabData: [],
    pagination: { // 分页器的配置
      position: 'bottom',
      showTotal: (total) => `共${total}条数据`,
      showSizeChanger: true,
      showQuickJumper: true,
      total: 0,
      current: 1,
      pageSize: 10,
      pageSizeOptions: ['10', '20', '30', '50'],
      onChange: async (page, pageSize) => {
        await this.setState({
          searchParams: { ...this.state.searchParams, page, pageSize }
        })
        this.search()
      },
      onShowSizeChange: async (page, pageSize) => {
        await this.setState({
          searchParams: { ...this.state.searchParams, page: 1, pageSize }
        })
        this.search()
      },
    },
  }
  // 改变搜索类型
  changeSearhType = (val) => {
    this.setState({
      searchParams: { ...this.state.searchParams, searchType: val }
    })
  }
  componentWillMount () {
    this.search()
  }

  // 输入内容
  changCentent = (e) => {
    this.setState({
      searchParams: { ...this.state.searchParams, content: e.target.value }
    })
  }
  // 改变时间
  changTime = (val) => {
    if (val.length === 0) {
      this.setState({
        searchParams: { ...this.state.searchParams, create_time: '' }
      })
      return;
    }
    let arr = [moment(val[0]._d).format('YYYY-MM-DD'), moment(val[1]._d).format('YYYY-MM-DD')]
    this.setState({
      searchParams: { ...this.state.searchParams, create_time: arr.join(',') }
    })
  }
  //so
  search = () => {
    this.setState({
      loading: true,
    })
    $api.post('/contract/index', { ...this.state.searchParams, action_id: '3046dff0f0cf3be8783985e39f6895e470' }).then(res => {
      if (res.code === 200) {
        let data = res.data.data.map((item, index) => {
          item.key = index // 坑货
          return item
        })
        this.setState({
          tabData: data,
          loading: false,
          pagination: { ...this.pagination, total: res.data.total }
        })
      }
    })
  }
  render () {
    let searchParams = this.state.searchParams
    return (
      <Layout>
        <div id="home">
          <Row type="flex" justify="start" gutter={16}>
            <Col span={4}>
              <Row>
                <Col span={10}>
                  <Select defaultValue={searchParams.searchType} style={{ width: "100%", }} onChange={this.changeSearhType}>
                    <Option value={1}>客户名称</Option>
                    <Option value={2}>手机号</Option>
                  </Select>
                </Col>
                <Col span={14} style={{ marginLeft: '-5px' }}>
                  <Input onChange={this.changCentent}></Input>
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <span>签订时间：</span>
              <RangePicker onChange={this.changTime} />
            </Col>
            <Col span={2}>
              <Button type="primary" icon="search" loading={this.state.loading} onClick={this.search}>
                搜索
              </Button>
            </Col>
          </Row>
          <Table columns={this.state.tabColumns} dataSource={this.state.tabData} pagination={this.state.pagination} />
        </div>
      </Layout>
    )
  }
}
export default withRouter(connect((state) => ({
  initData: state.initData
}))(Home))