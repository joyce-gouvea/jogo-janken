var app = new Vue({
  el: '#app',
  data: {
    titulo: "Jogo - janken",
    nomeUsuario: "",
    mensagemResultado: "",
    imagemPedra: "imgs/pedra-icone.png",
    imagemTesoura: "imgs/tesoura-icone.png",
    imagemPapel: "imgs/papel-icone.png",
    imgUsuario: "",
    imgMaquina: "",
    mostrarImagemUsuarioPedra: false,
    mostrarImagemUsuarioTesoura: false,
    mostrarImagemUsuarioPapel: false,
    mostrarImagemMaquinaPedra: false,
    mostrarImagemMaquinaTesoura: false,
    mostrarImagemMaquinaPapel: false,
    resultadoJogo: "",
    textoSimboloUsuario: "Você tirou o símbolo:",
    textoSimboloMaquina: "A máquina tirou o símbolo:",
    mostrarQuadro: false,
  },
  methods:{
    /* 0 = pedra
       1 = tesoura
       2 = papel
    */

    gerarValorAleatorioUsuario: function(){
      this.imgUsuario = parseInt(Math.random()*3);
    },

    gerarValorAleatorioMaquina: function(){
      this.imgMaquina = parseInt(Math.random()*3);
    },

    compararValores: function(){
      this.gerarValorAleatorioUsuario();
      this.gerarValorAleatorioMaquina();
      
      if(this.imgUsuario == 0 && this.imgMaquina == 0){
        this.empatePedra();
      } 

      if(this.imgUsuario == 1 && this.imgMaquina == 1){
        this.empateTesoura();
      }
      
      if(this.imgUsuario == 2 && this.imgMaquina == 2){
        this.empatePapel();
      }

      if(this.imgUsuario == 0 && this.imgMaquina == 1){
        this.vitoriaUsuarioPedra();
      }

      if(this.imgUsuario == 1 && this.imgMaquina == 2){
        this.vitoriaUsuarioTesoura();
      }

      if(this.imgUsuario == 2 && this.imgMaquina == 0){
        this.vitoriaUsuarioPapel();
      }

      if(this.imgMaquina == 0 && this.imgUsuario == 1){
        this.vitoriaMaquinaPedra();
      }

      if(this.imgMaquina == 1 && this.imgUsuario == 2){
        this.vitoriaMaquinaTesoura();
      }

      if(this.imgMaquina == 2 && this.imgUsuario == 0){
        this.vitoriaMaquinaPapel();
      }
  
    },

    exibirQuadro: function(){
      this.mostrarQuadro = true;
    },

    vitoriaUsuarioPedra: function(){
      this.ocultarImagemUsuario();
      this.ocultarImagemMaquina();
      this.mostrarImagemUsuarioPedra = true;
      this.mostrarImagemMaquinaTesoura = true;
      this.mensagemResultadoVitoriaUsuario();
      this.exibirQuadro();
    },

    vitoriaUsuarioTesoura: function(){
      this.ocultarImagemUsuario();
      this.ocultarImagemMaquina();
      this.mostrarImagemUsuarioTesoura = true;
      this.mostrarImagemMaquinaPapel = true;
      this.mensagemResultadoVitoriaUsuario();
      this.exibirQuadro();
    },

    vitoriaUsuarioPapel: function(){
      this.ocultarImagemUsuario();
      this.ocultarImagemMaquina();
      this.mostrarImagemUsuarioPapel = true;
      this.mostrarImagemMaquinaPedra = true;
      this.mensagemResultadoVitoriaUsuario();
      this.exibirQuadro();
    },

    mensagemResultadoVitoriaUsuario: function(){
      this.resultadoJogo = true;
      this.mensagemResultado = this.nomeUsuario + ", você ganhou!";

    },

    vitoriaMaquinaPedra: function(){
      this.ocultarImagemUsuario();
      this.ocultarImagemMaquina();
      this.mostrarImagemMaquinaPedra = true;
      this.mostrarImagemUsuarioTesoura = true;
      this.mensagemResultadoVitoriaMaquina();
      this.exibirQuadro();
      
    },

    vitoriaMaquinaTesoura: function(){
      this.ocultarImagemUsuario();
      this.ocultarImagemMaquina();
      this.mostrarImagemMaquinaTesoura = true;
      this.mostrarImagemUsuarioPapel = true;
      this.mensagemResultadoVitoriaMaquina();
      this.exibirQuadro();
    },

    vitoriaMaquinaPapel: function(){
      this.ocultarImagemUsuario();
      this.ocultarImagemMaquina();
      this.mostrarImagemMaquinaPapel = true;
      this.mostrarImagemUsuarioPedra = true;
      this.mensagemResultadoVitoriaMaquina();
      this.exibirQuadro();
    },

    mensagemResultadoVitoriaMaquina: function(){
      this.resultadoJogo = true;
      this.mensagemResultado = this.nomeUsuario + ", a máquina ganhou!";

    },

    empatePedra: function(){
      this.ocultarImagemUsuario();
      this.ocultarImagemMaquina();
      this.mostrarImagemUsuarioPedra = true;
      this.mostrarImagemMaquinaPedra = true;
      this.mensagemResultadoEmpate();
      this.exibirQuadro();
    },

    empateTesoura: function(){
      this.ocultarImagemUsuario();
      this.ocultarImagemMaquina();
      this.mostrarImagemUsuarioTesoura = true;
      this.mostrarImagemMaquinaTesoura = true;
      this.mensagemResultadoEmpate();
      this.exibirQuadro();
    },

    empatePapel: function(){
      this.ocultarImagemUsuario();
      this.ocultarImagemMaquina();
      this.mostrarImagemUsuarioPapel = true;
      this.mostrarImagemMaquinaPapel = true;
      this.mensagemResultadoEmpate();
      this.exibirQuadro();
    },

    mensagemResultadoEmpate: function(){
      this.resultadoJogo = true;
      this.mensagemResultado = this.nomeUsuario + ", vocês empataram!";
    },

    ocultarImagemUsuario: function(){
      if(this.mostrarImagemUsuarioPedra == true || 
        this.mostrarImagemUsuarioTesoura == true || 
        this.mostrarImagemUsuarioPapel == true)
      {
        this.mostrarImagemUsuarioPedra = false;
        this.mostrarImagemUsuarioTesoura = false;
        this.mostrarImagemUsuarioPapel = false;
      }
    },

    ocultarImagemMaquina: function(){

      if(this.mostrarImagemMaquinaPedra == true || 
        this.mostrarImagemMaquinaTesoura == true || 
        this.mostrarImagemMaquinaPapel == true)
      {
        this.mostrarImagemMaquinaPedra = false;
        this.mostrarImagemMaquinaTesoura = false;
        this.mostrarImagemMaquinaPapel = false;
      }
    },
    
  },

  mounted: function () {
		
	},

  template :
  `
  <div class="principal">

    <h1 class="titulo">{{ titulo }}</h1>

    <div class="quadrado-default quadradoTopo-detalhes">
      <label for="user-Name" class="txt-default txt-topoDetalhe">Digite seu nome:</label>
      <input type="text" id="user-Name" v-model="nomeUsuario">
    </div>

    <div>
      <button @click="compararValores()" class="botao-default">Jogar</button>
    </div>

    <div class="container">

      <div class="quadrado-default quadrado-simboloDetalhes" v-if="mostrarQuadro == true">
        <p class="txt-default">{{ textoSimboloUsuario }}</p>

        <img :src="imagemPedra" alt="" class="img-Jogo" v-if="mostrarImagemUsuarioPedra == true">
        <img :src="imagemTesoura" alt="" class="img-Jogo" v-if="mostrarImagemUsuarioTesoura == true">
        <img :src="imagemPapel" alt="" class="img-Jogo" v-if="mostrarImagemUsuarioPapel == true">
        
      </div>

      <div class="quadrado-default quadrado-simboloDetalhes" v-if="mostrarQuadro == true">
        <p class="txt-default">{{ textoSimboloMaquina }}</p>

        <img :src="imagemPedra" alt="" class="img-Jogo" v-if="mostrarImagemMaquinaPedra == true">
        <img :src="imagemTesoura" alt="" class="img-Jogo" v-if="mostrarImagemMaquinaTesoura == true">
        <img :src="imagemPapel" alt="" class="img-Jogo" v-if="mostrarImagemMaquinaPapel == true">
        
      </div>

    </div>

    <p class="resultadoJogo" v-if="resultadoJogo == true">{{ mensagemResultado }}</p>

  </div>

  `
});