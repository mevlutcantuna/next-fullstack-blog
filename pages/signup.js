import { useInput } from "../hooks/useInput";
import Link from "next/link";
import { useRouter } from "next/router";
import { signup } from "../api/auth";
import { errorMessage } from "../utils/notifications";
import { Form, Input, Button, message } from "antd";

const Signup = () => {
  const router = useRouter();
  const [inputs, setInputs] = useInput({
    fullname: "",
    email: "",
    password: "",
  });

  const onSubmit = async () => {
    try {
      const response = await signup(inputs);
      router.push("/login");
      return message.success("You signed up.");
    } catch (error) {
      return errorMessage(error["response"].data.message);
    }
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <h2 className="signup__container__title">Sign Up</h2>
        <div className="signup__container__form">
          <Form
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onSubmit={onSubmit}
          >
            <Form.Item
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
            >
              <Input
                placeholder="Full Name"
                type="text"
                name="fullname"
                value={inputs.name}
                onChange={setInputs}
              />
            </Form.Item>

            <Form.Item
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                placeholder="Email"
                type="email"
                name="email"
                value={inputs.name}
                onChange={setInputs}
              />
            </Form.Item>

            <Form.Item
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                name="password"
                placeholder="Password"
                value={inputs.name}
                onChange={setInputs}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 16 }}>
              <Button onClick={onSubmit} type="primary" htmlType="submit">
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
