matriz = new Array;
matriz = 
   //0    1    2    3    4    5    6    7    8    9    10   11    - y
  [['A', 'V', 'C', 'P', 'B', 'U', 'R', 'E', 'E', 'N', 'Y'], //0
   ['T', 'D', 'S', 'A', 'D', 'B', 'M', 'G', 'H', 'F', 'L'], //1
   ['Q', 'V', 'Z', 'X', 'C', 'K', 'S', 'J', 'L', 'O', 'O'], //2
   ['O', 'L', 'E', 'T', 'A', 'L', 'J', 'Z', 'I', 'K', 'A'], //3
   ['P', 'N', 'V', 'B', 'Q', 'F', 'I', 'U', 'T', 'G', 'L'], //4
   ['X', 'B', 'F', 'Z', 'G', 'P', 'G', 'X', 'W', 'T', 'C'], //5
   ['N', 'M', 'T', 'O', 'J', 'H', 'V', 'R', 'Q', 'B', 'H'], //6
   ['F', 'A', 'C', 'Y', 'V', 'Q', 'W', 'A', 'B', 'K', 'G'], //7
   ['A', 'J', 'O', 'R', 'H', 'E', 'E', 'N', 'G', 'P', 'O'], //8
   ['L', 'V', 'G', 'G', 'N', 'B', 'I', 'U', 'P', 'W', 'T'], //9
   ['V', 'Z', 'S', 'G', 'S', 'Y', 'T', 'O', 'J', 'K', 'D']]; //10


document.write("<p style='color:#FFF'>Este é um caça palavras sobre marcas de roupa</p><hr>");
document.write("<center style='color:#FFF'>palavras: arroz; chocolate; milho; sopa; frango; pastel; pudim; morango; ovo; tomate</center>");


document.write("<table>");
for (y = 0; y < 11; y++) {
    document.write("<tr>");
    for (x = 0; x < 11; x++) {
        if (y == 11 && x > 1 && x <  8
            || y == 0 && x > 1 && x < 8
            || x == 1 && y > 5 && y < 11
            || x == 0 && y > 1 && y < 5
            || y == 1 && x > 0 && x < 6
            || y == 7 && x > 4 && x < 11
            || y == 6 && x > 3 && x < 10
            || y == 8 && x > 5 && x < 11 
            || x == 3 && y > 1 && y < 11 
            || y == 3 && x > 3 && x < 11) {
            document.write("<td id='comida'>" + matriz[x][y] + "</td>");
        }
        else {
            document.write("<td>" + matriz[x][y] + "</td>");
        }
    }
    document.write("</tr>");
};
document.write("</table>");