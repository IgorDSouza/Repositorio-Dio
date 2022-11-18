import {MdEmail, MdLock} from "react-icons/md";
import { Input } from "../../components/Input";
import React from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import {useNavigate} from 'react-router-dom';
import {
Container,
Title,
Column,
CriarText,
EsqueciText,
Row,
SubitleLogin,
TitleLogin,
Wrapper} from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email("email invalido").required('Campo obrigatorio'),
    password: yup.string().min(3,"no minimo 3 chars").required("Campo obrigatorio"),
  }).required();


const Login = () =>{
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver:yupResolver(schema),
        mode:'onChange',
    });

    console.log(isValid, errors)
    const onSubmit = data => console.log(data);


    const handleClickSignIn = () =>{
        navigate("/feed")
    }
    return(<>
    
    <Header/>
    <Container>
        <Column>
            <Title> 
                A plataforma para você aprender com experts,dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title> 
        </Column>
        <Column>
            <Wrapper>
                <TitleLogin>
                    Faça ser cadastro
                </TitleLogin>
                <SubitleLogin>
                    Faça seu login e make the change._
                </SubitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name ="email"
                      errorMessage = {errors?.email?.message} 
                    control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>

                    <Input name ="password" 
                    errorMessage = {errors?.password?.message} 
                    control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>

                    <Button title="Entrar" variant="secondary"  type="submit"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar conta</CriarText>
                </Row>
            </Wrapper>
        </Column>
    </Container>
  
    
    </>)
}
export {Login}