import { Button, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link} from 'react-router-dom';

function Home() {

  return (

    <div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2%',marginBottom:'2%' }}>

        <Card
          style={{
            width: '15rem',
            backgroundColor: 'black',
            marginRight: '5%'
          }}
        >
          <img
            alt="Sample"
            src="/aluno.png"
          />
          <CardBody>
            <CardTitle tag="h5" className="mb-2 text-white">
              Cadastro de Alunos
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Formulário para o cadastro de alunos
            </CardSubtitle>

            <Link to='/cadastrar'>
              <Button color='primary'>
                Cadastrar
              </Button>
            </Link>
            
          </CardBody>
        </Card>

        <Card
          style={{
            width: '15rem',
            backgroundColor: 'black'
          }}
        >
          <img
            alt="Sample"
            src="/tabela.jpg"
          />
          <CardBody>
            <CardTitle tag="h5" className="mb-2 text-white">
              Listagem de Alunos
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Tabela para listagem de alunos
            </CardSubtitle>

            <Link to="/listar">
              <Button color='primary'>
                Listar
              </Button>
            </Link>
            
          </CardBody>
        </Card>

      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom:'2%' }}>

        <Card
          style={{
            width: '15rem',
            backgroundColor: 'black',
            marginRight: '5%'
          }}
        >
          <img
            alt="Sample"
            src="/grafico-pizza.png"
          />
          <CardBody>
            <CardTitle tag="h5" className="mb-2 text-white">
              Métrica de alunos
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Dashboard da relação de alunos
            </CardSubtitle>

            <Link to="/grafico">
              <Button color='primary'>
                Consultar
              </Button>
            </Link>
            
          </CardBody>
        </Card>

        <Card
          style={{
            width: '15rem',
            backgroundColor: 'black'
          }}
        >
          <img
            alt="Sample"
            src="/mapa.jpg"
          />
          <CardBody>
            <CardTitle tag="h5" className="mb-2 text-white">
              Mapa
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Mapa de pontos com eventos de clique
            </CardSubtitle>

            <Link to="/mapa">
              <Button color='primary'>
                Mapear
              </Button>
            </Link>

          </CardBody>
        </Card>

      </div>
      
    </div>

  );

}

export default Home
