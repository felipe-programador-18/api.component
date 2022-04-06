
import './App.css';

const Title = ({children}) =>{
 //  return JSON.stringify(props)
  if(!children){
    return <h1> sem titulo</h1>
  } 
  return <h1> {children} </h1>
}

function App() {
  return (
    <div className="App">
     <Title>legal</Title>
      <Title />

    </div>
  );
}

export default App;
