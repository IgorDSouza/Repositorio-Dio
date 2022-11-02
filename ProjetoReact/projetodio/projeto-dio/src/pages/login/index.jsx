
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

const Login = () =>{
    const navigate = useNavigate();

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
                <form>
                    <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
                    <Input placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                    <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="button"/>
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