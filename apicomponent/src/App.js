import { useState } from 'react'
import './App.css'
import Header from './header'

const Title = ({children}) =>{
 //  return JSON.stringify(props)
  if(!children){
    return <h1> sem titulo</h1>
  } 
  return <h1> {children} </h1>
}


//thought about that, label don't did part about input, but need use him!!
const Input = ( {label, onChange, ...props}) => {
  const [value, setvalue] = useState('')
  const onValueChange = evt => {
     setvalue(evt.target.value)
     if(onChange){
       onChange(evt)
     } 
    
  }
  return (
    <label>
      {label}
     
      <input onChange={onValueChange} {...props}/>
      {value.length}  caracteres!!
    
    </label>
  )
}

const linkGatbsy = ({to, children}) => {
   return <a href={to}> {children} </a>
}


function App() {
 const [form, setform] = useState({
   nome: '',
   email:''
 })
 const onChange= evt =>{
   setform({
     ...form,
     [evt.target.name]: evt.target.value
   })
 }
 
  return (
    <div className="App">
     <Title>legal</Title>
     <pre>
      Form: {JSON.stringify(form)}
      </pre>
     <Input label='Nome' name='nome' onChange={onChange} style={{background:'red'}} />
     <Input label='Email' name='email'  onChange={onChange} />
      

      <Header Link={linkGatbsy} />
    </div>
  );
}

export default App;
