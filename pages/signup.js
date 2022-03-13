
import { Form, Input, Button } from "antd";
import Link from "next/link"

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup__container">
        <h2 className="signup__container__title">Sign Up</h2>
        <div className="signup__container__form">
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
                Sign Up
              </Button>
            </Form.Item>
            <div className="signup__container__link">
              <div>
                If u have account! &nbsp;
                <span>
                  <Link href="/login">
                    <a>Login</a>
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

export default Signup;
