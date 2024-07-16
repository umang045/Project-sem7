import React, { useState } from "react";
import { useNavigate, Outlet, Link, Navigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;



const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  
  const navigate = useNavigate();
  return (
    <Layout className="position-relative overflow-y-auto">
      <Sider  className="position-relative sidebar fixed-top"trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h6 className="text-white  text-center py-3 mb-0">
            <span className="sm-logo">Admin</span>
            <br />
            {/* <span className="lg-logo">E-Comm</span> */}
          </h6>
        </div>
        <Menu className="position-static"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <UserOutlined />,
              label: "Dashbord",
            },
            {
              key: "form",
              icon: <VideoCameraOutlined />,
              label: "form",
            },
            {
              key: "other",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
