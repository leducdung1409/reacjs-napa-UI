import { LogoutOutlined, ProjectOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Icon, Img } from "../../common/Icon";
import '../../pages/admin/dashboard/styles.scss';

function MenuDashBoard() {
  const [collapsed, setCollapsed] = useState(true);
  const onCollapse = () => {
    console.log(collapsed);
    setCollapsed(!collapsed)
  };

  return (
    <Sider theme="light" collapsed={collapsed} onMouseEnter={onCollapse} className="sider-above" >
      <div className="logo" >
        <Avatar size="large" src={Icon.MAIN_LOGO} />
        <div style={!collapsed ? { display: 'inline-block' } : { display: 'none' }} className="admin-home-logo-text">
          <span className="admin-home-title-logo">System Manager</span>
          <br />
          <span className="admin-home-title-description">チャットボット</span>
        </div>
      </div>
      <div className="admin-home-icon-bottom-menu">
        <Menu defaultSelectedKeys={['1']} mode="inline">
          <div></div>
          <Menu.Item   key="1" icon={<TeamOutlined className="admin-home-icon" />}>
          <Link to='/admin/home' />
            ユーザー
          </Menu.Item>
          <Menu.Item key="2" icon={<ProjectOutlined className="admin-home-icon" />}>
          <Link to='/admin/chatbot' />
            テナント
          </Menu.Item>
          <Menu.Item  href ='/admin/setting' key="3" icon={<UserOutlined className="admin-home-icon" />}>
          <Link to='/admin/setting' />
            プロフィール
          </Menu.Item>
        </Menu>
        <Menu defaultSelectedKeys={['2']} mode="inline">

          <Menu.Item key="4"   >
            <Avatar size="large" src={Img.IMG_AVT} className={collapsed ? 'avatar-username' : ''} />  Username
          </Menu.Item>
          <Menu.Item key="5" icon={<LogoutOutlined className="admin-home-icon" />} >
            ログアウト
          </Menu.Item>
        </Menu>
      </div>
    </Sider>

  );
}

export default MenuDashBoard;
