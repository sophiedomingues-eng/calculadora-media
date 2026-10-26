document.getElementById("novocalculo").style.display = "none"

function calcularMedia(){

    //Pegando os valores digitado pelo usuário
    let nome = document. getElementById("nome").value;
    let disciplina = document. getElementById("disciplina").value;

     //Pegando os valores digitado pelo usuário
     // e convertendo para número
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);
    let n4 = Number(document.getElementById("nota4").value);

    if( nome == "" || disciplina == "" || n1 == "" ||
        n2 == "" || n3 == "" || n4 == ""    ) {
            alert("Preencha todos os campos!")
        }

        else{
            //iperações matemáticas
            let soma= n1 + n2 + n3 + n4
            let media= soma / 4;

            //Verificar situação do aluno
            let situacao;//classificar se foi aprovado, recuperacao
            let classeSituacao; //estizar a cor (css)

            if (media >= 7){
                situacao = "APROVADO"
                classeSituacao = "aprovado"
            }
            else if(media >= 5 ){
                situacao = "EM RECUPERAÇAO"
                classeSituacao = "recuperacao"
            }
            else{
                situacao = "REPROVADO"
                classeSituacao = "reprovado"
            }

            //Exibir o resultado

            let resultado = document.getElementById("resultado");

            resultado.innerHTML =
            "Aluno:" + nome + "<br><br>" +
            "Disciplina:" + disciplina + "<br></br>" +
            "média:"+ media + "<br><br>" + 
            "situação: <span class='" + classeSituacao + "'>" +
            situacao + "</span>";

            document.getElementById("novocalculo").style.display = "block"
            document.getElementById("calcular").style.display = "block"
        }


}

function calcularnovo(){
    //resetando os valores
    let nome = document. getElementById("nome").value = "";
    let disciplina = document. getElementById("disciplina").value = "";

     let n1 = Number(document.getElementById("nota1").value = "");
    let n2 = Number(document.getElementById("nota2").value = "");
    let n3 = Number(document.getElementById("nota3").value = "");
    let n4 = Number(document.getElementById("nota4").value = "");

    let resultado = document.getElementById("resultado")
    .textContent = "Preencha os dados acima e clique em calcular média";

     document.getElementById("novocalculo").style.display = "none"
     document.getElementById("calcular").style.display = "block"


}