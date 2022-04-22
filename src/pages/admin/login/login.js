import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  Button, Checkbox, Form, Input
} from 'antd';
import 'antd/dist/antd.css';
import { Icon } from "../../../common/Icon.js";
import './styles.scss';

function login() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className="admin-login-container">
      <div className="admin-login-logo">
      <img src={Icon.MAIN_LOGO} alt ='' />
      <span className="admin-login-logo-title">ChatBot</span>
      </div>

      <div className="admin-login-form">
        <span className="admin-login-title">ログイン</span>
        <div className="admin-login-press">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <p className="admin-login-text-input" >ユーザー名</p>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="ユーザー名を入力してください。" />
            </Form.Item>
            <p className="admin-login-text-input" >パスワード</p>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="パースワードを入力してください。"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>パースワードを保存</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                パスワードをお忘れですか？
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button admin-login-form-button">
                サインイン
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default login;
