import { useState } from 'react';
import { Form, FormGroup, Row, Col, Label, Input, Button, Card, Alert } from 'reactstrap';
import axios from 'axios';
import { useNavigate  } from "react-router-dom";

function Cadastrar() {

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [sexo, setSexo] = useState("");

  const [alert, setAlert] = useState(false);

  const history = useNavigate();

  function AddPost(){

    setAlert(false);

    if(nome!="" && cpf!="" && email!="" && telefone!="" && sexo!=""){

      var data = {nome, cpf, email, telefone, sexo} 

      axios.post("http://localhost:3030/", data)
      .then(() => {
        console.log("SUCESS")
        history("/listar");
      })
      .catch(() =>{
        console.log("FAILED")
      })

    }else{
      setAlert(true);
    }
   
  }

  return (

    <div>

      { alert &&
        <Alert color="danger">
          Preencha todos os campos
        </Alert>
      }
      
      <div style={{textAlign: 'center', marginTop: 50}}>
        <h1>Cadastro de Aluno</h1>
      </div>
      

      <div style={{  display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>

        <Card
          style={{
            width: '50%',
            height: '57%'
          }}
        >

          <Form
            style={{
              alignSelf: 'center',
              padding: 15
            }}
          >
            <Row>

              <Col md={6}>
                <FormGroup>
                  <Label for="nome" style={{fontWeight: "bold"}} >
                    Nome
                  </Label>
                  <Input
                    id="nome"
                    name="name"
                    placeholder="Digite o nome do aluno"
                    type="text"
                    value={nome}
                    onChange={event => setNome(event.target.value)}
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for="cpf" style={{fontWeight: "bold"}}>
                    CPF
                  </Label>
                  <Input
                    id="cpf"
                    name="cpf"
                    placeholder="00.000.000/0000-00"
                    type="text"
                    value={cpf}
                    onChange={event => setCpf(event.target.value)}
                  />
                </FormGroup>
              </Col>

            </Row>

            <Row>

              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail" style={{fontWeight: "bold"}}>
                    Email
                  </Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Digite um e-mail"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for="phone" style={{fontWeight: "bold"}}>
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    name="telefone"
                    placeholder="Digite um telefone"
                    type="number"
                    value={telefone}
                    onChange={event => setTelefone(event.target.value)}
                  />
                </FormGroup>
              </Col>

            </Row>

            <Row>

              <Label for="sex" style={{fontWeight: "bold"}}>
                Sexo
              </Label>

              <Row>

                <Col md={3}>
                  <FormGroup check>
                    <Input
                      id="masculino"
                      name="customRadio" // para o type 'radio' só é necessário que o 'name' seja igual para que alternem, o checkbox que eu estava tinha o name diferente, era a única diferença do radio.
                      type="radio"
                      value={"masculino"}
                      onChange={event => setSexo(event.target.value)}
                    />
                    <Label
                      check
                      for="masculino"
                    >
                      Masculino
                    </Label>
                  </FormGroup>
                </Col>

                <Col md={3}>
                  <FormGroup check>
                    <Input
                      id="feminino"
                      name="customRadio"
                      type="radio"
                      value={"feminino"}
                      onChange={event => setSexo(event.target.value)}
                    />
                    <Label
                      check
                      for="feminino"
                    >
                      Feminino
                    </Label>
                  </FormGroup>

                </Col>
              </Row>


            </Row>
          </Form>

          <Button color="success" onClick={ () => AddPost()}>
            Cadastrar
          </Button>

        </Card>

      </div>

    </div>

  );

}

export default Cadastrar
