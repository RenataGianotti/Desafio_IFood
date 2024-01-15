class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      
      // Define o tipo de ataque com base no tipo do herói
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou um ataque genérico";
          break;
      }
  
      // Exibe a mensagem do ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso da classe
  const heroi1 = new Heroi("Aragorn", 30, "guerreiro");
  const heroi2 = new Heroi("Gandalf", 200, "mago");
  
  heroi1.atacar(); // Exibirá "O guerreiro atacou usando espada"
  heroi2.atacar(); // Exibirá "O mago atacou usando magia"
  