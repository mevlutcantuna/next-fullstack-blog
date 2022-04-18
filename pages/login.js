import { useInput } from "../hooks/useInput";
import Link from "next/link";
import { useRouter } from "next/router";
import { login } from "../api/auth";
import { Form, Input, Button, message } from "antd";

const Login = () => {
  const [inputs, setInputs] = useInput({ email: "", password: "" });
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login(inputs);
      sessionStorage.setItem("token", JSON.stringify(data.token));
      return router.push("/");
    } catch (error) {
      return message.error(error.response.data.message);
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__container__title">Log In</h2>
        <div className="login__container__form">
          <Form
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onSubmitCapture={onSubmit}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                name="email"
                value={inputs.email}
                onChange={setInputs}
                placeholder="Email"
                type="email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                name="password"
                value={inputs.password}
                onChange={setInputs}
                placeholder="Password"
                type="password"
              />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 16 }}>
              <Button onClick={onSubmit} type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
            <div className="login__container__link">
              <div>
                Dont u have a account? &nbsp;
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
