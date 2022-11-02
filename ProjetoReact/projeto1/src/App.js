import Button from "./components/Button";
// Criamos o componente Button e importamos ele para o nosso conteudo que irá para a index. A criação desse componente permite que ultizemos o mesmo diversas vezes e de forma diferente. Fica mais facil para manutenções pois precisamo apenas fazer mudanças no arquivo original do componente e não em todas as ssuas aparições no projeto.
 
function App() {
  return (
    <div className="App">
     <h1>Inicio React</h1>
     <Button title='Entrar'/> 
     <Button title='abrir'/>
     <Button title='fechar'/>

    </div>
  );
}

export default App;
