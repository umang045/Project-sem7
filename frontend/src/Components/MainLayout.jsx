import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { UserButton } from '../Pages/Login';

import { FaSchool } from "react-icons/fa";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { PiBuildingOffice } from "react-icons/pi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FcDepartment } from "react-icons/fc";
import { LiaClipboardListSolid } from "react-icons/lia";
import { Button, Layout, Menu, theme } from "antd";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar w">
        <h3>Anand Agricultural University</h3>
      </nav>
      <Layout className="position-relative overflow-y-auto">
        <Sider
          className="position-relative sidebar fixed-top"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="logo">
            <h6 className="text-white  text-center py-3 mb-0">
              <span className="sm-logo">Admin</span>
              <br />

            </h6>
          </div>
          <Menu
            className="position-static"
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
                key: "/kacheri",
                icon: <PiBuildingOffice />,
                label: "ક્ચેરી‌",
              },
              {
                key: "/kacherilist",
                icon: <HiOutlineOfficeBuilding />,
                label: "ક્ચેરી‌ ની વિગત",
              },
              {
                key: "vibhag",
                icon: <FcDepartment />,
                label: "વિભાગ‌",
              },
              {
                key: "vibhaglist",
                icon: <LiaClipboardListSolid />,
                label: <div
                  style={{
                    fontSize: "15px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    ":hover": {
                      color: "#007bff", 
                      transform: "scale(1.1)", 
                    },
                  }}
                >
                  વિભાગ‌ ની વિગત
                </div>,
              },
              {
                key: "form",
                icon: <FaSchool />,
                label: "વર્ગીકરણ",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header className="d-flex p-0 justify-content-between align-items-center bg-white">
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
            <h3>Property Register</h3>

            
            <UserButton showName appearance={{elements:{
                userButtonAvatarBox:{
                  width: '40px',
                  height: '40px',
                  marginRight:'70px',
                }
              }}} />
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
    </>
  );
};

export default MainLayout;
