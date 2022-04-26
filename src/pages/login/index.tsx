import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { login } from '../../redux/apiCalls';

import ReactLoading from 'react-loading';

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  Error,
  Link,
} from '../../styles/LoginStyles';

import { useRouter } from 'next/router';


export default function Login() {

  const router = useRouter();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { currentUser, isFetching, error } = useSelector((state: RootState) => state.user)

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(dispatch, { username, password });

    if (currentUser._id !== '') {
      router.push("/");
    }
  }

  useEffect(() => {
    if (currentUser._id !== '') {
      router.push("/");
    }
  }, [currentUser._id]);

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form className="form" onSubmit={(event) => handleLogin(event)}>
          <Input type="text" placeholder="Username" onChange={(event) => setUserName(event.target.value)} />
          <Input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
          <Button type="submit"
          >
            {isFetching ? <ReactLoading type="spokes" height="16px" width="16px" color="#fff" /> : 'LOGIN'}
          </Button>

          {error && <Error>Wrong credentials!</Error>}

          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container >
  );
}