class Transform {
  manipulation(input) {
    //Para colocar cada linha em um array
    var temp = input.split(/\n/);

    //Para separar os elementos pelo caracter espaço
    var aux01 = temp[0].split("  ");
    var aux02 = temp[1].split("  ");
    var aux03 = temp[2].split("  ");
    var aux04 = temp[3].split("  ");

    /* .......Para eliminar os espaços vazios...... */

    //linha 01
    var line01 = [];

    for (let i = 0; i < aux01.length; i++) {
      if (aux01[i] != "") {
        line01.push(aux01[i]);
      }
    }

    //linha 02
    var line02 = [];

    for (let i = 0; i < aux02.length; i++) {
      if (aux02[i] != "") {
        line02.push(aux02[i]);
      }
    }

    //linha 03
    var line03 = [];

    for (let i = 0; i < aux03.length; i++) {
      if (aux03[i] != "") {
        line03.push(aux03[i]);
      }
    }

    //linha 04
    var line04 = [];

    for (let i = 0; i < aux04.length; i++) {
      if (aux04[i] != "") {
        line04.push(aux04[i]);
      }
    }

    let result = [
      {
        description: line01[1],
        classifier: line01[0],
        openingBalance: JSON.parse(line01[2]),
        debit: JSON.parse(line01[3]),
        credit: JSON.parse(line01[4]),
        finalBalance: JSON.parse(line01[5]),
        parent: null
      },
      {
        description: line02[1],
        classifier: line02[0],
        openingBalance: JSON.parse(line02[2]),
        debit: JSON.parse(line02[3]),
        credit: JSON.parse(line02[4]),
        finalBalance: JSON.parse(line02[5]),
        parent: line01[1]
      },
      {
        description: line03[1],
        classifier: line03[0],
        openingBalance: JSON.parse(line03[2]),
        debit: JSON.parse(line03[3]),
        credit: JSON.parse(line03[4]),
        finalBalance: JSON.parse(line03[5]),
        parent: line02[1]
      },
      {
        description: line04[1],
        classifier: line04[0],
        openingBalance: JSON.parse(line04[2]),
        debit: JSON.parse(line04[3]),
        credit: JSON.parse(line04[4]),
        finalBalance: JSON.parse(line04[5]),
        parent: null
      }
    ];

    return JSON.stringify(result);
  }
}

const input = `100000  ATIVO             1000  300   500   1200
110000  ATIVO CIRCULANTE  500   100   200   600
111000  DISPONIVEL        200   100   50    150
200000  PASSIVO           800   250   450   1000`;

t = new Transform();
console.log(t.manipulation(input));
