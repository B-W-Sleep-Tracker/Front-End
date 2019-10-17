import React from 'react';
import {Form, Checkbox, Button } from "semantic-ui-react";

function Login (){
    return(
            <div>
                <Form className="form">
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='Email' type='email'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' type='password'/>
                    </Form.Field>
                    <Button type='submit'>Sign Up</Button>
                </Form>
            </div>
    );        
}

export default Login;