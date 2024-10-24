// First, create separate component files for each menu item
// Dashboard.js
const Dashboard = () => {
  return <div>Dashboard Content</div>;
};

// PostAd.js
const PostAd = () => {
  return <div>Post Ad Content</div>;
};

// MyAdvert.js
const MyAdvert = () => {
  return <div>My Advertisements</div>;
};

// Analytics.js
const Analytics = () => {
  return <div>Analytics Content</div>;
};

// Orders.js
const Orders = () => {
  return <div>Orders Content</div>;
};

// Settings.js
const Settings = () => {
  return <div>Settings Content</div>;
};

// VendorLayout.js
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const { Header, Sider, Content } = Layout;

const VendorLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: "/dashboard",
      icon: <UserOutlined />,
      label: "Dashboard",
    },
    {
      key: "/post-ad",
      icon: <UserOutlined />,
      label: "Post Ad",
    },
    {
      key: "/my-advert",
      icon: <VideoCameraOutlined />,
      label: "My Advert",
    },
    {
      key: "/analytics",
      icon: <UploadOutlined />,
      label: "Analytics",
    },
    {
      key: "/orders",
      icon: <UploadOutlined />,
      label: "Orders",
    },
    {
      key: "/settings",
      icon: <UploadOutlined />,
      label: "Settings",
    },
    {
      key: "/logout",
      icon: <UploadOutlined />,
      label: "Logout",
    },
  ];

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
  };

  const handleMenuClick = (item) => {
    if (item.key === "/logout") {
      handleLogout();
    } else {
      navigate(item.key);
    }
  };

  return (
    <div>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="lg"
          collapsedWidth="80"
          onBreakpoint={(broken) => {
            if (broken) setCollapsed(true);
          }}
        >
          <div className="h-10 w-full rounded my-2 bg-slate-300" />
          
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[location.pathname]}
            onClick={handleMenuClick}
            items={menuItems}
          />
        </Sider>

        <Layout>
          <Header className="p-0 bg-white flex items-center justify-between">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              className="ml-4"
            />
          </Header>

          <Content className="m-4 sm:m-6 md:m-8 lg:m-10 p-6 sm:p-8 md:p-16 lg:p-24 min-h-72 bg-white border rounded">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/post-ad" element={<PostAd />} />
              <Route path="/my-advert" element={<MyAdvert />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
      <div >
        <button>
          <AlertCircle/> Fail
        </button>
      </div>
    </div>
  );
};

export default VendorLayout;