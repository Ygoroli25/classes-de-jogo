class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  mensagem() {
    let ataque = "";

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "ninja":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

let novoHeroi = new heroi("Thor", "1000", "guerreiro");

novoHeroi.mensagem();
