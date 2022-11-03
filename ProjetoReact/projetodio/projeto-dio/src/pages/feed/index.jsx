import {Card} from "../../components/Card";
import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";
import {Container,Column,TitleHighlight} from "./styles";


const Feed = () =>{
    return(<>
    
    <Header autenticado={true}/>
    <Container>
        <Column flex={3}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Column>
        <Column flex={1}>
             <TitleHighlight>
                TOP RANKING 5 DA SEMANA
             </TitleHighlight>
        
        <UserInfo percentual={80}  nome="Igor de Souza" image="https://avatars.githubusercontent.com/u/94152639?v=4" />
     
        
        <UserInfo percentual={10}  nome="Igor Rodrigues Souza" image="https://avatars.githubusercontent.com/u/94152639?v=4" />
     
        
        <UserInfo percentual={20}  nome="Souza Rodrigues" image="https://avatars.githubusercontent.com/u/94152639?v=4" />
     
        
        <UserInfo percentual={50}  nome="Igor Rodrigues" image="https://avatars.githubusercontent.com/u/94152639?v=4" />
     
        
        <UserInfo percentual={10}  nome="Souza Igor" image="https://avatars.githubusercontent.com/u/94152639?v=4" />

        </Column>

   
    </Container>
  
    
    </>)
}
export {Feed}