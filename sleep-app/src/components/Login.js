import React from 'react';
import FacebookIcon from '../img/facebookIcon.png';
import GoogleIcon from '../img/googleIcon.png';
import { Form, Checkbox, Button } from 'semantic-ui-react';

function Login() {
  return (
    <div>
      <Form className="form">
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" type="email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" type="password" />
        </Form.Field>
        <Button type="submit">Log In</Button>
      </Form>
      <div className="alternate-signup">
        <img src={FacebookIcon} />
        <img src={GoogleIcon} />
      </div>
    </div>
  );
}

export default Login;
