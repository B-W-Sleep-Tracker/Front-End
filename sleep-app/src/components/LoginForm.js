import React, {useState}from 'react';
import './Login.css';
import styled from 'styled-components';
import FacebookIcon from '../img/facebookIcon.png';
import GoogleIcon from '../img/googleIcon.png';
import { Form } from 'semantic-ui-react';
// import LogoMobile from '../img/logoMobile.png';
import Header from './Header';
import axiosWithAuth  from '../utils/axioswithAuth';
import { Route, path, Link } from "react-router-dom";


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
  height: 282px;
  opacity: 0.8;
  border-radius: 10px;
  background-color: #c4c4c4;
  margin: 0 auto;
`;

const LabelStyle = styled.label`
  width: 118px;
  height: 17px;
  font-family: Roboto;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
`;

const InputStyle = styled.input`
  width: 240.7px;
  height: 30.1px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`;

const FieldStyle = styled.div`
  &:first-child {
    padding-top: 50px;
  }
  padding-left: 27px;
  padding-top: 11px;
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
  margin-top: 39px;
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



// function LoginForm() {
//   return (
//     <div>
//       <Header />
//       <TitleContainer>
//         <Title>Welcome to Opti-Sleep</Title>
//       </TitleContainer>

//       <FormStyle>
//         {/* <Form onSubmit={this.login} className="form"> */}
//         <Form className="form">
//           <FieldStyle>
//             <Form.Field>
//               <LabelStyle>Email</LabelStyle>
//               <InputStyle
//                 placeholder="Email"
//                 type="email"
//                 name="email"
//                 value={this.state.credentials.email}
//                 onChange={this.handleChange}
//               />
//             </Form.Field>
//           </FieldStyle>
//           <FieldStyle>
//             <Form.Field>
//               <LabelStyle>Password</LabelStyle>
//               <InputStyle
//                 placeholder="Password"
//                 type="password"
//                 name="password"
//                 value={this.state.credentials.password}
//                 onChange={this.handle}
//               />
//             </Form.Field>
//           </FieldStyle>

//           <ButtonStyle type="submit">Log In</ButtonStyle>
//         </Form>
//       </FormStyle>

//       <AlternateLoginStyle>
//         <img src={FacebookIcon} alt="Facebook Logo" />
//         <img src={GoogleIcon} alt="Google Logo" />
//       </AlternateLoginStyle>
//     </div>
//   );
// }




const LoginForm = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
      
    });
  };

  const login = e => {
    e.preventDefault();
    // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        // redirect to the apps main page?
        // props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };



  return (
    <div>
      <Header />
      <TitleContainer>
        <Title>Welcome to Opti-Sleep</Title>
      </TitleContainer>
      
      <FormStyle>  
        <Form onSubmit={login} className='form'>
          <FieldStyle>          Username:
          <InputStyle type="text" name="username" value={credentials.username} onChange={handleChange} />
          Password:
          <InputStyle type="password" name="password" value={credentials.password} onChange={handleChange} />
            <ButtonStyle>
              <Link to={`/`}>
                Log In
              </Link>
            </ButtonStyle>
          </FieldStyle>
        </Form>
      </FormStyle>
    </div>
  );
};

export default LoginForm;


