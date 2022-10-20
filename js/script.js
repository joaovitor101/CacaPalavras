matriz = new Array;
matriz = 

  [['G', 'L', 'C', 'A', 'R', 'T', 'I', 'E', 'R', 'N', 'Y'], 
   ['N', 'D', 'S', 'A', 'D', 'B', 'M', 'G', 'O', 'F', 'L'], 
   ['I', 'V', 'Z', 'X', 'C', 'K', 'S', 'J', 'L', 'O', 'O'], 
   ['K', 'A', 'L', 'V', 'H', 'E', 'R', 'M', 'E', 'S', 'N'], 
   ['E', 'N', 'V', 'B', 'Q', 'F', 'I', 'U', 'X', 'G', 'L'], 
   ['X', 'B', 'U', 'R', 'B', 'E', 'R', 'R', 'Y', 'T', 'C'],
   ['N', 'M', 'T', 'O', 'J', 'H', 'V', 'R', 'Q', 'B', 'G'], 
   ['F', 'A', 'C', 'I', 'V', 'Y', 'S', 'L', 'B', 'K', 'U'],
   ['A', 'J', 'O', 'D', 'H', 'L', 'E', 'N', 'A', 'H', 'C'],
   ['L', 'V', 'G', 'G', 'N', 'B', 'I', 'U', 'P', 'W', 'C'],
   ['V', 'P', 'R', 'A', 'D', 'A', 'T', 'O', 'J', 'K', 'I']]; 

document.write("<p>Este é um caça palavras sobre marcas de roupa e países</p>")

document.write("<table>");
for (x = 0; x < 11; x++) {
    document.write("<tr>");
    for (y = 0; y < 11; y++) {
        if (y == 0 && x > 0 && x <  4
            || y == 0 && x > 1 && x < 5 //Nike
            || y == 8 && x >= 0 && x < 5 //Rolex
            || x == 0 && y > 1 && y < 9 //Cartier
            || x == 3 && y >= 4 && y < 10 //Hermes
            || x == 10 && y >= 1 && y < 6 //Prada
            || y == 10 && x >= 6 && x < 11 // Gucci
            || x == 8 && y >= 5 && 10 //Chanel
            || x == 5 && y >= 1 && y < 9 // Burberry
            || y == 3 && x >= 5 && x < 9
            || x == 7 && y >= 5 && y < 8
) {
            document.write("<td id='marcas'>" + matriz[x][y] + "</td>");
        }
        else {
            document.write("<td>" + matriz[x][y] + "</td>");
        }
    }
    document.write("</tr>");
};
document.write("</table>");
matriz = new Array;
matriz = [
    ["E","R","I","T","R","E","I","A","","",""],
    ["","U","","","M","","E","","","","B"],
    ["","A","","","O","","M","","","J","U"],
    ["","N","","","Ç","","E","","","O","R"],
    ["","D","I","","A","","N","A","U","R","U"],
    ["","A","R","","M","","","","","D","N"],
    ["","","A","","B","","","","","A","D"],
    ["P","A","Q","U","I","S","T","A","O","N","I"],
    ["","","U","","Q","","","","","I",""],
    ["","","E","","U","","","","","A",""],
    ["","E","T","S","E","L","R","O","M","I","T"],
];

window.onload = function(){
    for(let node of document.querySelectorAll("td")){
        if(node.textContent != ""){
            node.className = "pintados";
        }
        else{
            let charcode = Math.round(65 + Math.random() * 25)
            node.textContent = String.fromCharCode(charcode)
        }
    }
}

document.write("<table border='1'>");
for (linha = 0; linha < 11; linha++){
    document.write("<tr>")
    for(coluna = 0; coluna < 11; coluna++){
        document.write("<td>" + matriz[linha][coluna] + "</td>");
    }
    document.write("</tr>");
}

document.write("</table>")
document.write("<p2>OBS: Foram utilizadas 2 métodos distintos para o desenvolvimento de cada caça-palavras.</p2>")
document.write("<p3 id='cp1'>Palavras: Cartier, Nike, Rolex, Hermes, Gucci, Chanel, YSL, Prada, Dior, Burberry.</p3>")
document.write("<p4 id='cp2'>Palavras: Eritreia, Ruanda, Moçambique, Iraque, Paquistão, Timorleste, Iemen, Jordania,<br>Nauru, Burundi.</p4>")

