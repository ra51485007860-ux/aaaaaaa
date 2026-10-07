import './index.css';
import { useState } from 'react';


export default function Contato() {

const[titulo2,setEscrita2] = useState("")
const[titulo3,setEscrita3] = useState("")
const [cor,setCor] = useState("")

/////calcuuuuuuuuuu

const [numero1, setNumero1] = useState("")
const [numero2, setNumero2] = useState("")
const [resp, setResp] = useState("")


function useisso(e){
  setEscrita2(e.target.value);
}

function useaquilo(){
  setEscrita3(titulo2)
}

function useisso(e){
  setEscrita2(e.target.value);
}


////  calccccccccccccccccc


 function somar() {
    let soma = Number(numero1) + Number(numero2)
    setResp(soma)
}

 function subtrair() {
        let subtracao = Number(numero1) - Number(numero2)
        setResp(subtracao)
    }

      function multiplicar() {
        let multiplicacao = Number(numero1) * Number(numero2)
        setResp(multiplicacao)
    }


    function dividir() {
        let divisao = Number(numero1) / Number(numero2)
        setResp(divisao)
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

    <div>
<h2>Calculadora</h2>
<input type="text" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
<input type="text" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
<div>=</div>
<div>{resp}</div>

<button onClick={somar}>Somar</button>

<button onClick={subtrair}>Subtrair</button>

<button onClick={multiplicar}>Multiplicar</button>

 <button onClick={dividir}>Dividir</button>
</div>

</section>

</div>
    </div>

  );
}

