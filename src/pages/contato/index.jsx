import './index.css';
import { useState } from 'react';


export default function Contato() {

const[titulo2,setEscrita2] = useState("")
const[titulo3,setEscrita3] = useState("")
const [cor,setCor] = useState("")
const [check , setcheck] = useState (false)


function useisso(e){
  setEscrita2(e.target.value);
}

function useaquilo(){
  setEscrita3(titulo2)
}

function useisso(e){
  setEscrita2(e.target.value);
}

function mudarCheck(e){
  setcheck(e.target.value);
}

  return (

    
    <div className="Ctt" style={{backgroundColor:cor}}>
      <h1 className='ola'>Insira o que quiser:</h1>
      <div className='uai'>
      <header>
     <input type="text" onChange={useisso}/>
      <p>{titulo3}</p>
      <button onClick={useaquilo}> Clique para mudar </button>
</header> 

<section className='aa'>
<input type="color" onChange={(e) => setCor(e.target.value)} />

<p> Escolha sua cor desejada acima {cor}</p>
<div className='aqui' style={{backgroundColor: cor }}>
</div>

<section className='a'>
<p>Você gosta de programar? {check ? "Não" :"Sim"} <br /></p>
<input type="checkbox" onChange={mudarCheck}/> 
</section>
</section>
</div>
    </div>
  );
}

