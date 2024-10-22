import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const VendorLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate ()

  return (
    <div>
      <Layout>
        {/* Sider with responsive breakpoint */}
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="lg" // Collapse at large screens and below
          collapsedWidth="80" // Width when collapsed (can be adjusted)
          onBreakpoint={(broken) => {
            if (broken) setCollapsed(true); // Auto collapse on smaller screens
          }}
        >
          {/* Logo area */}
          <div className="h-10 w-full rounded my-2 bg-slate-300" />
          
          {/* Menu */}
          <Menu
          onClick={(item) => {
          navigate(item.key);
          }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "Dashbord",
                icon: <UserOutlined />,
                label: "Dashboard",
              },
              {
                key: "Post Ad",
                icon: <UserOutlined />,
                label: "Post Ad",
              },
              {
                key: "My Advert",
                icon: <VideoCameraOutlined />,
                label: "My Advert",
              },
              {
                key: "Analytics",
                icon: <UploadOutlined />,
                label: "Analytics",
              },
              {
                key: "Orders",
                icon: <UploadOutlined />,
                label: "Orders",
              },
              {
                key: "Settings",
                icon: <UploadOutlined />,
                label: "Settings",
              },
              {
                key: "Logout",
                icon: <UploadOutlined />,
                label: "Logout",
              },
            ]}
          />
        </Sider>

        <Layout>
          {/* Header */}
          <Header className="p-0 bg-white flex items-center justify-between">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="ml-4"
            />
          </Header>

          {/* Content */}
          <Content className="m-4 sm:m-6 md:m-8 lg:m-10 p-6 sm:p-8 md:p-16 lg:p-24 min-h-72 bg-white border rounded">
            Page Content
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default VendorLayout;