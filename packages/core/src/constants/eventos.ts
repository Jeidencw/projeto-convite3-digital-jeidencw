import { Evento } from "../evento";

const eventos: Evento[] = [
    {
        id: "b7bc1785-fb09-41c9-a94b-5736ce7f360c",
        alias: "evento-fullstack",
        senha: "senha123",
        nome: "Evento de Desenvolvimento Fullstack",
        data: new Date("2024-12-01T10:00:00Z"),
        local: "São Paulo, SP",
        descricao:
            "Um evento completo para aprender desenvolvimento fullstack do zero.",
        imagem: "https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk",
        imagemBackground:
            "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
        publicoEsperado: 200,
        convidados: [
            {
                id: "24cad52e-d1a6-4f3e-8f6c-4d4fe622d753",
                nome: "Alice Silva",
                email: "alice@example.com",
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: "111ad640-ce66-4e06-97db-f24bc904739b",
                nome: "Carlos Pereira",
                email: "carlos@example.com",
                confirmado: false,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: "4092f53c-699a-4bb4-bec3-659cc1730611",
                nome: "Beatriz Lima",
                email: "beatriz@example.com",
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 2,
            },
        ],
    },
    // {
    //     id: "4b11bd06-b9be-4dfc-bfe1-7dfce8a5ea73",
    //     alias: "evento-js-avancado",
    //     senha: "js2024",
    //     nome: "Workshop Avançado de JavaScript",
    //     data: new Date("2024-11-20T15:00:00Z"),
    //     local: "Rio de Janeiro, RJ",
    //     descricao: "Um workshop avançado para programadores JavaScript.",
    //     imagem: "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    //     imagemBackground:
    //         "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    //     publicoEsperado: 100,
    //     convidados: [
    //         {
    //             id: "ec8e3915-334f-4773-8ebc-0a4ce04d7b08",
    //             nome: "Eduardo Santos",
    //             email: "eduardo@example.com",
    //             confirmado: true,
    //             possuiAcompanhantes: false,
    //             qtdeAcompanhantes: 0,
    //         },
    //         {
    //             id: "b95de24f-59a1-4ce0-8555-2c99fafb1e0d",
    //             nome: "Fernanda Costa",
    //             email: "fernanda@example.com",
    //             confirmado: true,
    //             possuiAcompanhantes: true,
    //             qtdeAcompanhantes: 1,
    //         },
    //     ],
    // },
    // {
    //     id: "1cbc53a6-3833-4cef-86f7-af53fd862223",
    //     alias: "evento-dev-frontend",
    //     senha: "front123",
    //     nome: "Bootcamp de Desenvolvimento Frontend",
    //     data: new Date("2024-11-15T09:00:00Z"),
    //     local: "Belo Horizonte, MG",
    //     descricao: "Aprenda a criar interfaces incríveis e responsivas.",
    //     imagem: "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    //     imagemBackground:
    //         "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    //     publicoEsperado: 150,
    //     convidados: [
    //         {
    //             id: "923902d6-e3b9-41f0-b31c-4609d406e847",
    //             nome: "Gabriela Rocha",
    //             email: "gabriela@example.com",
    //             confirmado: true,
    //             possuiAcompanhantes: true,
    //             qtdeAcompanhantes: 1,
    //         },
    //         {
    //             id: "0928cbc2-77c5-41d0-a6ce-479ce393ab41",
    //             nome: "Hugo Nogueira",
    //             email: "hugo@example.com",
    //             confirmado: false,
    //             possuiAcompanhantes: false,
    //             qtdeAcompanhantes: 0,
    //         },
    //         {
    //             id: "042a926b-c4d1-4b1d-8a1a-00d24fb39926",
    //             nome: "Isabela Martins",
    //             email: "isabela@example.com",
    //             confirmado: true,
    //             possuiAcompanhantes: false,
    //             qtdeAcompanhantes: 0,
    //         },
    //     ],
    // },
    // {
    //     id: "efe6457c-fc95-4fd0-8a2f-4e7088c26836",
    //     alias: "casamento-alberto-marina",
    //     senha: "casamento2024",
    //     nome: "Casamento do Alberto e Marina",
    //     data: new Date("2024-11-25T16:00:00Z"),
    //     local: "Florianópolis, SC",
    //     descricao:
    //         "Celebração do casamento de Alberto e Marina com amigos e familiares.",
    //     imagem: "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    //     imagemBackground:
    //         "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    //     publicoEsperado: 150,
    //     convidados: [
    //         {
    //             id: "de62b010-14c5-4ac8-9829-289ac40c6572",
    //             nome: "Bruno Cardoso",
    //             email: "bruno@example.com",
    //             confirmado: true,
    //             possuiAcompanhantes: true,
    //             qtdeAcompanhantes: 1,
    //         },
    //         {
    //             id: "e97a5ffd-3b68-4de5-b3f8-91a637c96ffb",
    //             nome: "Carla Mendes",
    //             email: "carla@example.com",
    //             confirmado: true,
    //             possuiAcompanhantes: false,
    //             qtdeAcompanhantes: 0,
    //         },
    //     ],
    // },
    // {
    //     id: "90fec6a3-b9e7-472a-bdd9-522618dec9f7",
    //     alias: "aniversario-joao",
    //     senha: "joao2024",
    //     nome: "Aniversário do João - 30 Anos",
    //     data: new Date("2024-12-05T18:00:00Z"),
    //     local: "Curitiba, PR",
    //     descricao:
    //         "Comemoração dos 30 anos de João com amigos próximos e familiares.",
    //     imagem: "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    //     imagemBackground:
    //         "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    //     publicoEsperado: 80,
    //     convidados: [
    //         {
    //             id: "cf90ba26-cced-4596-840e-3cd1fc082114",
    //             nome: "Maria Souza",
    //             email: "maria@example.com",
    //             confirmado: true,
    //             possuiAcompanhantes: true,
    //             qtdeAcompanhantes: 2,
    //         },
    //         {
    //             id: "1e46bd95-fcee-4aee-8036-763fe873a9ab",
    //             nome: "José Almeida",
    //             email: "jose@example.com",
    //             confirmado: false,
    //             possuiAcompanhantes: false,
    //             qtdeAcompanhantes: 0,
    //         },
    //     ],
    // },
    // {
    //     id: "98f87ef1-ee1f-475c-ae58-e728e2e4135c",
    //     alias: "inauguracao-loja-estrela",
    //     senha: "estrela2024",
    //     nome: "Inauguração da Loja Estrela",
    //     data: new Date("2024-12-10T09:00:00Z"),
    //     local: "Porto Alegre, RS",
    //     descricao:
    //         "Evento de inauguração da nova loja Estrela com brindes e promoções.",
    //     imagem: "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    //     imagemBackground:
    //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    //     publicoEsperado: 300,
    //     convidados: [
    //         {
    //             id: "ff6ec5ed-4bee-4c4b-8983-1566d6a006fc",
    //             nome: "Cláudia Lima",
    //             email: "claudia@example.com",
    //             confirmado: true,
    //             possuiAcompanhantes: true,
    //             qtdeAcompanhantes: 3,
    //         },
    //         {
    //             id: "c6754947-6ba7-4d0b-9484-f0246308212b",
    //             nome: "Ricardo Barbosa",
    //             email: "ricardo@example.com",
    //             confirmado: true,
    //             possuiAcompanhantes: false,
    //             qtdeAcompanhantes: 0,
    //         },
    //     ],
    // },
    // {
    //     id: "081ba6da-dc38-42ea-a4ab-015a2b2ddb0a",
    //     alias: "reuniao-familia-oliveira",
    //     senha: "familia2024",
    //     nome: "Reunião da Família Oliveira",
    //     data: new Date("2024-12-15T12:00:00Z"),
    //     local: "Salvador, BA",
    //     descricao: "Reunião de fim de ano da família Oliveira.",
    //     imagem: "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    //     imagemBackground:
    //         "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    //     publicoEsperado: 50,
    //     convidados: [
    //         {
    //             id: "665bf164-293a-4ad0-9ee0-5c4f17b34292",
    //             nome: "Thiago Oliveira",
    //             email: "thiago@example.com",
    //             confirmado: true,
    //             possuiAcompanhantes: true,
    //             qtdeAcompanhantes: 4,
    //         },
    //         {
    //             id: "3ea37abb-da72-4b58-add3-850d875380c4",
    //             nome: "Letícia Oliveira",
    //             email: "leticia@example.com",
    //             confirmado: true,
    //             possuiAcompanhantes: false,
    //             qtdeAcompanhantes: 0,
    //         },
    //     ],
    // },
];

export default eventos;
