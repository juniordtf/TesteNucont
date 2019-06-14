class Transform {
  manipulation(input) {
    //Para colocar cada linha em um array
    const wh = input.substr(310);
    const clean = wh.replace(/\*/g, "");
    var temp = clean.split(/\n/);

    //Para separar os elementos pelo caracter espaço a partir de dois espaços
    var aux01 = temp[0].split(/\t+/);
    var aux02 = temp[1].split(/\t/);
    var aux03 = temp[2].split(/\t+/);
    var aux04 = temp[3].split(/\t+/);
    var aux05 = temp[4].split(/\t+/);
    var aux06 = temp[5].split(/\t+/);
    var aux07 = temp[6].split(/\t+/);
    var aux08 = temp[7].split(/\t+/);
    var aux09 = temp[8].split(/\t+/);
    var aux10 = temp[9].split(/\t+/);
    var aux11 = temp[10].split(/\t+/);
    var aux12 = temp[11].split(/\t+/);
    var aux13 = temp[12].split(/\t+/);
    var aux14 = temp[13].split(/\t+/);
    var aux15 = temp[14].split(/\t+/);
    var aux16 = temp[15].split(/\t+/);
    var aux17 = temp[16].split(/\t+/);
    var aux18 = temp[17].split(/\t+/);
    var aux19 = temp[18].split(/\t+/);
    var aux20 = temp[19].split(/\t+/);
    var aux21 = temp[20].split(/\t+/);
    var aux22 = temp[21].split(/\t+/);
    var aux23 = temp[22].split(/\t+/);
    var aux24 = temp[23].split(/\t+/);
    var aux25 = temp[24].split(/\t+/);
    var aux26 = temp[25].split(/\t+/);
    var aux27 = temp[26].split(/\t+/);
    var aux28 = temp[27].split(/\t+/);
    var aux29 = temp[28].split(/\t+/);
    var aux30 = temp[29].split(/\t+/);
    var aux31 = temp[30].split(/\t+/);
    var aux32 = temp[31].split(/\t+/);
    var aux33 = temp[32].split(/\t+/);
    var aux34 = temp[33].split(/\t+/);
    var aux35 = temp[34].split(/\t+/);
    var aux36 = temp[35].split(/\t+/);
    var aux37 = temp[36].split(/\t+/);
    var aux38 = temp[37].split(/\t+/);
    var aux39 = temp[38].split(/\t+/);

    /* .......Para eliminar os espaços vazios, pontos, caracter 'D' em números e substituir ',' por '.' ...... */

    //linha01
    var vec01 = [];
    vec01 = aux01.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line01 = [];
    for (let i = 0; i < vec01.length; i++) {
      if (vec01[i] != "") {
        line01.push(
          vec01[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha02
    var vec02 = [];
    vec02 = aux02.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line02 = [];
    for (let i = 0; i < vec02.length; i++) {
      if (vec02[i] != "") {
        line02.push(
          vec02[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha03
    var vec03 = [];
    vec03 = aux03.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line03 = [];
    for (let i = 0; i < vec03.length; i++) {
      if (vec03[i] != "") {
        line03.push(
          vec03[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha04
    var vec04 = [];
    vec04 = aux04.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line04 = [];
    for (let i = 0; i < vec04.length; i++) {
      if (vec04[i] != "") {
        line04.push(
          vec04[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha05
    var vec05 = [];
    vec05 = aux05.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line05 = [];
    for (let i = 0; i < vec05.length; i++) {
      if (vec05[i] != "") {
        line05.push(
          vec05[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha06
    var vec06 = [];
    vec06 = aux06.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line06 = [];
    for (let i = 0; i < vec06.length; i++) {
      if (vec06[i] != "") {
        line06.push(
          vec06[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha07
    var vec07 = [];
    vec07 = aux07.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line07 = [];
    for (let i = 0; i < vec07.length; i++) {
      if (vec07[i] != "") {
        line07.push(
          vec07[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha08
    var vec08 = [];
    vec08 = aux08.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line08 = [];
    for (let i = 0; i < vec08.length; i++) {
      if (vec08[i] != "") {
        line08.push(
          vec08[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha09
    var vec09 = [];
    vec09 = aux09.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line09 = [];
    for (let i = 0; i < vec09.length; i++) {
      if (vec09[i] != "") {
        line09.push(
          vec09[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha10
    var vec10 = [];
    vec10 = aux10.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line10 = [];
    for (let i = 0; i < vec10.length; i++) {
      if (vec10[i] != "") {
        line10.push(
          vec10[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha11
    var vec11 = [];
    vec11 = aux11.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line11 = [];
    for (let i = 0; i < vec11.length; i++) {
      if (vec11[i] != "") {
        line11.push(
          vec11[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha12
    var vec12 = [];
    vec12 = aux12.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line12 = [];
    for (let i = 0; i < vec12.length; i++) {
      if (vec12[i] != "") {
        line12.push(
          vec12[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha13
    var vec13 = [];
    vec13 = aux13.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line13 = [];
    for (let i = 0; i < vec13.length; i++) {
      if (vec13[i] != "") {
        line13.push(
          vec13[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha14
    var vec14 = [];
    vec14 = aux14.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line14 = [];
    for (let i = 0; i < vec14.length; i++) {
      if (vec14[i] != "") {
        line14.push(
          vec14[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha15
    var vec15 = [];
    vec15 = aux15.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line15 = [];
    for (let i = 0; i < vec15.length; i++) {
      if (vec15[i] != "") {
        line15.push(
          vec15[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha16
    var vec16 = [];
    vec16 = aux16.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line16 = [];
    for (let i = 0; i < vec16.length; i++) {
      if (vec16[i] != "") {
        line16.push(
          vec16[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha17
    var vec17 = [];
    vec17 = aux17.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line17 = [];
    for (let i = 0; i < vec17.length; i++) {
      if (vec17[i] != "") {
        line17.push(
          vec17[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha18
    var vec18 = [];
    vec18 = aux18.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line18 = [];
    for (let i = 0; i < vec18.length; i++) {
      if (vec18[i] != "") {
        line18.push(
          vec18[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha19
    var vec19 = [];
    vec19 = aux19.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line19 = [];
    for (let i = 0; i < vec19.length; i++) {
      if (vec19[i] != "") {
        line19.push(
          vec19[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha20
    var vec20 = [];
    vec20 = aux20.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line20 = [];
    for (let i = 0; i < vec20.length; i++) {
      if (vec20[i] != "") {
        line20.push(
          vec20[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha21
    var vec21 = [];
    vec21 = aux21.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line21 = [];
    for (let i = 0; i < vec21.length; i++) {
      if (vec21[i] != "") {
        line21.push(
          vec21[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha22
    var vec22 = [];
    vec22 = aux22.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line22 = [];
    for (let i = 0; i < vec22.length; i++) {
      if (vec22[i] != "") {
        line22.push(
          vec22[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha23
    var vec23 = [];
    vec23 = aux23.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line23 = [];
    for (let i = 0; i < vec23.length; i++) {
      if (vec23[i] != "") {
        line23.push(
          vec23[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha24
    var vec24 = [];
    vec24 = aux24.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line24 = [];
    for (let i = 0; i < vec24.length; i++) {
      if (vec24[i] != "") {
        line24.push(
          vec24[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha25
    var vec25 = [];
    vec25 = aux25.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line25 = [];
    for (let i = 0; i < vec25.length; i++) {
      if (vec25[i] != "") {
        line25.push(
          vec25[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha26
    var vec26 = [];
    vec26 = aux26.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line26 = [];
    for (let i = 0; i < vec26.length; i++) {
      if (vec26[i] != "") {
        line26.push(
          vec26[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha27
    var vec27 = [];
    vec27 = aux27.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line27 = [];
    for (let i = 0; i < vec27.length; i++) {
      if (vec27[i] != "") {
        line27.push(
          vec27[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha28
    var vec28 = [];
    vec28 = aux28.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line28 = [];
    for (let i = 0; i < vec28.length; i++) {
      if (vec28[i] != "") {
        line28.push(
          vec28[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha29
    var vec29 = [];
    vec29 = aux29.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line29 = [];
    for (let i = 0; i < vec29.length; i++) {
      if (vec29[i] != "") {
        line29.push(
          vec29[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha30
    var vec30 = [];
    vec30 = aux30.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line30 = [];
    for (let i = 0; i < vec30.length; i++) {
      if (vec30[i] != "") {
        line30.push(
          vec30[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha31
    var vec31 = [];
    vec31 = aux31.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line31 = [];
    for (let i = 0; i < vec31.length; i++) {
      if (vec31[i] != "") {
        line31.push(
          vec31[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha32
    var vec32 = [];
    vec32 = aux32.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line32 = [];
    for (let i = 0; i < vec32.length; i++) {
      if (vec32[i] != "") {
        line32.push(
          vec32[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha33
    var vec33 = [];
    vec33 = aux33.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line33 = [];
    for (let i = 0; i < vec33.length; i++) {
      if (vec33[i] != "") {
        line33.push(
          vec33[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha34
    var vec34 = [];
    vec34 = aux34.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line34 = [];
    for (let i = 0; i < vec34.length; i++) {
      if (vec34[i] != "") {
        line34.push(
          vec34[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha35
    var vec35 = [];
    vec35 = aux35.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line35 = [];
    for (let i = 0; i < vec35.length; i++) {
      if (vec35[i] != "") {
        line35.push(
          vec35[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha36
    var vec36 = [];
    vec36 = aux36.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line36 = [];
    for (let i = 0; i < vec36.length; i++) {
      if (vec36[i] != "") {
        line36.push(
          vec36[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha37
    var vec37 = [];
    vec37 = aux37.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line37 = [];
    for (let i = 0; i < vec37.length; i++) {
      if (vec37[i] != "") {
        line37.push(
          vec37[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha38
    var vec38 = [];
    vec38 = aux38.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line38 = [];
    for (let i = 0; i < vec38.length; i++) {
      if (vec38[i] != "") {
        line38.push(
          vec38[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha39
    var vec39 = [];
    vec39 = aux39.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line39 = [];
    for (let i = 0; i < vec39.length; i++) {
      if (vec39[i] != "") {
        line39.push(
          vec39[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
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
          parent: null
        },
        {
          description: line03[1],
          classifier: line03[0],
          openingBalance: JSON.parse(line03[2]),
          debit: JSON.parse(line03[3]),
          credit: JSON.parse(line03[4]),
          finalBalance: JSON.parse(line03[5]),
          parent: null
        },
        {
          description: line04[1],
          classifier: line04[0],
          openingBalance: JSON.parse(line04[2]),
          debit: JSON.parse(line04[3]),
          credit: JSON.parse(line04[4]),
          finalBalance: JSON.parse(line04[5]),
          parent: null
        },
        {
          description: line05[1],
          classifier: line05[0],
          openingBalance: JSON.parse(line05[2]),
          debit: JSON.parse(line05[3]),
          credit: JSON.parse(line05[4]),
          finalBalance: JSON.parse(line05[5]),
          parent: null
        },
        {
          description: line06[1],
          classifier: line06[0],
          openingBalance: JSON.parse(line06[2]),
          debit: JSON.parse(line06[3]),
          credit: JSON.parse(line06[4]),
          finalBalance: JSON.parse(line06[5]),
          parent: null
        },
        {
          description: line07[1],
          classifier: line07[0],
          openingBalance: JSON.parse(line07[2]),
          debit: JSON.parse(line07[3]),
          credit: JSON.parse(line07[4]),
          finalBalance: JSON.parse(line07[5]),
          parent: null
        },
        {
          description: line08[1],
          classifier: line08[0],
          openingBalance: JSON.parse(line08[2]),
          debit: JSON.parse(line08[3]),
          credit: JSON.parse(line08[4]),
          finalBalance: JSON.parse(line08[5]),
          parent: null
        },
        {
          description: line09[1],
          classifier: line09[0],
          openingBalance: JSON.parse(line09[2]),
          debit: JSON.parse(line09[3]),
          credit: JSON.parse(line09[4]),
          finalBalance: JSON.parse(line09[5]),
          parent: null
        },
        {
          description: line10[1],
          classifier: line10[0],
          openingBalance: JSON.parse(line10[2]),
          debit: JSON.parse(line10[3]),
          credit: JSON.parse(line10[4]),
          finalBalance: null,
          parent: null
        },
        {
          description: line11[1],
          classifier: line11[0],
          openingBalance: JSON.parse(line11[2]),
          debit: JSON.parse(line11[3]),
          credit: JSON.parse(line11[4]),
          finalBalance: JSON.parse(line11[5]),
          parent: null
        },
        {
          description: line12[1],
          classifier: line12[0],
          openingBalance: JSON.parse(line12[2]),
          debit: JSON.parse(line12[3]),
          credit: JSON.parse(line12[4]),
          finalBalance: JSON.parse(line12[5]),
          parent: null
        },
        {
          description: line13[1],
          classifier: line13[0],
          openingBalance: JSON.parse(line13[2]),
          debit: JSON.parse(line13[3]),
          credit: JSON.parse(line13[4]),
          finalBalance: JSON.parse(line13[5]),
          parent: null
        },
        {
          description: line14[1],
          classifier: line14[0],
          openingBalance: JSON.parse(line14[2]),
          debit: JSON.parse(line14[3]),
          credit: JSON.parse(line14[4]),
          finalBalance: JSON.parse(line14[5]),
          parent: null
        },
        {
          description: line15[1],
          classifier: line15[0],
          openingBalance: JSON.parse(line15[2]),
          debit: JSON.parse(line15[3]),
          credit: JSON.parse(line15[4]),
          finalBalance: JSON.parse(line15[5]),
          parent: null
        },
        {
          description: line16[1],
          classifier: line16[0],
          openingBalance: JSON.parse(line16[2]),
          debit: JSON.parse(line16[3]),
          credit: JSON.parse(line16[4]),
          finalBalance: JSON.parse(line16[5]),
          parent: null
        },
        {
          description: line17[1],
          classifier: line17[0],
          openingBalance: JSON.parse(line17[2]),
          debit: JSON.parse(line17[3]),
          credit: JSON.parse(line17[4]),
          finalBalance: JSON.parse(line17[5]),
          parent: null
        },
        {
          description: line18[1],
          classifier: line18[0],
          openingBalance: JSON.parse(line18[2]),
          debit: JSON.parse(line18[3]),
          credit: JSON.parse(line18[4]),
          finalBalance: JSON.parse(line18[5]),
          parent: null
        },
        {
          description: line19[1],
          classifier: line19[0],
          openingBalance: JSON.parse(line19[2]),
          debit: JSON.parse(line19[3]),
          credit: JSON.parse(line19[4]),
          finalBalance: JSON.parse(line19[5]),
          parent: null
        },
        {
          description: line20[1],
          classifier: line20[0],
          openingBalance: JSON.parse(line20[2]),
          debit: JSON.parse(line20[3]),
          credit: JSON.parse(line20[4]),
          finalBalance: JSON.parse(line20[5]),
          parent: null
        },
        {
          description: line21[1],
          classifier: line21[0],
          openingBalance: JSON.parse(line21[2]),
          debit: JSON.parse(line21[3]),
          credit: JSON.parse(line21[4]),
          finalBalance: JSON.parse(line21[5]),
          parent: null
        },
        {
          description: line22[1],
          classifier: line22[0],
          openingBalance: JSON.parse(line22[2]),
          debit: JSON.parse(line22[3]),
          credit: JSON.parse(line22[4]),
          finalBalance: null,
          parent: null
        },
        {
          description: line23[1],
          classifier: line23[0],
          openingBalance: JSON.parse(line23[2]),
          debit: JSON.parse(line23[3]),
          credit: JSON.parse(line23[4]),
          finalBalance: null,
          parent: null
        },
        {
          description: line24[1],
          classifier: line24[0],
          openingBalance: JSON.parse(line24[2]),
          debit: JSON.parse(line24[3]),
          credit: JSON.parse(line24[4]),
          finalBalance: null,
          parent: null
        },
        {
          description: line25[1],
          classifier: line25[0],
          openingBalance: JSON.parse(line25[2]),
          debit: JSON.parse(line25[3]),
          credit: JSON.parse(line25[4]),
          finalBalance: null,
          parent: null	
        },
        {
          description: line26[1],
          classifier: line26[0],
          openingBalance: JSON.parse(line26[2]),
          debit: JSON.parse(line26[3]),
          credit: JSON.parse(line26[4]),
          finalBalance: null,
          parent: null	
        },
        {
          description: line27[1],
          classifier: line27[0],
          openingBalance: JSON.parse(line27[2]),
          debit: JSON.parse(line27[3]),
          credit: JSON.parse(line27[4]),
          finalBalance: JSON.parse(line27[5]),
          parent: null	
        },
        {
          description: line28[1],
          classifier: line28[0],
          openingBalance: JSON.parse(line28[2]),
          debit: JSON.parse(line28[3]),
          credit: JSON.parse(line28[4]),
          finalBalance: JSON.parse(line28[5]),
          parent: null	
        },
        {
          description: line29[1],
          classifier: line29[0],
          openingBalance: JSON.parse(line29[2]),
          debit: JSON.parse(line29[3]),
          credit: JSON.parse(line29[4]),
          finalBalance: JSON.parse(line29[5]),
          parent: null	
        },
        {
          description: line30[1],
          classifier: line30[0],
          openingBalance: JSON.parse(line30[2]),
          debit: JSON.parse(line30[3]),
          credit: JSON.parse(line30[4]),
          finalBalance: JSON.parse(line30[5]),
          parent: null	
        },
        {
          description: line31[1],
          classifier: line31[0],
          openingBalance: JSON.parse(line31[2]),
          debit: JSON.parse(line31[3]),
          credit: JSON.parse(line31[4]),
          finalBalance: JSON.parse(line31[5]),
          parent: null	
        },
        {
          description: line32[1],
          classifier: line32[0],
          openingBalance: JSON.parse(line32[2]),
          debit: JSON.parse(line32[3]),
          credit: JSON.parse(line32[4]),
          finalBalance: null,
          parent: null	
        },
        {
          description: line33[1],
          classifier: line33[0],
          openingBalance: JSON.parse(line33[2]),
          debit: JSON.parse(line33[3]),
          credit: JSON.parse(line33[4]),
          finalBalance: null,
          parent: null	
        },
        {
          description: line34[1],
          classifier: line34[0],
          openingBalance: JSON.parse(line34[2]),
          debit: JSON.parse(line34[3]),
          credit: JSON.parse(line34[4]),
          finalBalance: null,
          parent: null	
        },
        {
          description: line35[1],
          classifier: line35[0],
          openingBalance: JSON.parse(line35[2]),
          debit: JSON.parse(line35[3]),
          credit: JSON.parse(line35[4]),
          finalBalance: null,
          parent: null	
        },
        {
          description: line36[1],
          classifier: line36[0],
          openingBalance: JSON.parse(line36[2]),
          debit: JSON.parse(line36[3]),
          credit: JSON.parse(line36[4]),
          finalBalance: JSON.parse(line36[5]),
          parent: null	
        },
        {
          description: line37[1],
          classifier: line37[0],
          openingBalance: JSON.parse(line37[2]),
          debit: JSON.parse(line37[3]),
          credit: JSON.parse(line37[4]),
          finalBalance: JSON.parse(line37[5]),
          parent: null	
        },
        {
          description: line38[1],
          classifier: line38[0],
          openingBalance: JSON.parse(line38[2]),
          debit: JSON.parse(line38[3]),
          credit: JSON.parse(line38[4]),
          finalBalance: JSON.parse(line38[5]),
          parent: null	
        },
        {
          description: line39[1],
          classifier: line39[0],
          openingBalance: JSON.parse(line39[2]),
          debit: JSON.parse(line39[3]),
          credit: JSON.parse(line39[4]),
          finalBalance: JSON.parse(line39[5]),
          parent: null	
        }
      ];
      
      
    return JSON.stringify(result);
  }
}

const input = `Balancete Contábil									Pág.: 1 de 3
  Empresa: Space Exploration Technologies Corp. - CNPJ: 99.999.999/9999-99									Software Contábil
  Período: 01/01/2018 a 31/01/2018; Estabelecimento(s): Todos; Centro(s) de Resultados: Todos									
  Conta	Descrição		Saldo Anterior		Débitos	Créditos			Saldo Atual
  1	*** Ativo ***	82997,66	D		247726,89	240377,5		90347,05	D
  11	Ativo Circulante	32573,59	D		247726,89	239574,01		40726,47	D
  111	Disponível	24059,92	D		200259,03	187061,24		37257,71	D
  11101	Caixa Geral	3758,78	D		145995,84	146317,86		3436,76	D
  111010001	Caixa Fixo	3758,78	D		145995,84	146317,86		3436,76	D
  11102	Depósitos Bancários à Vista	19316,93	D		54213,19	40743,38		32786,74	D
  111020001	Santander	19316,93	D		54213,19	40743,38		32786,74	D
  11103	Aplicação de Liquidez Imediata	984,21	D		50	0		1034,21	D
  111030001	Poupança Santander	984,21	D		50	0		1034,21	D
  113	Clientes	6420,06	D		38956,9	43635,46		1741,5	D
  11304	Cartão de Crédito	6420,06	D		38956,9	43635,46		1741,5	D
  113040001	Cartão de Crédito	6420,06	D		38956,9	43635,46		1741,5	D
  114	Outros Créditos	1854,84	D		6941,02	7411,14		1384,72	D
  11403	Créditos de Funcionários	1854,84	D		6941,02	7411,14		1384,72	D
  114030001	Adiantamento de Salários	451,54	D		5556,3	6007,84		0	 
  114030002	Adiantamento de Férias	1403,3	D		1384,72	1403,3		1384,72	D
  116	Estoques	238,77	D		1569,94	1466,17		342,54	D
  11603	Estoque de Mercadorias	238,77	D		1569,94	1466,17		342,54	D
  116030001	Mercadorias Restaurante	238,77	D		1569,94	1466,17		342,54	D
  13	Ativo Permanente	39576,15	D		0	803,49		38772,66	D
  133	Imobilizado	39576,15	D		0	803,49		38772,66	D
  13301	Bens Em Operação	56024,12	D		0	0		56024,12	D
  133010005	Móveis e Utensílios	13933,65	D		0	0		13933,65	D
  133010006	Instalações Diversas	1695,16	D		0	0		1695,16	D
  133010007	Veículos	36500,61	D		0	0		36500,61	D
  133010011	Equipamentos de Proc.De Dados	3894,7	D		0	0		3894,7	D
  13302	Deprec.Amortizacao e Exaustão Acumulada	16447,97	C		0	803,49		17251,46	C
  133020004	Móveis e Utensílios	2526,29	C		0	116,11		2642,4	C
  133020005	Instalações Diversas	268,47	C		0	14,13		282,6	C
  133020006	Veículos	12561,35	C		0	608,34		13169,69	C
  133020010	Equipamentos Proc.De Dados	1091,86	C		0	64,91		1156,77	C
  14	Compensações Ativas	10847,92	D		0	0		10847,92	D
  141	Contas de Compensações	10847,92	D		0	0		10847,92	D
  14101	Bens Recebidos em Comodato	10847,92	D		0	0		10847,92	D
  141010001	Bens Recebidos em Comodato	10847,92	D		0	0		10847,92	D
  2	*** Passivo ***	82997,66	C		33628,08	30977,47		80347,05	C
  21	Passivo Circulante	15008,36	C		26566,24	28434,36		16876,48	C
  211	Fornecedores	840,36	C		747,8	2565,72		2658,28	C
  21101	Fornecedores Nacionais	840,36	C		747,8	2565,72		2658,28	C`;

t = new Transform();
console.log(t.manipulation(input));
