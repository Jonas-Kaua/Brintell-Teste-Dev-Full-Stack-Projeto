import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

function Listar(){
    
    const [lista, setLista] = useState<Array<any>>([]);

    function GetLista(){

        axios.get("http://localhost:3030/")
        .then((param) => {
           setLista(param.data);
        })
        .catch((error) =>{
            console.log("FAILED" + error);
        })

    }

    useEffect(()=>{
        GetLista();
    }, []);

    return(
        
        <div>

            <div style={{textAlign: 'center', marginTop: 50}}>
                <h1>Lista de Alunos</h1>
            </div>

            <div style={{ width: '80%', margin: 'auto',  marginTop: 50, backgroundColor: 'black', borderRadius: '20px'}}>
                <Table dark >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Sexo</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lista && lista.map((item, index)=>(
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{item.nome}</td>
                                <td>{item.cpf}</td>
                                <td>{item.sexo}</td>
                                <td>{item.email}</td>
                                <td>{item.telefone}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>

    );

}

export default Listar