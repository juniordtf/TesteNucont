class Transform {
  manipulation(input) {
    //Para colocar cada linha em um array
    const pg01 = input.slice(1011, 5430);
    const pg02 = input.slice(6448, 8181);
    const pg03 = input.substr(9199);

    var tempA = pg01.split(/\n/);
    var tempB = pg02.split(/\n/);
    var tempC = pg03.split(/\n/);

    //Para eliminar linhas vazias
    var temp01 = [];
    temp01 = tempA.filter((elemento, indice, array) => {
      return elemento != 0;
    });

    var temp02 = [];
    temp02 = tempB.filter((elemento, indice, array) => {
      return elemento != 0;
    });

    var temp03 = [];
    temp03 = tempC.filter((elemento, indice, array) => {
      return elemento != 0;
    });

    /* ...........1a Página............ */
    //Para separar os elementos pelo caracter espaço a partir de dois espaços
    var aux01 = temp01[0].split(/\s{2,}/);
    var aux02 = temp01[1].split(/\s{2,}/);
    var aux03 = temp01[2].split(/\s{2,}/);
    var aux04 = temp01[3].split(/\s{2,}/);
    var aux05 = temp01[4].split(/\s{2,}/);
    var aux06 = temp01[5].split(/\s{2,}/);
    var aux07 = temp01[6].split(/\s{2,}/);
    var aux08 = temp01[7].split(/\s{2,}/);
    var aux09 = temp01[8].split(/\s{2,}/);
    var aux10 = temp01[9].split(/\s{2,}/);
    var aux11 = temp01[10].split(/\s{2,}/);
    var aux12 = temp01[11].split(/\s{2,}/);
    var aux13 = temp01[12].split(/\s{2,}/);
    var aux14 = temp01[13].split(/\s{2,}/);
    var aux15 = temp01[14].split(/\s{2,}/);
    var aux16 = temp01[15].split(/\s{2,}/);
    var aux17 = temp01[16].split(/\s{2,}/);
    var aux18 = temp01[17].split(/\s{2,}/);
    var aux19 = temp01[18].split(/\s{2,}/);
    var aux20 = temp01[19].split(/\s{2,}/);
    var aux21 = temp01[20].split(/\s{2,}/);
    var aux22 = temp01[21].split(/\s{2,}/);
    var aux23 = temp01[22].split(/\s{2,}/);
    var aux24 = temp01[23].split(/\s{2,}/);
    var aux25 = temp01[24].split(/\s{2,}/);
    var aux26 = temp01[25].split(/\s{2,}/);
    var aux27 = temp01[26].split(/\s{2,}/);
    var aux28 = temp01[27].split(/\s{2,}/);
    var aux29 = temp01[28].split(/\s{2,}/);
    var aux30 = temp01[29].split(/\s{2,}/);
    var aux31 = temp01[30].split(/\s{2,}/);
    var aux32 = temp01[31].split(/\s{2,}/);
    var aux33 = temp01[32].split(/\s{2,}/);

    /* .......Para eliminar os espaços vazios, pontos, caracter 'D' 
    em números e substituir ',' por '.' ...... */

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

    /* ...........2a Página............ */
    //Para separar os elementos pelo caracter espaço a partir de dois espaços
    var aux34 = temp02[0].split(/\s{2,}/);
    var aux35 = temp02[1].split(/\s{2,}/);
    var aux36 = temp02[2].split(/\s{2,}/);
    var aux37 = temp02[3].split(/\s{2,}/);
    var aux38 = temp02[4].split(/\s{2,}/);
    var aux39 = temp02[5].split(/\s{2,}/);
    var aux40 = temp02[6].split(/\s{2,}/);
    var aux41 = temp02[7].split(/\s{2,}/);
    var aux42 = temp02[8].split(/\s{2,}/);
    var aux43 = temp02[9].split(/\s{2,}/);
    var aux44 = temp02[10].split(/\s{2,}/);
    var aux45 = temp02[11].split(/\s{2,}/);
    var aux46 = temp02[12].split(/\s{2,}/);

    /* .......Para eliminar os espaços vazios, pontos, caracter 'D' 
    em números e substituir ',' por '.' ...... */

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

    //linha40
    var vec40 = [];
    vec40 = aux40.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line40 = [];
    for (let i = 0; i < vec40.length; i++) {
      if (vec40[i] != "") {
        line40.push(
          vec40[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha41
    var vec41 = [];
    vec41 = aux41.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line41 = [];
    for (let i = 0; i < vec41.length; i++) {
      if (vec41[i] != "") {
        line41.push(
          vec41[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha42
    var vec42 = [];
    vec42 = aux42.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line42 = [];
    for (let i = 0; i < vec42.length; i++) {
      if (vec42[i] != "") {
        line42.push(
          vec42[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha43
    var vec43 = [];
    vec43 = aux43.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line43 = [];
    for (let i = 0; i < vec43.length; i++) {
      if (vec43[i] != "") {
        line43.push(
          vec43[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha44
    var vec44 = [];
    vec44 = aux44.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line44 = [];
    for (let i = 0; i < vec44.length; i++) {
      if (vec44[i] != "") {
        line44.push(
          vec44[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha45
    var vec45 = [];
    vec45 = aux45.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line45 = [];
    for (let i = 0; i < vec45.length; i++) {
      if (vec45[i] != "") {
        line45.push(
          vec45[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha46
    var vec46 = [];
    vec46 = aux46.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line46 = [];
    for (let i = 0; i < vec46.length; i++) {
      if (vec46[i] != "") {
        line46.push(
          vec46[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    /* ...........3a Página............ */
    //Para separar os elementos pelo caracter espaço a partir de dois espaços
    var aux47 = temp03[0].split(/\s{2,}/);
    var aux48 = temp03[1].split(/\s{2,}/);
    var aux49 = temp03[2].split(/\s{2,}/);
    var aux50 = temp03[3].split(/\s{2,}/);
    var aux51 = temp03[4].split(/\s{2,}/);
    var aux52 = temp03[5].split(/\s{2,}/);
    var aux53 = temp03[6].split(/\s{2,}/);
    var aux54 = temp03[7].split(/\s{2,}/);
    var aux55 = temp03[8].split(/\s{2,}/);
    var aux56 = temp03[9].split(/\s{2,}/);
    var aux57 = temp03[10].split(/\s{2,}/);
    var aux58 = temp03[11].split(/\s{2,}/);
    var aux59 = temp03[12].split(/\s{2,}/);

    /* .......Para eliminar os espaços vazios, pontos, caracter 'D' 
    em números e substituir ',' por '.' ...... */

    //linha47
    var vec47 = [];
    vec47 = aux47.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line47 = [];
    for (let i = 0; i < vec47.length; i++) {
      if (vec47[i] != "") {
        line47.push(
          vec47[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha48
    var vec48 = [];
    vec48 = aux48.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line48 = [];
    for (let i = 0; i < vec48.length; i++) {
      if (vec48[i] != "") {
        line48.push(
          vec48[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha49
    var vec49 = [];
    vec49 = aux49.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line49 = [];
    for (let i = 0; i < vec49.length; i++) {
      if (vec49[i] != "") {
        line49.push(
          vec49[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha50
    var vec50 = [];
    vec50 = aux50.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line50 = [];
    for (let i = 0; i < vec50.length; i++) {
      if (vec50[i] != "") {
        line50.push(
          vec50[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha51
    var vec51 = [];
    vec51 = aux51.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line51 = [];
    for (let i = 0; i < vec51.length; i++) {
      if (vec51[i] != "") {
        line51.push(
          vec51[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha52
    var vec52 = [];
    vec52 = aux52.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line52 = [];
    for (let i = 0; i < vec52.length; i++) {
      if (vec52[i] != "") {
        line52.push(
          vec52[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha53
    var vec53 = [];
    vec53 = aux53.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line53 = [];
    for (let i = 0; i < vec53.length; i++) {
      if (vec53[i] != "") {
        line53.push(
          vec53[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha54
    var vec54 = [];
    vec54 = aux54.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line54 = [];
    for (let i = 0; i < vec54.length; i++) {
      if (vec54[i] != "") {
        line54.push(
          vec54[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha55
    var vec55 = [];
    vec55 = aux55.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line55 = [];
    for (let i = 0; i < vec55.length; i++) {
      if (vec55[i] != "") {
        line55.push(
          vec55[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha56
    var vec56 = [];
    vec56 = aux56.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line56 = [];
    for (let i = 0; i < vec56.length; i++) {
      if (vec56[i] != "") {
        line56.push(
          vec56[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha57
    var vec57 = [];
    vec57 = aux57.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line57 = [];
    for (let i = 0; i < vec57.length; i++) {
      if (vec57[i] != "") {
        line57.push(
          vec57[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha58
    var vec58 = [];
    vec58 = aux58.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line58 = [];
    for (let i = 0; i < vec58.length; i++) {
      if (vec58[i] != "") {
        line58.push(
          vec58[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    //linha59
    var vec59 = [];
    vec59 = aux59.filter((elemento, indice, array) => {
      return elemento != "D" && elemento != "C";
    });

    var line59 = [];
    for (let i = 0; i < vec59.length; i++) {
      if (vec59[i] != "") {
        line59.push(
          vec59[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }

    /* .....Output o formato JSON...... */
    let result = [
      {
        access: line01[0],
        description: line01[2],
        classifier: line01[1],
        openingBalance: JSON.parse(line01[3]),
        debit: JSON.parse(line01[4]),
        credit: JSON.parse(line01[5]),
        finalBalance: JSON.parse(line01[6]),
        parent: null
      },
      {
        access: line02[0],
        description: line02[2],
        classifier: line02[1],
        openingBalance: JSON.parse(line02[3]),
        debit: JSON.parse(line02[4]),
        credit: JSON.parse(line02[5]),
        finalBalance: JSON.parse(line02[6]),
        parent: null
      },
      {
        access: line03[0],
        description: line03[2],
        classifier: line03[1],
        openingBalance: JSON.parse(line03[3]),
        debit: JSON.parse(line03[4]),
        credit: JSON.parse(line03[5]),
        finalBalance: JSON.parse(line03[6]),
        parent: null
      },
      {
        access: line04[0],
        description: line04[2],
        classifier: line04[1],
        openingBalance: JSON.parse(line04[3]),
        debit: JSON.parse(line04[4]),
        credit: JSON.parse(line04[5]),
        finalBalance: JSON.parse(line04[6]),
        parent: null
      },
      {
        access: line05[0],
        description: line05[2],
        classifier: line05[1],
        openingBalance: JSON.parse(line05[3]),
        debit: JSON.parse(line05[4]),
        credit: JSON.parse(line05[5]),
        finalBalance: JSON.parse(line05[6]),
        parent: null
      },
      {
        access: line06[0],
        description: line06[2],
        classifier: line06[1],
        openingBalance: JSON.parse(line06[3]),
        debit: JSON.parse(line06[4]),
        credit: JSON.parse(line06[5]),
        finalBalance: JSON.parse(line06[6]),
        parent: null
      },
      {
        access: line07[0],
        description: line07[2],
        classifier: line07[1],
        openingBalance: JSON.parse(line07[3]),
        debit: JSON.parse(line07[4]),
        credit: JSON.parse(line07[5]),
        finalBalance: JSON.parse(line07[6]),
        parent: null
      },
      {
        access: line08[0],
        description: line08[2],
        classifier: line08[1],
        openingBalance: JSON.parse(line08[3]),
        debit: JSON.parse(line08[4]),
        credit: JSON.parse(line08[5]),
        finalBalance: JSON.parse(line08[6]),
        parent: null
      },
      {
        access: line09[0],
        description: line09[2],
        classifier: line09[1],
        openingBalance: JSON.parse(line09[3]),
        debit: JSON.parse(line09[4]),
        credit: JSON.parse(line09[5]),
        finalBalance: JSON.parse(line09[6]),
        parent: null
      },
      {
        access: line10[0],
        description: line10[2],
        classifier: line10[1],
        openingBalance: JSON.parse(line10[3]),
        debit: JSON.parse(line10[4]),
        credit: JSON.parse(line10[5]),
        finalBalance: JSON.parse(line10[6]),
        parent: null
      },
      {
        access: line11[0],
        description: line11[2],
        classifier: line11[1],
        openingBalance: JSON.parse(line11[3]),
        debit: JSON.parse(line11[4]),
        credit: JSON.parse(line11[5]),
        finalBalance: JSON.parse(line11[6]),
        parent: null
      },
      {
        access: line12[0],
        description: line12[2],
        classifier: line12[1],
        openingBalance: JSON.parse(line12[3]),
        debit: JSON.parse(line12[4]),
        credit: JSON.parse(line12[5]),
        finalBalance: JSON.parse(line12[6]),
        parent: null
      },
      {
        access: line13[0],
        description: line13[2],
        classifier: line13[1],
        openingBalance: JSON.parse(line13[3]),
        debit: JSON.parse(line13[4]),
        credit: JSON.parse(line13[5]),
        finalBalance: JSON.parse(line13[6]),
        parent: null
      },
      {
        access: line14[0],
        description: line14[2],
        classifier: line14[1],
        openingBalance: JSON.parse(line14[3]),
        debit: JSON.parse(line14[4]),
        credit: JSON.parse(line14[5]),
        finalBalance: JSON.parse(line14[6]),
        parent: null
      },
      {
        access: line15[0],
        description: line15[2],
        classifier: line15[1],
        openingBalance: JSON.parse(line15[3]),
        debit: JSON.parse(line15[4]),
        credit: JSON.parse(line15[5]),
        finalBalance: JSON.parse(line15[6]),
        parent: null
      },
      {
        access: line16[0],
        description: line16[2],
        classifier: line16[1],
        openingBalance: JSON.parse(line16[3]),
        debit: JSON.parse(line16[4]),
        credit: JSON.parse(line16[5]),
        finalBalance: JSON.parse(line16[6]),
        parent: null
      },
      {
        access: line17[0],
        description: line17[2],
        classifier: line17[1],
        openingBalance: JSON.parse(line17[3]),
        debit: JSON.parse(line17[4]),
        credit: JSON.parse(line17[5]),
        finalBalance: JSON.parse(line17[6]),
        parent: null
      },
      {
        access: line18[0],
        description: line18[2],
        classifier: line18[1],
        openingBalance: JSON.parse(line18[3]),
        debit: JSON.parse(line18[4]),
        credit: JSON.parse(line18[5]),
        finalBalance: JSON.parse(line18[6]),
        parent: null
      },
      {
        access: line19[0],
        description: line19[2],
        classifier: line19[1],
        openingBalance: JSON.parse(line19[3]),
        debit: JSON.parse(line19[4]),
        credit: JSON.parse(line19[5]),
        finalBalance: JSON.parse(line19[6]),
        parent: null
      },
      {
        access: line20[0],
        description: line20[2],
        classifier: line20[1],
        openingBalance: JSON.parse(line20[3]),
        debit: JSON.parse(line20[4]),
        credit: JSON.parse(line20[5]),
        finalBalance: JSON.parse(line20[6]),
        parent: null
      },
      {
        access: line21[0],
        description: line21[2],
        classifier: line21[1],
        openingBalance: JSON.parse(line21[3]),
        debit: JSON.parse(line21[4]),
        credit: JSON.parse(line21[5]),
        finalBalance: JSON.parse(line21[6]),
        parent: null
      },
      {
        access: line22[0],
        description: line22[2],
        classifier: line22[1],
        openingBalance: JSON.parse(line22[3]),
        debit: JSON.parse(line22[4]),
        credit: JSON.parse(line22[5]),
        finalBalance: JSON.parse(line22[6]),
        parent: null
      },
      {
        access: line23[0],
        description: line23[2],
        classifier: line23[1],
        openingBalance: JSON.parse(line23[3]),
        debit: JSON.parse(line23[4]),
        credit: JSON.parse(line23[5]),
        finalBalance: JSON.parse(line23[6]),
        parent: null
      },
      {
        access: line24[0],
        description: line24[2],
        classifier: line24[1],
        openingBalance: JSON.parse(line24[3]),
        debit: JSON.parse(line24[4]),
        credit: JSON.parse(line24[5]),
        finalBalance: JSON.parse(line24[6]),
        parent: null
      },
      {
        access: line25[0],
        description: line25[2],
        classifier: line25[1],
        openingBalance: JSON.parse(line25[3]),
        debit: JSON.parse(line25[4]),
        credit: JSON.parse(line25[5]),
        finalBalance: JSON.parse(line25[6]),
        parent: null
      },
      {
        access: line26[0],
        description: line26[2],
        classifier: line26[1],
        openingBalance: JSON.parse(line26[3]),
        debit: JSON.parse(line26[4]),
        credit: JSON.parse(line26[5]),
        finalBalance: JSON.parse(line26[6]),
        parent: null
      },
      {
        access: line27[0],
        description: line27[2],
        classifier: line27[1],
        openingBalance: JSON.parse(line27[3]),
        debit: JSON.parse(line27[4]),
        credit: JSON.parse(line27[5]),
        finalBalance: JSON.parse(line27[6]),
        parent: null
      },
      {
        access: line28[0],
        description: line28[2],
        classifier: line28[1],
        openingBalance: JSON.parse(line28[3]),
        debit: JSON.parse(line28[4]),
        credit: JSON.parse(line28[5]),
        finalBalance: JSON.parse(line28[6]),
        parent: null
      },
      {
        access: line29[0],
        description: line29[2],
        classifier: line29[1],
        openingBalance: JSON.parse(line29[3]),
        debit: JSON.parse(line29[4]),
        credit: JSON.parse(line29[5]),
        finalBalance: JSON.parse(line29[6]),
        parent: null
      },
      {
        access: line30[0],
        description: line30[2],
        classifier: line30[1],
        openingBalance: JSON.parse(line30[3]),
        debit: JSON.parse(line30[4]),
        credit: JSON.parse(line30[5]),
        finalBalance: JSON.parse(line30[6]),
        parent: null
      },
      {
        access: line31[0],
        description: line31[2],
        classifier: line31[1],
        openingBalance: JSON.parse(line31[3]),
        debit: JSON.parse(line31[4]),
        credit: JSON.parse(line31[5]),
        finalBalance: JSON.parse(line31[6]),
        parent: null
      },
      {
        access: line32[0],
        description: line32[2],
        classifier: line32[1],
        openingBalance: JSON.parse(line32[3]),
        debit: JSON.parse(line32[4]),
        credit: JSON.parse(line32[5]),
        finalBalance: JSON.parse(line32[6]),
        parent: null
      },
      {
        access: line33[0],
        description: line33[2],
        classifier: line33[1],
        openingBalance: JSON.parse(line33[3]),
        debit: JSON.parse(line33[4]),
        credit: JSON.parse(line33[5]),
        finalBalance: JSON.parse(line33[6]),
        parent: null
      },
      {
        access: line34[0],
        description: line34[2],
        classifier: line34[1],
        openingBalance: JSON.parse(line34[3]),
        debit: JSON.parse(line34[4]),
        credit: JSON.parse(line34[5]),
        finalBalance: JSON.parse(line34[6]),
        parent: null
      },
      {
        access: line35[0],
        description: line35[2],
        classifier: line35[1],
        openingBalance: JSON.parse(line35[3]),
        debit: JSON.parse(line35[4]),
        credit: JSON.parse(line35[5]),
        finalBalance: JSON.parse(line35[6]),
        parent: null
      },
      {
        access: line36[0],
        description: line36[2],
        classifier: line36[1],
        openingBalance: JSON.parse(line36[3]),
        debit: JSON.parse(line36[4]),
        credit: JSON.parse(line36[5]),
        finalBalance: JSON.parse(line36[6]),
        parent: null
      },
      {
        access: line37[0],
        description: line37[2],
        classifier: line37[1],
        openingBalance: JSON.parse(line37[3]),
        debit: JSON.parse(line37[4]),
        credit: JSON.parse(line37[5]),
        finalBalance: JSON.parse(line37[6]),
        parent: null
      },
      {
        access: line38[0],
        description: line38[2],
        classifier: line38[1],
        openingBalance: JSON.parse(line38[3]),
        debit: JSON.parse(line38[4]),
        credit: JSON.parse(line38[5]),
        finalBalance: JSON.parse(line38[6]),
        parent: null
      },
      {
        access: line39[0],
        description: line39[2],
        classifier: line39[1],
        openingBalance: JSON.parse(line39[3]),
        debit: JSON.parse(line39[4]),
        credit: JSON.parse(line39[5]),
        finalBalance: JSON.parse(line39[6]),
        parent: null
      },
      {
        access: line40[0],
        description: line40[2],
        classifier: line40[1],
        openingBalance: JSON.parse(line40[3]),
        debit: JSON.parse(line40[4]),
        credit: JSON.parse(line40[5]),
        finalBalance: JSON.parse(line40[6]),
        parent: null
      },
      {
        access: line41[0],
        description: line41[2],
        classifier: line41[1],
        openingBalance: JSON.parse(line41[3]),
        debit: JSON.parse(line41[4]),
        credit: JSON.parse(line41[5]),
        finalBalance: JSON.parse(line41[6]),
        parent: null
      },
      {
        access: line42[0],
        description: line42[2],
        classifier: line42[1],
        openingBalance: JSON.parse(line42[3]),
        debit: JSON.parse(line42[4]),
        credit: JSON.parse(line42[5]),
        finalBalance: JSON.parse(line42[6]),
        parent: null
      },
      {
        access: line43[0],
        description: line43[2],
        classifier: line43[1],
        openingBalance: JSON.parse(line43[3]),
        debit: JSON.parse(line43[4]),
        credit: JSON.parse(line43[5]),
        finalBalance: JSON.parse(line43[6]),
        parent: null
      },
      {
        access: line44[0],
        description: line44[2],
        classifier: line44[1],
        openingBalance: JSON.parse(line44[3]),
        debit: JSON.parse(line44[4]),
        credit: JSON.parse(line44[5]),
        finalBalance: JSON.parse(line44[6]),
        parent: null
      },
      {
        access: line45[0],
        description: line45[2],
        classifier: line45[1],
        openingBalance: JSON.parse(line45[3]),
        debit: JSON.parse(line45[4]),
        credit: JSON.parse(line45[5]),
        finalBalance: JSON.parse(line45[6]),
        parent: null
      },
      {
        access: line46[0],
        description: line46[2],
        classifier: line46[1],
        openingBalance: JSON.parse(line46[3]),
        debit: JSON.parse(line46[4]),
        credit: JSON.parse(line46[5]),
        finalBalance: JSON.parse(line46[6]),
        parent: null
      },
      {
        access: line47[0],
        description: line47[2],
        classifier: line47[1],
        openingBalance: JSON.parse(line47[3]),
        debit: JSON.parse(line47[4]),
        credit: JSON.parse(line47[5]),
        finalBalance: JSON.parse(line47[6]),
        parent: null
      },
      {
        access: line48[0],
        description: line48[2],
        classifier: line48[1],
        openingBalance: JSON.parse(line48[3]),
        debit: JSON.parse(line48[4]),
        credit: JSON.parse(line48[5]),
        finalBalance: JSON.parse(line48[6]),
        parent: null
      },
      {
        access: line49[0],
        description: line49[2],
        classifier: line49[1],
        openingBalance: JSON.parse(line49[3]),
        debit: JSON.parse(line49[4]),
        credit: JSON.parse(line49[5]),
        finalBalance: JSON.parse(line49[6]),
        parent: null
      },
      {
        access: line50[0],
        description: line50[2],
        classifier: line50[1],
        openingBalance: JSON.parse(line50[3]),
        debit: JSON.parse(line50[4]),
        credit: JSON.parse(line50[5]),
        finalBalance: JSON.parse(line50[6]),
        parent: null
      },
      {
        access: line51[0],
        description: line51[2],
        classifier: line51[1],
        openingBalance: JSON.parse(line51[3]),
        debit: JSON.parse(line51[4]),
        credit: JSON.parse(line51[5]),
        finalBalance: JSON.parse(line51[6]),
        parent: null
      },
      {
        access: line52[0],
        description: line52[2],
        classifier: line52[1],
        openingBalance: JSON.parse(line52[3]),
        debit: JSON.parse(line52[4]),
        credit: JSON.parse(line52[5]),
        finalBalance: JSON.parse(line52[6]),
        parent: null
      },
      {
        access: line53[0],
        description: line53[2],
        classifier: line53[1],
        openingBalance: JSON.parse(line53[3]),
        debit: JSON.parse(line53[4]),
        credit: JSON.parse(line53[5]),
        finalBalance: JSON.parse(line53[6]),
        parent: null
      },
      {
        access: line54[0],
        description: line54[2],
        classifier: line54[1],
        openingBalance: JSON.parse(line54[3]),
        debit: JSON.parse(line54[4]),
        credit: JSON.parse(line54[5]),
        finalBalance: JSON.parse(line54[6]),
        parent: null
      },
      {
        access: line55[0],
        description: line55[2],
        classifier: line55[1],
        openingBalance: JSON.parse(line55[3]),
        debit: JSON.parse(line55[4]),
        credit: JSON.parse(line55[5]),
        finalBalance: JSON.parse(line55[6]),
        parent: null
      },
      {
        access: line56[0],
        description: line56[2],
        classifier: line56[1],
        openingBalance: JSON.parse(line56[3]),
        debit: JSON.parse(line56[4]),
        credit: JSON.parse(line56[5]),
        finalBalance: JSON.parse(line56[6]),
        parent: null
      },
      {
        access: line57[0],
        description: line57[2],
        classifier: line57[1],
        openingBalance: JSON.parse(line57[3]),
        debit: JSON.parse(line57[4]),
        credit: JSON.parse(line57[5]),
        finalBalance: JSON.parse(line57[6]),
        parent: null
      },
      {
        access: line58[0],
        description: line58[2],
        classifier: line58[1],
        openingBalance: JSON.parse(line58[3]),
        debit: JSON.parse(line58[4]),
        credit: JSON.parse(line58[5]),
        finalBalance: JSON.parse(line58[6]),
        parent: null
      },
      {
        access: line59[0],
        description: line59[2],
        classifier: line59[1],
        openingBalance: JSON.parse(line59[3]),
        debit: JSON.parse(line59[4]),
        credit: JSON.parse(line59[5]),
        finalBalance: null,
        parent: null
      }
    ];

    return JSON.stringify(result);
  }
}

const input = `Balancete Analitico (Valores em Reais)                                                                                 Folha:  00001
  ------------------------------------------------------------------------------------------------------------------------------------
  TESLA, INC.                       (0619)
  CNPJ/CPF: 99.999.999/9999-9
  End: 3500 Deer Creek Road
  Municipio: Palo Alto                          UF: CA                                                         Emitido em: 28/02/2017
  Periodo: Fevereiro de 2017                Data do encerramento: 28/02/2017      NIRE: 9999999999-9
  ------------------------------------------------------------------------------------------------------------------------------------
  Acesso Classificador   Nome da Conta                            C/Cust  Saldo Inicial     Mov.Debito    Mov.Credito     Saldo Final
  ------------------------------------------------------------------------------------------------------------------------------------
  
  10000  1000000000      A T I V O                                        5.869.359,63   13.988.798,89  14.478.791,43   5.379.367,09
  
  11000  1100000000       CIRCULANTE                                      4.701.531,18   13.988.798,89  14.443.148,60   4.247.181,47
  
  11100  1101000000        CAIXA E EQUIVALENTES DE CAIXA                    254.315,84    1.502.516,19   1.449.152,65     307.679,38
  11110  1101010000         CAIXA                                           254.315,84    1.502.516,19   1.449.152,65     307.679,38
  
  11200  1102000000        BANCOS CONTA MOVIMENTO                            42.541,31    4.404.940,62   4.382.382,38      65.099,55
  11202  1102010100          BANCO DO BRASIL SA                              31.863,66    4.095.200,13   4.079.980,54      47.083,25
  11212  1102010200          BRADESCO SA                                          1,00       29.541,04      29.541,04           1,00
  11203  1102010300          DEPOSITOS BLOQUEADOS                            10.676,65      280.199,45     272.860,80      18.015,30
  
  11300  1103000000        APLICACOES FINANCEIRAS                         1.023.089,20    1.301.945,90   1.645.374,78     679.660,32
  11302  1103010200          B.DO BRASIL SA - BB RF CP AUT                  906.447,85    1.301.849,61   1.617.191,74     591.105,72
  11312  1103010300          BRADESCO                                       116.641,35           96,29      28.183,04      88.554,60
  
  11401  1106000000        CONTAS A RECEBER                                 805.615,48    2.443.445,35   2.618.639,90     630.420,93
  11411  1106010000         CLIENTES DIVERSOS                               805.615,48    2.443.445,35   2.618.639,90     630.420,93
  
  11500  1108000000        IMPOSTOS A RECUPERAR                             184.079,12      219.588,86     215.558,27     188.109,71
  11523  1108010100          COFINS A RECUPERAR                                   0,00      178.902,53     173.219,25       5.683,28
  11515  1108010200          COFINS RETIDO                                       25,65            1,37          27,02           0,00
  11513  1108010300          CONTRIB.SOCIAL TRIMESTRAL                        2.329,53          127,45       1.264,66       1.192,32
  11505  1108010400          CONTRIBUICAO SOCIAL RETIDA                           6,24            0,00           6,24           0,00
  11501  1108010500          I.C.M.S.                                        89.294,31            0,83          82,71      89.212,43
  11508  1108010600          I.C.M.S. S/IMOBILIZADO                          83.157,46            0,00       3.381,20      79.776,26
  11511  1108010700          I.R.P.J. TRIMESTRAL                              7.231,88            0,00           0,00       7.231,88
  11503  1108010800          I.R.R.F.                                         2.023,28        1.756,39           0,00       3.779,67
  11522  1108010900          P.I.S A RECUPERAR                                    0,00       38.800,29      37.566,42       1.233,87
  11510  1108011000          P.I.S RETIDO                                        10,77            0,00          10,77           0,00
  
  11700  1110000000        ADIANTAMENTOS                                    231.193,75    2.164.088,62   1.972.323,81     422.958,56
  11702  1110010100          EMPREGADOS                                           0,00       17.609,68      17.283,75         325,93
  11703  1110010200          FERIAS                                          12.501,71        5.212,47      12.444,39       5.269,79
  11701  1110010300          FORNECEDORES                                   218.692,04    2.141.266,47   1.942.595,67     417.362,84
  
  11800  1111000000        ESTOQUES                                       2.159.468,32    1.952.273,35   2.159.468,32   1.952.273,35
  11804  1111010000         MERCADORIAS PARA REVENDA                      2.159.468,32    1.952.273,35   2.159.468,32   1.952.273,35
  
  11950  1115000000        DESPESAS DO EXERC.SEGUINTE                         1.228,16            0,00         248,49         979,67
  11951  1115010000         PREMIOS DE SEGUROS                                1.228,16            0,00         248,49         979,67
  
  12000  1200000000       NAO-CIRCULANTE                                  1.167.828,45            0,00      35.642,83   1.132.185,62
  
  Balancete Analitico (Valores em Reais)                                                                                 Folha:  00002
  ------------------------------------------------------------------------------------------------------------------------------------
  TESLA, INC.                       (0619)
  CNPJ/CPF: 99.999.999/9999-9
  End: 3500 Deer Creek Road
  Municipio: Palo Alto                          UF: CA                                                         Emitido em: 28/02/2017
  Periodo: Fevereiro de 2017                Data do encerramento: 28/02/2017      NIRE: 9999999999-9
  ------------------------------------------------------------------------------------------------------------------------------------
  Acesso Classificador   Nome da Conta                            C/Cust  Saldo Inicial     Mov.Debito    Mov.Credito     Saldo Final
  ------------------------------------------------------------------------------------------------------------------------------------
  
  12100  1202000000        CONTAS E TITULOS A RECEBER                        11.000,00            0,00           0,00      11.000,00
  13460  1202010000         TITULOS CAPITALIZACAO                            11.000,00            0,00           0,00      11.000,00
  
  13200  1205000000        IMOBILIZADO                                    1.999.948,97            0,00           0,00   1.999.948,97
  13204  1205010100          EQUIPAMENTOS                                    23.140,45            0,00           0,00      23.140,45
  13208  1205010200          MAQUINARIO                                     224.400,00            0,00           0,00     224.400,00
  13205  1205010300          MOVEIS E UTENSILIOS                             36.338,12            0,00           0,00      36.338,12
  13207  1205010400          VASILHAME                                       91.255,01            0,00           0,00      91.255,01
  13206  1205010500          VEICULOS                                     1.624.815,39            0,00           0,00   1.624.815,39
  
  13300  1206000000        DEPRECIACAO ACUMULADA                           -843.120,52            0,00      35.642,83    -878.763,35
  13304  1206010100          DEPR.ACUM.-EQUIPAMENTOS                         -5.397,95            0,00         347,52      -5.745,47
  13308  1206010200          DEPR.ACUM.-MAQUINARIO                          -51.168,45            0,00       1.869,90     -53.038,35
  13305  1206010300          DEPR.ACUM.-MOV.E UTENSILIOS                     -2.718,45            0,00         302,79      -3.021,24
  13306  1206010400          DEPR.ACUM.-VEICULOS                           -783.835,67            0,00      33.122,62    -816.958,29
  
  Balancete Analitico (Valores em Reais)                                                                                 Folha:  00003
  ------------------------------------------------------------------------------------------------------------------------------------
  TESLA, INC.                       (0619)
  CNPJ/CPF: 99.999.999/9999-9
  End: 3500 Deer Creek Road
  Municipio: Palo Alto                          UF: CA                                                         Emitido em: 28/02/2017
  Periodo: Fevereiro de 2017                Data do encerramento: 28/02/2017      NIRE: 9999999999-9
  ------------------------------------------------------------------------------------------------------------------------------------
  Acesso Classificador   Nome da Conta                            C/Cust  Saldo Inicial     Mov.Debito    Mov.Credito     Saldo Final
  ------------------------------------------------------------------------------------------------------------------------------------
  
  20000  2000000000      P A S S I V O                                    5.869.359,63      967.949,40     835.447,46   5.736.857,69
  
  20001  2100000000       CIRCULANTE                                        852.890,36      942.948,91     835.447,46     745.388,91
  
  20002  2101000000        FORNECEDORES                                     194.005,11      470.136,21     450.880,32     174.749,22
  20004  2101010000         FORNECEDORES DIVERSOS                           194.005,11      470.136,21     450.880,32     174.749,22
  
  21800  2102000000        EMPRESTIMOS E FINANCIAMENTOS                     441.601,81       21.358,31           0,00     420.243,50
  21803  2102010100          FINAME BD CAMINHAO 9999999-9                    43.579,02        1.894,74           0,00      41.684,28
  21804  2102010200          FINAME BD CAMINHAO 9999999-9                    72.718,41        3.161,67           0,00      69.556,74
  21806  2102010300          FINAME BD CAMINHAO 9999999-9                   167.739,00        7.293,00           0,00     160.446,00
  21810  2102010400          FINAME BD CAMINHAO 9999999-9                    24.333,30        2.212,12           0,00      22.121,18
  21809  2102010500          FINAME BNDES RAFER 99999/99999                  16.190,16          703,92           0,00      15.486,24
  21805  2102010600          FINAME BNDES SAVEIRO CROSS                      23.640,31        1.125,74           0,00      22.514,57
  21807  2102010700          FINAME EMPILHADEIRA 9999999-9                   26.659,07        1.159,09           0,00      25.499,98
  21808  2102010800          FINAME EMPILHADEIRA 9999999-9                   66.742,54        3.808,03           0,00`;

t = new Transform();
console.log(t.manipulation(input));
