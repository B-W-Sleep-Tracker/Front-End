import React, {useState} from 'react';
import './Login.css';
import styled from 'styled-components';
import FacebookIcon from '../img/facebookIcon.png';
import GoogleIcon from '../img/googleIcon.png';
import { Form } from 'semantic-ui-react';
import Header from './Header';
import axiosWithAuth from "../utils/axioswithAuth";

const Title = styled.h1`
  width: 100%;
  height: 28px;
  font-family: Roboto;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  margin: 0;
  text-align: center;
`;

const TitleContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 137px;
`;

const FormStyle = styled.div`
  width: 294px;
  height: 331px;
  opacity: 0.8;
  border-radius: 10px;
  background-color: #c4c4c4;
  margin: 0 auto;
`;

const LabelStyle = styled.label`
  width: 118px;
  font-family: Roboto;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  display: flex;
`;

const InputStyle = styled.input`
  width: 240.7px;
  height: 30.1px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`;

const FieldStyle = styled.div`
  &:first-child {
    padding-top: 17px;
  }
  padding-left: 17px;
`;

const ButtonStyle = styled.button`
  width: 134px;
  height: 31px;
  border-radius: 20px;
  background-color: #2f80ed;
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f2f2f2;
  margin-top: 10px;
  margin-left: 134px;
  border: none;
  box-shadow: 1px 4px 8px 1px #888888;
`;

const AlternateLoginStyle = styled.div`
  display: flex;
  width: 200px;
  margin: 0 auto;
  justify-content: space-around;
  margin-top: 43px;
`;

// function SignUp() {
//   return (
//     <div>
//       <Header />
//       <TitleContainer>
//         <Title>Welcome to Opti-Sleep</Title>
//       </TitleContainer>
//       <FormStyle>
//         <Form className="form">
//           <FieldStyle>
//             <Form.Field>
//               <LabelStyle>Email</LabelStyle>
//               <InputStyle placeholder="Email" type="email" />
//             </Form.Field>
//           </FieldStyle>
//           <FieldStyle>
//             <Form.Field>
//               <LabelStyle>Password</LabelStyle>
//               <InputStyle placeholder="Password" type="password" />
//             </Form.Field>
//           </FieldStyle>
//           <FieldStyle>
//             <Form.Field>
//               <LabelStyle>Age</LabelStyle>
//               <InputStyle
//                 placeholder="Age"
//                 type="number"
//                 style={{ width: 80 }}
//               />
//             </Form.Field>
//           </FieldStyle>

//           <ButtonStyle type="submit">Sign In</ButtonStyle>
//         </Form>
//       </FormStyle>

//       <AlternateLoginStyle>
//         <img src={FacebookIcon} alt="Facebook Logo" />
//         <img src={GoogleIcon} alt="Google Logo" />
//       </AlternateLoginStyle>
//     </div>
//   );
// }

// export default SignUp;



const SignUp = props => {

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    birthdate: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const register = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/register", credentials)
      .then(res => {
        // props.history.push("/login");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="signup-div">
      <section className="form">
      <h1 className="sign-up-header">Sign up</h1>  
      <form className="form-signup" onSubmit={register}>
      <h1 className="form-title">Username:</h1>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <h1 className="form-title">Password:</h1>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <h1 className="form-title">Birthday:</h1>
        <input
          type="text"
          name="birthdate"
          value={credentials.birthdate}
          onChange={handleChange}
        />
        <button className="signup-button">Sign Up</button>
      </form>
      </section>
    </div>
  );
};

export default SignUp;