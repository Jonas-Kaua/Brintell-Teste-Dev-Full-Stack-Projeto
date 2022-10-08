import React, { useEffect, useState } from "react";
import { Card } from 'reactstrap';
import { Chart } from "react-google-charts";
import axios from 'axios';

// export const data = [
//   ["Métrica", "Sexo"],
//   ["Masculino", 11],
//   ["Femino", 2],
// ];

export const options = {
  title: "Relação dos alunos cadastrados por sexo",
};

function Grafico() {

  const [chartData, setChartData] = useState<Array<any>>([]);

  function GetSexo(){

      axios.get("http://localhost:3030/" + "metrica")
      .then((param) =>{

        const data = [
          ["Métrica", "Sexo"],
          ["Masculino", param.data[0]],
          ["Feminino", param.data[1]],
        ];
        
        setChartData(data);

      })
      .catch((error) =>{
        console.log("FAILED" + error);
      })

  }

  useEffect(()=>{
    GetSexo();
  }, []);

  return (

    <div style={{  display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 80 }}>
      <Card 
        style={{
          width: '80%'
        }}
      >
        <Chart
            chartType="PieChart"
            data={chartData}
            options={options}
            width={"100%"}
            height={"400px"}
          />
      </Card>
    </div>

  );

}

export default Grafico
