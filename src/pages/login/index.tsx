import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { login } from '../../redux/apiCalls';

import ReactLoading from 'react-loading';
import toast from 'react-hot-toast';

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Button,
  SpanUser,
  LinkUser,
  TextUser,
  AreaUser,
  IconGoogle,
  ButtonGoogle,

} from '../../styles/LoginStyles';


import googleIcon from '../../assets/google.svg';

import { useRouter } from 'next/router';

// Validation forms
import * as yup from 'yup'
import theme from '../../styles/theme';

// Icons do Material-UI
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import EmailIcon from '@material-ui/icons/Email';
import Link from 'next/link';

export default function Login() {

  const router = useRouter();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { currentUser, isFetching, error } = useSelector((state: RootState) => state.user)

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!(await validate())) return;

    try {
      await login(dispatch, { username, password });

      if (currentUser._id !== '') {
        router.push("/");
      }
    } catch (error) {
      toast("Error: Username ou senha inválidos ", {
        style: {
          background: theme.error,
          color: theme.text,
        }
      });
    }
  }

  useEffect(() => {
    if (currentUser._id !== '') {
      router.push("/");
    }
  }, [currentUser._id]);


  async function validate() {
    const schema = yup.object().shape({
      password: yup.string().required('Senha é obrigatória').min(3, 'Senha teve ter no mínimo 3 caracteres'),
      username: yup.string().required('Nome de usuário é obrigatório'),
    });

    try {
      await schema.validate({ username, password });
      return true;
    } catch (error: any) {
      toast("Error: " + error.errors, {
        style: {
          background: theme.error,
          color: theme.text,
        }
      });
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>FAÇA SEU LOGIN</Title>
        <Form className="form" onSubmit={(event) => handleLogin(event)}>
          <Input name="username" type="text" placeholder="Digite seu Username" onChange={(event) => setUserName(event.target.value)} />
          <Input name="password" type="password" placeholder="Digite sua senha" onChange={(event) => setPassword(event.target.value)} />
          <Button type="submit"
          >
            {isFetching ? <ReactLoading type="spokes" height="16px" width="16px" color="#fff" /> : 'ENTRAR'}
          </Button>

          <AreaUser>
            <SpanUser>
              <Link href="/register">
                <a>
                  <PersonAddIcon />
                  <TextUser>Criar conta</TextUser>
                </a>
              </Link>
            </SpanUser>

            <SpanUser>
              <EmailIcon />
              <TextUser>Esqueci senha</TextUser>
            </SpanUser>
          </AreaUser>

          <ButtonGoogle >
            <IconGoogle
              src="/images/google.svg"
              alt="Logo da google, chamando a atenção para o botão de fazer login com a conta google"
            />
            Fazer login com o Google
          </ButtonGoogle>

        </Form>
      </Wrapper>
    </Container >
  );
}