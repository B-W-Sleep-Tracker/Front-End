import React from 'react';
import FacebookIcon from '../img/facebookIcon.png';
import GoogleIcon from '../img/googleIcon.png';
import { Form, Checkbox, Button } from 'semantic-ui-react';

function SignUp() {
  return (
    <div>
      <div className="message">
        <h1>Sign up so we can better track your sleep!</h1>
      </div>
      <Form className="form">
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" type="email" />
        </Form.Field>
        <Form.Field>
          <label>Confirm Email</label>
          <input placeholder="Confirm Email" type="email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" type="password" />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input placeholder="Confirm Password" type="password" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Sign Up</Button>
      </Form>
      <div className="alternate-signup">
        <img src={FacebookIcon} />
        <img src={GoogleIcon} />
      </div>
    </div>
  );
}

export default SignUp;
