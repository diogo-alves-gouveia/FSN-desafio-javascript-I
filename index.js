console.log("----------------------------------------------------");
console.log("");
console.log("**** Sistema Escolar ****");
console.log("");
console.log("----------------------------------------------------");

// Base a ser utilizada

const alunosDaEscola = [{
    nome: "Henrique",
    notas: [],
    cursos: [],
    faltas: 5
}, {
    nome: "Edson",
    notas: [],
    cursos: [],
    faltas: 2
}, {
    nome: "Bruno",
    notas: [10, 9.8, 9.6],
    cursos: [],
    faltas: 0
}, {
    nome: "Guilherme",
    notas: [5, 4.3, 6],
    cursos: [{
        nomeDoCurso: "Full Stack",
        dataMatricula: new Date
    }],
    faltas: 0
}, {
    nome: "Carlos",
    notas: [],
    cursos: [],
    faltas: 0
}, {
    nome: "Lucca",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "UX",
        dataMatricula: new Date
    }],
    faltas: 0
}];

// Implementação  

// Funções Auxiliares

let posicaoArrayAluno = function (nome) {

    /* Função auxiliar criada para retornar a posição 
    de um aluno na lista a partir do seu nome. */

    let listaNomesAlunos = []

    for (i = 0; i < alunosDaEscola.length; i++) {

        listaNomesAlunos.push(alunosDaEscola[i].nome);

    }

    return listaNomesAlunos.indexOf(nome);

}

function listaCursos(parametroCursos) {

    /* Função auxiliar criada para organizar, simplificar e listar os cursos e datas 
    de matrícula de determinado aluno a partir da inserção de seu parâmetro cursos. */

    let cursosDatas = [];

    for (n = 0; n < parametroCursos.length; n++) {

        cursosDatas.push(parametroCursos[n].nomeDoCurso + " - " + "matrícula: " + parametroCursos[n].dataMatricula.getDate() + "/" + parametroCursos[n].dataMatricula.getMonth() + "/" + parametroCursos[n].dataMatricula.getFullYear());

    }

    return (cursosDatas.join("; "));

}

// Funções Principais

function adicionarAluno(nome) {

    /* Essa função irá receber uma *string* que é o nome do aluno a ser criado. 
    O mesmo deverá ser inserido na lista de alunos conforme o modelo definido (nome, notas, cursos, faltas).
    A função deve devolver um feedback de sucesso caso o aluno seja inserido corretamente. */

    alunosDaEscola.push({
        nome: nome,
        notas: [],
        cursos: [],
        faltas: 0
    });

    console.log("----------------------------------------------------");
    console.log("");
    console.log("// Novo Aluno!");
    console.log("");
    console.log("Aluno " + nome + " adicionado com sucesso! √");
    console.log("");
    console.log("----------------------------------------------------");

}

function listarAlunos() {

    /* Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. */

    console.log("----------------------------------------------------");
    console.log("");
    console.log("// Lista de Alunos");
    console.log("");
    console.log("");

    for (i = 0; i < alunosDaEscola.length; i++) {

        console.log(i + 1 + " - " + alunosDaEscola[i].nome)
        console.log("notas: " + alunosDaEscola[i].notas.join(", ") + " | cursos: " + listaCursos(alunosDaEscola[i].cursos) + " | faltas: " + alunosDaEscola[i].faltas);
        console.log("");

    }

    console.log("");
    console.log("----------------------------------------------------");

}

function buscarAluno(nome) {

    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. 
    Ela deverá exibir um feedback, tanto para quando encontrar o aluno, como para quando não encontrar. 
    Deverá exibir também o aluno e suas informações. */

    console.log("----------------------------------------------------");
    console.log("");
    console.log("// Busca de Alunos");
    console.log("");
    console.log("");

    if (posicaoArrayAluno(nome) != -1) {

        console.log("O aluno " + nome + " foi encontrado! √");
        console.log("");
        console.log("");
        console.log(posicaoArrayAluno(nome) + 1 + " - " + nome);
        console.log("notas: " + alunosDaEscola[posicaoArrayAluno(nome)].notas.join(", ") + " | cursos: " + listaCursos(alunosDaEscola[posicaoArrayAluno(nome)].cursos) + " | faltas: " + alunosDaEscola[posicaoArrayAluno(nome)].faltas);
        console.log("");
        console.log("----------------------------------------------------");

    } else {

        console.log("O aluno " + nome + " não foi encontrado! X");
        console.log("");
        console.log("----------------------------------------------------");

    }
}

