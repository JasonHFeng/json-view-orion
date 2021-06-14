import React, { FC } from 'react'
import { Layout, Tabs } from 'antd'
import JsonInput from '../../views/JsonInput/JsonInputIndex'
import Tree from '../../views/Tree/Tree'
import Chart from '../../views/Chart/Chart'
import './TheLayout.styl'

const { Content } = Layout
const { TabPane } = Tabs

const TheLayout: FC = () => {
  return (
    <Layout className="the-layout">
      <Content className="the-layout-content">
        <Tabs className="the-layout-tabs" tabPosition="left">
          <TabPane tab="JSON input" key="1">
            <JsonInput />
          </TabPane>
          <TabPane tab="Tree" key="2">
            <Tree />
          </TabPane>
          <TabPane tab="Chart" key="3">
            <Chart />
          </TabPane>
        </Tabs>
      </Content>
    </Layout>
  )
}

export default TheLayout
