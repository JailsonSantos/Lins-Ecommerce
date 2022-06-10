import Link from 'next/link';
import toast from 'react-hot-toast';
import theme from '../../styles/theme';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

// Validation forms
import * as yup from 'yup'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { publicRequest } from '../../services/api';


// Icons do Material-UI
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  AreaLogin,
  Button,
} from '../../styles/RegisterStyles';
import ReactLoading from 'react-loading';

export default function Register() {

  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.user)

  const [loading, setLoading] = useState(false);
  const [username, setUserName] = useState('');
  const [occupation, setOccupation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!(await validate())) return;

    try {
      setLoading(true);
      const img = "https://img.freepik.com/vetores-gratis/homem-perfil-caricatura_18591-58482.jpg?w=2000";

      await publicRequest.post('/auth/register', {
        username,
        occupation,
        email,
        password,
        img
      });

      toast("Sucesso: Usuário cadastrado!", {
        style: {
          background: theme.green,
          color: theme.text,
        }
      });

      setUserName('');
      setOccupation('');
      setEmail('');
      setPassword('');
      setPasswordConfirmation('');

      setTimeout(() => {
        router.push("/login");
      }, 2000)


    } catch (error) {
      toast("Error: Tente novamente!", {
        style: {
          background: theme.error,
          color: theme.text,
        }
      });
    } finally {
      setLoading(false);
    }
  }

  async function validate() {
    const schema = yup.object().shape({
      passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
      password: yup.string().required('Senha obrigatória').min(8, 'Senha teve ter no mínimo 8 caracteres'),
      email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
      occupation: yup.string().required('Sua profissão é obrigatória'),
      username: yup.string().required('Nome de usuário é obrigatório'),
    });

    try {
      await schema.validate({ username, occupation, email, password, passwordConfirmation });
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

  useEffect(() => {
    if (currentUser._id !== '') {
      router.push("/");
    }
  }, [currentUser._id]);

  return (
    <Container>
      <Wrapper>
        <Title>Crie sua Conta</Title>
        <Form className="form" onSubmit={(event) => handleRegister(event)}>
          <Input
            type="text"
            name="username"
            value={username}
            placeholder="Seu nome de usuário"
            onChange={(event) => setUserName(event.target.value)}
          />
          <Input
            type="text"
            name="occupation"
            value={occupation}
            placeholder="Sua profissão"
            onChange={(event) => setOccupation(event.target.value)}
          />
          <Input
            type="mail"
            name="email"
            value={email}
            placeholder="Seu e-mail"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            name="password"
            type="password"
            value={password}
            placeholder="Sua senha"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Input
            type="password"
            name="passwordConfirm"
            value={passwordConfirmation}
            placeholder="Confirma senha"
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />
          <Agreement>
            Para criar sua conta, você concorda com os termos de:
            <Link href="#">
              <a>
                <b> Política de Privacidade</b>
              </a>
            </Link>

          </Agreement>
          <Button>
            {loading ? <ReactLoading type="spokes" height="16px" width="16px" color="#fff" /> : 'CRIAR'}
          </Button>

          <Link href="/login">
            <AreaLogin>
              <ArrowBackIcon />
              <Agreement>
                Eu já teho uma conta
              </Agreement>
            </AreaLogin>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
}