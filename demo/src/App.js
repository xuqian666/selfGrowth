import React from 'react';
import './App.css';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
// import LineMarkerEcharts from './PieScrollableLegend/index'

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>header</Header>
        <Layout>
          <Sider>left sidebar</Sider>
          <Content>main content</Content>
          <Sider>right sidebar</Sider>
        </Layout>
        <Footer>footer</Footer>
      </Layout>
      {/* <header className="App-header">
        <LineMarkerEcharts />
      </header>
      <Button type="primary">Button</Button> */}
    </div>
  );
}

export default App;
