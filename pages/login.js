import { Form, Input, Button } from "antd";
import Link from "next/link";

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__container__title">Log In</h2>
        <div className="login__container__form">
          <Form
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email" type="email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 16 }}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
            <div className="login__container__link">
              <div>
                Dont u have a account?
                &nbsp;
                <span>
                  <Link href="/signup">
                    <a>Sign Up</a>
                  </Link>
                </span>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
