//1

type TipoA = {
    propriedadeA: string;
    valor: number;
  };
  
  type TipoB = {
    propriedadeB: string;
    ativo: boolean;
  };

  type Interseccao = TipoA & TipoB;
  
  function trabalharComUnionEIntersection(
    parametro1: string | number, 
    parametro2: Interseccao    
  ): string {
   
    const tipoParametro1 = typeof parametro1 === "string"
      ? `string com valor: "${parametro1}"`
      : `number com valor: ${parametro1}`;

    const descricaoParametro2 = `
      PropriedadeA: ${parametro2.propriedadeA},
      Valor: ${parametro2.valor},
      PropriedadeB: ${parametro2.propriedadeB},
      Ativo: ${parametro2.ativo ? "Sim" : "Não"}
    `;
  
    return `Parâmetro 1 é um ${tipoParametro1}\nParâmetro 2 tem as propriedades:\n${descricaoParametro2}`;
  }
  const parametro1 = 42;
  const parametro2: Interseccao = {
    propriedadeA: "Teste A",
    valor: 100,
    propriedadeB: "Teste B",
    ativo: true,
  };
  console.log(trabalharComUnionEIntersection(parametro1, parametro2));
  //2
  console.log("2");

type TipoAA = {
    propriedadeA: string;
    valor: number;
  };
  
  type TipoBB = {
    propriedadeB: string;
    ativo: boolean;
  };
  
  type TipoCondicional<T extends boolean> = T extends true ? TipoAA : TipoBB;
  
  function obterDetalhes<T extends boolean>(flag: T): TipoCondicional<T> {
    if (flag) {
      
      return {
        propriedadeA: "Exemplo A",
        valor: 42,
      } as TipoCondicional<T>;
    } else {
     
      return {
        propriedadeB: "Exemplo B",
        ativo: false,
      } as TipoCondicional<T>;
    }
  }
  

  const detalhesA = obterDetalhes(true);
  console.log(detalhesA);
  
  const detalhesB = obterDetalhes(false);
  console.log(detalhesB);
  
  //3
  console.log("3");

type Configuracao = {
    tema: string;
    idioma: string;
    exibirNotificacoes: boolean;
  };
  
  
  function atualizarConfiguracao(
    configuracaoAtual: Configuracao,
    configuracoesNovas: Partial<Configuracao>
  ): Configuracao {
    return { ...configuracaoAtual, ...configuracoesNovas };
  }
  
  
  function exibirConfiguracao(configuracao: Readonly<Configuracao>): void {
    console.log("Configuração Atual:");
    console.log(`Tema: ${configuracao.tema}`);
    console.log(`Idioma: ${configuracao.idioma}`);
    console.log(`Exibir Notificações: ${configuracao.exibirNotificacoes}`);
    
    
  }

  const configuracaoInicial: Configuracao = {
    tema: "Claro",
    idioma: "Português",
    exibirNotificacoes: true,
  };

  const novaConfiguracao = atualizarConfiguracao(configuracaoInicial, {
    tema: "Escuro",
  });
  console.log("Nova Configuração:", novaConfiguracao);


  exibirConfiguracao(novaConfiguracao);

  //4
  console.log("4");

type MapaDeCapitais = Record<string, string>;
function criarMapaDeCapitais(): MapaDeCapitais {
  return {
    Brasil: "Brasília",
    Alemanha: "Berlim",
    França: "Paris",
    Japão: "Tóquio",
    EstadosUnidos: "Washington, D.C.",
  };
}
function buscarCapital(pais: string, mapa: MapaDeCapitais): string {
  const capital = mapa[pais];
  return capital
    ? `A capital de ${pais} é ${capital}.`
    : `Capital de ${pais} não encontrada.`;
}


const mapaCapitais = criarMapaDeCapitais();

console.log(buscarCapital("Brasil", mapaCapitais)); 
console.log(buscarCapital("Japão", mapaCapitais)); 
console.log(buscarCapital("Itália", mapaCapitais)); 
//5
console.log("5");

function criarListaParcial<T>(itens: Partial<T>[]): Partial<T>[] {
    return itens;
  }
  

  type Configuracao2 = {
    tema: string;
    idioma: string;
    exibirNotificacoes: boolean;
  };
  
  
  const configuracoesParciais = criarListaParcial<Configuracao2>([
    { tema: "Escuro" },               
    { idioma: "Português" },          
    { exibirNotificacoes: false },  
    { tema: "Claro", idioma: "Inglês" }, 
  ]);
  
  console.log(configuracoesParciais);
 
  
  
  