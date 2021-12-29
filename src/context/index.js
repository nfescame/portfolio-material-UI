import React, { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const AuthContext = React.createContext({});

export const Auth = (props) => {
  const [cards, setCards] = useState();
  const [appBarOpen, setAppBarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    api
      .get("/")
      .then((response) => setCards(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const projects = {
    titleMain: "Projects",
    cards: [
      {
        title: "NG Heroes",
        subTitle: "Project # Crud-Pair programming-Guilherme Rosa",
        image: "https://portfolionfescame.netlify.app/imagens/heroes.jpg",
        path: "https://ngheroes.netlify.app/",
        pathRepo: "https://github.com/nfescame/NgHeroes",
        description:
          "Este projeto é um sistema CRUD de recriação. Existe uma API com mais de 500 nomes e dados de heróis e com estes dados o usuário pode escolher seus 5 personagens favoritos e comparar seus status.",
      },
      {
        title: "Lig4 Game",
        subTitle: "Project # Game",
        image:
          "https://github.com/nfescame/Lig4-Game/blob/master/img/lig4Logo.png?raw=true",
        path: "https://nfescame.github.io/Lig4-Game/",
        pathRepo: "https://github.com/nfescame/Lig4-Game",
        description:
          "Neste game eu apliquei o conhecimento adquirido nas primeiras semanas de desenvolvimento web bootcamp do ironhack.",
      },

      {
        title: "So fit ",
        subTitle:
          "Project # API-Pair programming-Manoel Pereira e Raul Guimarães",
        image: "https://portfolionfescame.netlify.app/imagens/fitness.jpeg",
        path: "https://so-fit-app.netlify.app/",
        pathRepo: "https://github.com/rguima17/so-fit-client",
        description:
          "Este aplicativo da web tem como objetivo ajudar as pessoas a transformar sua vida de fitness em uma atividade mais agradável / emocionante.",
      },
      {
        title: "Movies Search",
        subTitle: "Project # OMDb api",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pRoAGLfGTMMV45kwM3XUultIilY28nCaG2Bbeve6db6HdTb09zWmdVp5g0IglcInl0g&usqp=CAU",
        path: "https://escame-movies.netlify.app/",
        pathRepo: "https://github.com/nfescame/Movies-search",
        description:
          "Aplicação consumindo uma api (OMDB) de filmes, series e games,faz busca por nome, exibe detalhes do item selecionado, sistema de paginação... Usando Bootstrap com React JS,React Router Dom, Axios, Hooks:UseState, UsesEffect.",
      },
      {
        title: "Escame Imóveis",
        subTitle: "Project # Site demonstração",
        image:
          "https://escame-imoveis.netlify.app/static/media/img2.a18708fb.jpg",
        path: "https://escame-imoveis.netlify.app/",
        pathRepo: "https://github.com/nfescame/escame-imoveis",
        description:
          "Site imobiliario para demonstração, desenvolvido em React js e Bootstrap. Inclui um formulario de envio de Email funcional utilizando FormSubmit.co ",
      },
      {
        title: "Simple Crud",
        subTitle: "Project # CRUD ",
        image:
          "https://www.dorusomcutean.com/wp-content/uploads/2020/03/crud.jpg",
        path: "https://crud-escame.netlify.app/",
        pathRepo: "https://github.com/nfescame/crud-users",
        description:
          "Esta aplicação exibe uma lista com nomes e emails em uma tabela dinamica, pode-se editar deletar e adicionar registros. Usando: React JS com Bootstrap, React Router Dom. ",
      },
      {
        title: "Covid Statistics",
        subTitle: "Project #6 RapiApi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_RGTxysWoC5Ty7RrW8kRLqFjkNvDkJxa_79_yjQA6sabPyqlknOOVzfNP526DaM4oVw&usqp=CAU",
        path: "https://covid-statistics-all.netlify.app/",
        pathRepo: "https://github.com/nfescame/Covid-api",
        description:
          "Aplicação consumindo uma api (RapidApi) com atualizações diarias dos numeros do Covid 19 no mundo, incluindo: casos, casos por milhão, mortes, mortes por milhão e população. Usando: @mui/material, @mui/styles, @mui/x-data-grid, Axios, React Router Dom.  ",
      },

      {
        title: "Currency Exchange",
        subTitle: "Project #7 RapidApi Exchangerate-api",
        image:
          "https://www.financemagnates.com/wp-content/uploads/2020/01/FX.jpg",
        path: "https://currency-exchange-escame.netlify.app/",
        pathRepo: "https://github.com/nfescame/Conversor-de-moeda",
        description:
          "Aplicação consumindo uma api (RapidApi,Exchangerate-api) exibindo códigos de conversão de moeda onde se seleciona duas moedas para convesão. Usando: React Js com Bootstrap, React Router Dom, Axios e react-currency-input-field. ",
      },
    ],
  };
  const competencias = {
    titleMain: "Skills",
    cards: [
      {
        title: "HTML ",
        description:
          "HTML5 (Hypertext Markup Language, versão 5) é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software.[1] É a quinta versão da linguagem HTML. Esta nova versão traz consigo importantes mudanças quanto ao papel do HTML no mundo da Web, através de novas funcionalidades como semântica e acessibilidade. Possibilita o uso de novos recursos antes possíveis apenas com a aplicação de outras tecnologias. Sua essência tem sido melhorar a linguagem com o suporte para as mais recentes multimídias, enquanto a mantém facilmente legível por seres humanos e consistentemente compreendida por computadores e outros dispositivos (navegadores, parsers etc). O HTML5 será o novo padrão para HTML, XHTML, e HTML DOM. Atualmente, está em fase de esboço, porém diversos navegadores já implementam algumas de suas funcionalidades.",
        image: "https://devporai.com.br/wp-content/uploads/2020/09/html5.jpg",
      },
      {
        title: "CSS3",
        description:
          "CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets (ou simplesmente CSS), pela qual se define estilos para um projeto web (página de internet). Com efeitos de transição, imagem, imagem de fundo/background e outros, pode-se criar estilos únicos para seus projetos web, alterando diversos aspectos de design no layout da página.",
        image:
          "https://edrodrigues.com.br/wp-content/uploads/2019/10/melhore-o-seu-css-com-estes-5-principios.png",
      },
      {
        title: "Javascript",
        description:
          "JavaScript (frequentemente abreviado como JS) é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e, funcional).[2][3] Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.",
        image:
          "https://static.imasters.com.br/wp-content/uploads/2018/03/jss.jpg",
      },
      {
        title: "Bootstrap",
        description:
          "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.",
        image:
          "https://www.upinside.com.br/uploads/courses/2018/09/bootstrap-builder-1536168891.jpg",
      },
      {
        title: "Github",
        description:
          "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo. GitHub é amplamente utilizado por programadores para divulgação de seus trabalhos ou para que outros programadores contribuam com o projeto, além de promover fácil comunicação através de recursos que relatam problemas ou mesclam repositórios remotos (issues, pull request).",
        image:
          "https://static.imasters.com.br/wp-content/uploads/2018/01/GIT.jpg",
      },
      {
        title: "React js",
        description:
          "O React (também denominado React.js ou ReactJS) é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário (frontend) em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.",
        image: "https://miro.medium.com/max/1400/0*1V_xALlt1BCKvFBW.jpeg",
      },
      {
        title: "Material UI",
        description:
          "Material-UI é simplesmente uma biblioteca que nos permite importar e usar diferentes componentes para criar uma interface de usuário em nossos aplicativos React. Isso economiza uma quantidade significativa de tempo, pois os desenvolvedores não precisam escrever tudo do zero.",
        image: "https://miro.medium.com/max/2000/1*FDNeKIUeUnf0XdqHmi7nsw.png",
      },
      {
        title: "Tailwind CSS",
        description:
          "Tailwind CSS é autodescrito como um framework CSS de primeiro utilitário. Em vez de focar na funcionalidade do item que está sendo estilizado, o Tailwind se concentra em como ele deve ser exibido. Isso torna mais fácil para o desenvolvedor testar novos estilos e alterar o layout.",
        image:
          "https://laravelnews.imgix.net/images/tailwindcss.png?ixlib=php-3.3.1",
      },
      {
        title: "Node js",
        description:
          "Node.js (Node) é uma plataforma de desenvolvimento de código aberto para a execução de código JavaScript no lado do servidor. O Node é útil para desenvolver aplicativos que requerem uma conexão persistente do navegador ao servidor e é frequentemente usado para aplicativos em tempo real, como bate-papo, feeds de notícias e notificações push da web.",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6g-4ZAKHgqrqr8XWJ61lf9y_ObTodfGIHmH-O7Yg75kpBbn9YY3ZyyFzfXJ_KWiNR1Tc&usqp=CAU",
      },
      {
        title: "Express js",
        description:
          "Express.js, ou simplesmente Express, é uma estrutura de aplicativo da web de back-end para Node.js, lançada como software livre e de código aberto sob a Licença MIT. Ele é projetado para construir aplicativos da web e APIs.",
        image:
          "https://media.vlpt.us/images/devgosunman/post/7d97a0e5-1784-41c3-a3c7-84ca98c166df/express.png",
      },
      {
        title: "MongoDB",
        description:
          "MongoDB é um banco de dados NoSQL orientado a documentos usado para armazenamento de dados de alto volume. Em vez de usar tabelas e linhas como nos bancos de dados relacionais tradicionais, o MongoDB faz uso de coleções e documentos.",
        image:
          "https://arquivo.devmedia.com.br/marketing/img/artigo-nosql-hospedando-bancos-de-dados-mongodb-31056.png",
      },
      {
        title: "Netlify",
        description:
          "A Netlify é uma empresa de computação em nuvem com sede em São Francisco que oferece hospedagem e serviços de back-end sem servidor para aplicativos da web e sites estáticos.",
        image:
          "http://softwareengineeringdaily.com/wp-content/uploads/2020/11/Netlify.png",
      },
    ],
  };

  return (
    <AuthContext.Provider
      value={{
        projects,
        competencias,
        darkMode,
        setDarkMode,
        cards,
        appBarOpen,
        setAppBarOpen,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