function matricularAluno(nome, curso) {

    /* Essa função irá permitir cadastrar um aluno em um curso. 
    Só poderá ser executada em um aluno já devidamente cadastrado no 
    sistema, e deverá armazenar a data atual no momento da matrícula.
    Ela deve exibir um feedback para o usuário. */

    if (posicaoArrayAluno(nome) != -1) {

        let aluno = alunosDaEscola[posicaoArrayAluno(nome)];

        aluno.cursos.push({
            nomeDoCurso: curso,
            dataMatricula: new Date
        });

        console.log("----------------------------------------------------");
        console.log("");
        console.log("// Matrícula de Alunos");
        console.log("");
        console.log("");
        console.log("O aluno " + nome + " foi matrículado com sucesso no curso de " + curso + "! √");
        console.log("");
        console.log("");
        console.log(posicaoArrayAluno(nome) + 1 + " - " + nome);
        console.log("cursos: " + listaCursos(aluno.cursos));
        console.log("");
        console.log("----------------------------------------------------");

    } else {

        console.log("----------------------------------------------------");
        console.log("");
        console.log("// Matrícula de Alunos");
        console.log("");
        console.log("");
        console.log("O aluno " + nome + " não está cadastrado no sistema! X");
        console.log("");
        console.log("----------------------------------------------------");

    }
}

function aplicarFalta(nome) {

    /* Ao receber um aluno devidamente cadastrado em nossa lista deverá ser aplicada 
    uma falta ao aluno. A função deverá exibir um feedback ao concluir a tarefa. 
    Só se poderá aplicar falta em um aluno se o mesmo estiver matriculado em um curso. */

    let aluno = alunosDaEscola[posicaoArrayAluno(nome)];

    if (posicaoArrayAluno(nome) != -1 && aluno.cursos.length != 0) {

        let faltasAtuais = aluno.faltas;

        aluno.faltas = faltasAtuais + 1;

        console.log("----------------------------------------------------");
        console.log("");
        console.log("// Aplicar Faltas");
        console.log("");
        console.log("");
        console.log("O aluno " + nome + " recebeu uma falta! √");
        console.log("");
        console.log("");
        console.log(posicaoArrayAluno(nome) + 1 + " - " + nome);
        console.log("faltas: " + alunosDaEscola[posicaoArrayAluno(nome)].faltas);
        console.log("");
        console.log("----------------------------------------------------");

    } else if (posicaoArrayAluno(nome) != -1 && aluno.cursos.length == 0) {

        console.log("----------------------------------------------------");
        console.log("");
        console.log("// Aplicar Faltas");
        console.log("");
        console.log("");
        console.log("O aluno " + nome + " não está matriculado em cursos! X");
        console.log("");
        console.log("----------------------------------------------------");

    } else {

        console.log("----------------------------------------------------");
        console.log("");
        console.log("// Aplicar Faltas");
        console.log("");
        console.log("");
        console.log("O aluno " + nome + " não está cadastrado no sistema! X");
        console.log("");
        console.log("----------------------------------------------------");

    }

}

