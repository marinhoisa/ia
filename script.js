const caixaPrincipal = document.querySelector('.caixa-principal')
const caixaPerguntas = document.querySelector('.caixa-perguntas')
const caixaAlternativas = document.querySelector('caixa-alternativas')
const caixaResultado = document.querySelector('caixa-alternativas')
const textoResultado = document.querySelector('.texto-resultado')

const perguntas = [
    {
        enunciado: "Quais os principais povoos que influenciaram o Folclore Nordestino?",
        alternativas: ["Africanos,europeus e indigenas.",
        "Africanos, japoneses e indigenas."
        ]
    },
    {
        enunciado: "Uma das lendas mais conhecidas não só do folclore nordestino, como também no país inteiro, a mula-sem-cabeça é uma criatura bastante assustadora, com fogo no local de sua cabeça. Dizem que isso seria o castigo dado àquelas:",
        alternativas: ["mulheres que se envolviam com padres de maneira sexual e romântica.",
        "Crianças com problemas de comportamento."
        ]
    }, {
        enunciado: "O boitatá é descrito como uma cobra de fogo que durante o dia é cega e inofensiva, mas durante a noite fica aguçada e encontra qualquer pessoa que esteja mal intencionada em relação à floresta onde vive. A lenda diz que ao encontrar essa criatura é melhor não fugir, pois seu fogo mágico não se apaga com água e pode matar ou enlouquecer suas vítimas. Qual a foram ideal de se proteger do Boitata?",
        alternativas: ["O ideal é se manter parado de olhos fechados e com a respiração presa para esperar que ele se afaste.",
        "O ideial é apontar algo bem luminoso diretamente em seus olhos e fazer o barulho mais agudo que consiga próximo a seus ouvidos."
        ]
    }, {
        enunciado: " o Papa-figo é uma lenda muito usada para assustar crianças e evitar que estas aprontem ou interajam com estranhos. Algumas versões o mostram como um homem muito idoso, outras, contadas mais especificamente em Recife, descrevem o Papa-figo como uma criatura vampiresca, que se alimenta dos fígados das crianças (daí seu nome) para tratar de uma grave doença no sangue. O nome popular do Papa-figo é?",
        alternativas: ["Bicho papão",
        "Homem do saco"
        ]
    }, {
        enunciado: "As florestas da Zona da Mata pernambucana tem uma protetora que não brinca em serviço. Também conhecida como Comadre Florzinha, a entidade gosta de fazer pequenas trelas, como trançar crinas e caudas de cavalos, além de abrir porteiras para ver os animais fugirem. Ela também ajuda aqueles que se perdem nas matas e pedem auxílio com humildade. Mas não se engane. Se a intenção do indivíduo for maltratar os animais ou a floresta ela vai assobiar e o som fará com que o sujeito não consiga mais encontrar o caminho de volta para casa. Qual a história por trás desse folclore?",
        alternativas: ["acredita-se que a menina realmente existiu e que, depois de um fim trágico, ao ser assassinada pelo próprio pai e enterrada na mata, virou protetora da floresta.",
        "acredita-se que ela foi uma indigena que morreu lutando pelo seu povo, quando sua aldeia foi invadida por barbaros, nesse dia a aldeia inteira foi queimada pelas chamas de uma queimada causada pelos mesmos que invadiram sua aldeia, desde então a mulher protege a todos od indefesos da mata."
        ]
    } //fecha objeto de pergunta
] //fecha lista de perguntas