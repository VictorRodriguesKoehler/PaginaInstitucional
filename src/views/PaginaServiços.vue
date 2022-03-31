<template>
<v-container app class="serv">
  <h1>Direito Trabalhista</h1>
  <div class="intro">
  <v-img class="img" src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15768.jpg?t=st=1648665318~exp=1648665918~hmac=347976f7b4f182da2ab01dd97b09e6346c17e1346f106c8d3ff8ee1f1011a601&w=996"></v-img>
  <p>Possuímos profissionais qualificados para orientar e prestar assistência jurídica com excelência na busca da defesa dos direitos dos trabalhadores.<br> <br> trabalho é voltado pela busca de direitos sonegados, resgate da dignidade do trabalhador e reparação indenizatória por ofensas morais e violações sofridas durante a relação de trabalho. 
  </p>
  </div>
  <v-card class="card">
    <v-tabs
      v-model="tab"
      background-color="red lighten-2"
      dark
    >
      <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        <v-card flat>
          <v-card-text>{{ item.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</v-container>
</template>

<script>
export default {
    name: 'PaginaServiços',
    data () {
      return {
        tab: null,
        items: [
          { tab: 'DANOS MORAIS', content: 'A ação tem objetivo de cobrar judicialmente indenização pelo dano moral, situações onde há abuso, por parte do empregador, causando constrangimentos e ofensa à honra e dignidade do empregado. É possível ingressar com ação cobrando indenização por danos morais a fim de reparar os constrangimentos causados e estabelecer um caráter pedagógico a fim de evitar a ocorrência de ações de abuso no ambiente de trabalho.' },
          { tab: 'HORAS EXTRAS', content: 'O contrato de trabalho estabelece qual jornada de trabalho será cumprida, estabelecendo escala de dias e horários a serem cumpridos. O Limite máximo diário é de 8 horas trabalhadas, salvo em condições especiais. O período que exceder às 8 horas diárias deverá ser pago como hora extra. A não observância da empresa quanto ao pagamento das horas extras trabalhadas é passível de ação reclamatória trabalhista  reivindicando pagamento de horas extras.' },
          { tab: 'ADICIONAL DE INSALUBRIDADE E PERICULOSIDADE', content: 'O Adicional de insalubridade é pago aos trabalhadores que realizam atividades expostos a condições que prejudicam sua saúde. Este adicional é pago em percentuais de 10%, 20% e 40% dependendo do grau de exposição e o agente prejudicial à saúde. O contato com produtos químicos (produto de limpeza), acesso à câmara fria, limpeza de banheiros e etc., são exemplos de situações onde o trabalhador deverá receber o adicional de insalubridade. O Adicional de Periculosidade é pago pelo potencial perigo de morte imposto ao trabalhador quando este exercer atividade, como é o caso de eletricistas, policiais, metalúrgicos, bombeiros, químicos, motociclistas, vigilantes e frentistas de posto de gasolina. Nestes casos o adicional é de 30% sobre a remuneração do trabalhador.' },
          { tab: 'DIREITOS DA GESTANT', content: 'A estabilidade no período gestacional é um Direito assegurado a todas às gestantes, isso impede que a gestante seja dispensada sem justa causa do momento em que encontrar-se em estado gestante até o final da licença maternidade, que pode iniciar-se a partir do 8º mês de gestação e estender-se por período de 4 meses, podendo se estender a, no máximo, 6 meses. A licença maternidade pode emendar com as férias, se a empregada tiver férias vencidas. A gestante receberá seu salário integral durante o todo período de afastamento. A gestante tem direito a intervalo para amamentar o bebê até que ele complete 6 meses, este intervalo terá duração de 1 hora, podendo ser dividido em dois intervalos de 30 minutos.'},
          {tab: 'VÍNCULO DE EMPREGO', content:'O Vínculo de emprego pode existir mesmo que não exista um contrato de trabalho escrito e ainda que a Carteira de trabalha nunca tenha sido assinada. Para comprovar o vínculo de emprego é necessário que o empregado comprove que trabalhou de forma habitual, que era subordinado, que recebia pagamento e que não poderia ser substituído por outro trabalhador caso precisasse faltar ao serviço.'},
          {tab: 'EMPREGADO DOMÉSTICO', content:'O trabalhador doméstico tem direito a receber horas extras quando trabalhar em jornada superior a contratada, tem direito a intervalo mínimo de uma hora para alimentação, higiene e descanso, bem como tem direito a pelo menos um dia de descanso por semana (folga semanal) preferencialmente aos domingos. A não observação destas regras é passível de ação reclamatória trabalhista buscando a reparação do direito sonegado.'},
        ],
      }
    },
}
</script>

<style scoped>


.intro{
  display: flex;
  flex-direction: row;
  flex-flow: nowrap;
  margin-bottom: 20px;
  margin-top: 20px;
}

h1{
  text-align: center;
  }

.img{
  width: 40%;
  min-width: 300px;
  margin-right: 20px;
  margin-bottom: 20px;
}

@media screen and (max-width: 655px){
.intro{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
}
</style>