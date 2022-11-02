import React from "react";
import logo from '../../assets/logo-dio.png';
import {useNavigate} from 'react-router-dom';
import { Button } from "../Button";
import { BuscarInputContainer,
      Container,
      Input,
      Menu,
      MenuRight,
      Row,
      UserPicture,
      Wrapper } from './styles';

const Header = ({autenticado})=>{
        const navigate = useNavigate();
    
        const handleClickSignIn = () =>{
            navigate("/#")
        }
    return(
        <Wrapper>
            <Container>
            <Row>
                    <img onClick={handleClickSignIn} src={logo} alt="Logo dio"/>
                    {autenticado ? (
                         <>
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..."></Input>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                    </>
                    ) : null}
                </Row>
                <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/94152639?v=4'/>
                     ) : (     <>
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Entrar"/>
                    <Button title="Cadastrar"/>
                    </>
                )}
                </Row>
            </Container>
        </Wrapper>
        
    )
}
export {Header}