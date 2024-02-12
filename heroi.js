
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }

    atacar() {
      let ataque;
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "ataque genérico";
          break;
      }

      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }

const mago = new Heroi("Merlin", 500, "mago");
mago.atacar();

const guerreiro = new Heroi("Arthur", 30, "guerreiro");
guerreiro.atacar();

const monge = new Heroi("Shaolin", 25, "monge");
monge.atacar();

const ninja = new Heroi("Kira", 20, "ninja");
ninja.atacar();
  