function aplicarNota(nome, nota) {

    /* Ao receber um aluno devidamente cadastrado em nossa lista, a função deverá adicionar uma nota ao aluno na sua lista de notas. 
    A função deverá exibir um feedback ao concluir a tarefa. Só se poderá aplicar nota a um aluno se o mesmo estiver matriculado em um curso. */

    let aluno = alunosDaEscola[posicaoArrayAluno(nome)];

    if (posicaoArrayAluno(nome) != -1 && aluno.cursos.length != 0) {

        aluno.notas.push(nota);

        console.log("----------------------------------------------------");
        console.log("");
        console.log("// Aplicar Notas");
        console.log("");
        console.log("");
        console.log("O aluno " + nome + " recebeu nota " + nota + "! √");
        console.log("");
        console.log("");
        console.log(posicaoArrayAluno(nome) + 1 + " - " + nome);
        console.log("notas: " + alunosDaEscola[posicaoArrayAluno(nome)].notas.join(", "));
        console.log("");
        console.log("----------------------------------------------------");

    } else if (posicaoArrayAluno(nome) != -1 && aluno.cursos.length == 0) {

        console.log("----------------------------------------------------");
        console.log("");
        console.log("// Aplicar Notas");
        console.log("");
        console.log("");
        console.log("O aluno " + nome + " não está matriculado em cursos! X");
        console.log("");
        console.log("----------------------------------------------------");

    } else {

        console.log("----------------------------------------------------");
        console.log("");
        console.log("// Aplicar Notas");
        console.log("");
        console.log("");
        console.log("O aluno " + nome + " não está cadastrado no sistema! X");
        console.log("");
        console.log("----------------------------------------------------");

    }

}

function aprovarAluno(nome) {

    /* Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está
    aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
    O aluno só poderá ser aprovado se o mesmo estiver matriculado em um curso. */

    let aluno = alunosDaEscola[posicaoArrayAluno(nome)];

    if (posicaoArrayAluno(nome) != -1 && aluno.cursos.length != 0) {

        let somaDasNotas = aluno.notas.reduce(function (a, b) {

            return a + b;

        });

        let mediaDasNotas = somaDasNotas / aluno.notas.length

        let mediaDasNotasArredondada = mediaDasNotas.toFixed(2);

        if (aluno.faltas <= 3 && mediaDasNotas >= 7) {

            console.log("----------------------------------------------------");
            console.log("");
            console.log("// Aprovação");
            console.log("");
            console.log("");
            console.log("O aluno " + nome + " está aprovado! √");
            console.log("");
            console.log("");
            console.log(posicaoArrayAluno(nome) + 1 + " - " + nome);
            console.log("média: " + mediaDasNotasArredondada);
            console.log("");
            console.log("----------------------------------------------------");

        } else {

            console.log("----------------------------------------------------");
            console.log("");
            console.log("// Aprovação");
            console.log("");
            console.log("");
            console.log("O aluno " + nome + " está reprovado! X");
            console.log("");
            console.log("");
            console.log(posicaoArrayAluno(nome) + 1 + " - " + nome);
            console.log("média: " + mediaDasNotasArredondada);
            console.log("");
            console.log("----------------------------------------------------");
        }

    } else if (posicaoArrayAluno(nome) != -1 && aluno.cursos.length == 0) {

        console.log("----------------------------------------------------");
        console.log("");
        console.log("// Aprovação");
        console.log("");
        console.log("");
        console.log("O aluno " + nome + " não está matriculado em cursos! X");
        console.log("");
        console.log("----------------------------------------------------");

    } else {

        console.log("----------------------------------------------------");
        console.log("");
        console.log("// Aprovação");
        console.log("");
        console.log("");
        console.log("O aluno " + nome + " não está cadastrado no sistema! X");
        console.log("");
        console.log("----------------------------------------------------");
    }
}

// Execução das Funções (teste)

adicionarAluno("Pablo");
adicionarAluno("Juliana");

listarAlunos();

buscarAluno("Bruno"); // (aluno cadastrado no sistema)
buscarAluno("Roberto"); // (aluno não existente)

matricularAluno("Guilherme", "Ciências Biológicas"); // (aluno cadastrado no sistema)
matricularAluno("Ziza", "Educação Física"); // (aluno não existente)

aplicarFalta("Lucca"); // (aluno matriculado em curso)
aplicarFalta("Bruno"); // (aluno não matriculado em cursos)
aplicarFalta("Pablo"); // (aluno não existente)

aplicarNota("Lucca", 7.5); // (aluno matriculado em curso)
aplicarNota("Carlos", 9.0); // (aluno não matriculado em cursos)
aplicarNota("Robson", 8.6); // (aluno não existente)

aprovarAluno("Lucca"); // (aluno aprovado)
aprovarAluno("Guilherme"); // (aluno reprovado)
aprovarAluno("Edson"); // (aluno não matriculado em cursos)
aprovarAluno("Valmir"); // (aluno não existente)