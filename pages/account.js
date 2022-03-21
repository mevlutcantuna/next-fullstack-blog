import { Layout } from "../components";
import { Profile } from "../components";

import { Tabs } from "antd";

const { TabPane } = Tabs;

const Account = () => {
  return (
    <Layout>
      <div className="account">
        <div className="account__container">
          <h1>Account</h1>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Profile" key="1">
              <Profile />
            </TabPane>
            <TabPane tab="My Posts" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="My Commented Posts" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
