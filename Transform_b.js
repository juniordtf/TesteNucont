class Transform {
  manipulation(input) {
    //Para colocar cada linha em um array
    var temp = input.split(/\n/);

    //Para eliminar linhas vazias
    var notnull = [];
    notnull = temp.filter((elemento, indice, array) => {
      return elemento != 0;
    });

    //Para separar os elementos pelo caracter espaço a partir de dois espaços
    var aux01 = notnull[0].split(/\s{2,}/);
    var aux02 = notnull[1].split(/\s{2,}/);
    var aux03 = notnull[2].split(/\s{2,}/);
    var aux04 = notnull[3].split(/\s{2,}/);
    var aux05 = notnull[4].split(/\s{2,}/);
    var aux06 = notnull[5].split(/\s{2,}/);
    var aux07 = notnull[6].split(/\s{2,}/);
    var aux08 = notnull[7].split(/\s{2,}/);
    var aux09 = notnull[8].split(/\s{2,}/);
    var aux10 = notnull[9].split(/\s{2,}/);
    var aux11 = notnull[10].split(/\s{2,}/);
    var aux12 = notnull[11].split(/\s{2,}/);
    var aux13 = notnull[12].split(/\s{2,}/);
    var aux14 = notnull[13].split(/\s{2,}/);
    var aux15 = notnull[14].split(/\s{2,}/);
    var aux16 = notnull[15].split(/\s{2,}/);
    var aux17 = notnull[16].split(/\s{2,}/);
    var aux18 = notnull[17].split(/\s{2,}/);
    var aux19 = notnull[18].split(/\s{2,}/);
    var aux20 = notnull[19].split(/\s{2,}/);
    var aux21 = notnull[20].split(/\s{2,}/);
    var aux22 = notnull[21].split(/\s{2,}/);
    var aux23 = notnull[22].split(/\s{2,}/);
    var aux24 = notnull[23].split(/\s{2,}/);
    var aux25 = notnull[24].split(/\s{2,}/);
    var aux26 = notnull[25].split(/\s{2,}/);
    var aux27 = notnull[26].split(/\s{2,}/);
    var aux28 = notnull[27].split(/\s{2,}/);
    var aux29 = notnull[28].split(/\s{2,}/);
    var aux30 = notnull[29].split(/\s{2,}/);
    var aux31 = notnull[30].split(/\s{2,}/);
    var aux32 = notnull[31].split(/\s{2,}/);
    var aux33 = notnull[32].split(/\s{2,}/);
    var aux34 = notnull[33].split(/\s{2,}/);
    var aux35 = notnull[34].split(/\s{2,}/);
    var aux36 = notnull[35].split(/\s{2,}/);
    var aux37 = notnull[36].split(/\s{2,}/);
    var aux38 = notnull[37].split(/\s{2,}/);
    var aux39 = notnull[38].split(/\s{2,}/);
    var aux40 = notnull[39].split(/\s{2,}/);
    var aux41 = notnull[40].split(/\s{2,}/);
    var aux42 = notnull[41].split(/\s{2,}/);
    var aux43 = notnull[42].split(/\s{2,}/);

    /* .......Para eliminar os espaços vazios, pontos, caracter 'D' em números e substituir ',' por '.' ...... */

    //linha 01
    var vec01 = [];
    for (let i = 0; i < aux01.length; i++) {
      if (aux01[i] != "") {
        vec01.push(
          aux01[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line01 = [];
    for (let i = 0; i < vec01.length; i++) {
      if (vec01[i].endsWith("D")) {
        line01.push(vec01[i].replace("D", ""));
      } else if (vec01[i].endsWith("C")) {
        line01.push(vec01[i].replace("C", ""));
      } else {
        line01.push(vec01[i]);
      }
    }

    //linha02
    var vec02 = [];
    for (let i = 0; i < aux02.length; i++) {
      if (aux02[i] != "") {
        vec02.push(
          aux02[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line02 = [];
    for (let i = 0; i < vec02.length; i++) {
      if (vec02[i].endsWith("D")) {
        line02.push(vec02[i].replace("D", ""));
      } else if (vec02[i].endsWith("C")) {
        line02.push(vec02[i].replace("C", ""));
      } else {
        line02.push(vec02[i]);
      }
    }

    //linha03
    var vec03 = [];
    for (let i = 0; i < aux03.length; i++) {
      if (aux03[i] != "") {
        vec03.push(
          aux03[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line03 = [];
    for (let i = 0; i < vec03.length; i++) {
      if (vec03[i].endsWith("D")) {
        line03.push(vec03[i].replace("D", ""));
      } else if (vec03[i].endsWith("C")) {
        line03.push(vec03[i].replace("C", ""));
      } else {
        line03.push(vec03[i]);
      }
    }

    //linha04
    var vec04 = [];
    for (let i = 0; i < aux04.length; i++) {
      if (aux04[i] != "") {
        vec04.push(
          aux04[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line04 = [];
    for (let i = 0; i < vec04.length; i++) {
      if (vec04[i].endsWith("D")) {
        line04.push(vec04[i].replace("D", ""));
      } else if (vec04[i].endsWith("C")) {
        line04.push(vec04[i].replace("C", ""));
      } else {
        line04.push(vec04[i]);
      }
    }

    //linha05
    var vec05 = [];
    for (let i = 0; i < aux05.length; i++) {
      if (aux05[i] != "") {
        vec05.push(
          aux05[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line05 = [];
    for (let i = 0; i < vec05.length; i++) {
      if (vec05[i].endsWith("D")) {
        line05.push(vec05[i].replace("D", ""));
      } else if (vec05[i].endsWith("C")) {
        line05.push(vec05[i].replace("C", ""));
      } else {
        line05.push(vec05[i]);
      }
    }

    //linha06
    var vec06 = [];
    for (let i = 0; i < aux06.length; i++) {
      if (aux06[i] != "") {
        vec06.push(
          aux06[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line06 = [];
    for (let i = 0; i < vec06.length; i++) {
      if (vec06[i].endsWith("D")) {
        line06.push(vec06[i].replace("D", ""));
      } else if (vec06[i].endsWith("C")) {
        line06.push(vec06[i].replace("C", ""));
      } else {
        line06.push(vec06[i]);
      }
    }

    //linha07
    var vec07 = [];
    for (let i = 0; i < aux07.length; i++) {
      if (aux07[i] != "") {
        vec07.push(
          aux07[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line07 = [];
    for (let i = 0; i < vec07.length; i++) {
      if (vec07[i].endsWith("D")) {
        line07.push(vec07[i].replace("D", ""));
      } else if (vec07[i].endsWith("C")) {
        line07.push(vec07[i].replace("C", ""));
      } else {
        line07.push(vec07[i]);
      }
    }

    //linha08
    var vec08 = [];
    for (let i = 0; i < aux08.length; i++) {
      if (aux08[i] != "") {
        vec08.push(
          aux08[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line08 = [];
    for (let i = 0; i < vec08.length; i++) {
      if (vec08[i].endsWith("D")) {
        line08.push(vec08[i].replace("D", ""));
      } else if (vec08[i].endsWith("C")) {
        line08.push(vec08[i].replace("C", ""));
      } else {
        line08.push(vec08[i]);
      }
    }

    //linha09
    var vec09 = [];
    for (let i = 0; i < aux09.length; i++) {
      if (aux09[i] != "") {
        vec09.push(
          aux09[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line09 = [];
    for (let i = 0; i < vec09.length; i++) {
      if (vec09[i].endsWith("D")) {
        line09.push(vec09[i].replace("D", ""));
      } else if (vec09[i].endsWith("C")) {
        line09.push(vec09[i].replace("C", ""));
      } else {
        line09.push(vec09[i]);
      }
    }

    //linha10
    var vec10 = [];
    for (let i = 0; i < aux10.length; i++) {
      if (aux10[i] != "") {
        vec10.push(
          aux10[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line10 = [];
    for (let i = 0; i < vec10.length; i++) {
      if (vec10[i].endsWith("D")) {
        line10.push(vec10[i].replace("D", ""));
      } else if (vec10[i].endsWith("C")) {
        line10.push(vec10[i].replace("C", ""));
      } else {
        line10.push(vec10[i]);
      }
    }

    //linha11
    var vec11 = [];
    for (let i = 0; i < aux11.length; i++) {
      if (aux11[i] != "") {
        vec11.push(
          aux11[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line11 = [];
    for (let i = 0; i < vec11.length; i++) {
      if (vec11[i].endsWith("D")) {
        line11.push(vec11[i].replace("D", ""));
      } else if (vec11[i].endsWith("C")) {
        line11.push(vec11[i].replace("C", ""));
      } else {
        line11.push(vec11[i]);
      }
    }

    //linha12
    var vec12 = [];
    for (let i = 0; i < aux12.length; i++) {
      if (aux12[i] != "") {
        vec12.push(
          aux12[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line12 = [];
    for (let i = 0; i < vec12.length; i++) {
      if (vec12[i].endsWith("D")) {
        line12.push(vec12[i].replace("D", ""));
      } else if (vec12[i].endsWith("C")) {
        line12.push(vec12[i].replace("C", ""));
      } else {
        line12.push(vec12[i]);
      }
    }

    //linha13
    var vec13 = [];
    for (let i = 0; i < aux13.length; i++) {
      if (aux13[i] != "") {
        vec13.push(
          aux13[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line13 = [];
    for (let i = 0; i < vec13.length; i++) {
      if (vec13[i].endsWith("D")) {
        line13.push(vec13[i].replace("D", ""));
      } else if (vec13[i].endsWith("C")) {
        line13.push(vec13[i].replace("C", ""));
      } else {
        line13.push(vec13[i]);
      }
    }

    //linha14
    var vec14 = [];
    for (let i = 0; i < aux14.length; i++) {
      if (aux14[i] != "") {
        vec14.push(
          aux14[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line14 = [];
    for (let i = 0; i < vec14.length; i++) {
      if (vec14[i].endsWith("D")) {
        line14.push(vec14[i].replace("D", ""));
      } else if (vec14[i].endsWith("C")) {
        line14.push(vec14[i].replace("C", ""));
      } else {
        line14.push(vec14[i]);
      }
    }

    //linha15
    var vec15 = [];
    for (let i = 0; i < aux15.length; i++) {
      if (aux15[i] != "") {
        vec15.push(
          aux15[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line15 = [];
    for (let i = 0; i < vec15.length; i++) {
      if (vec15[i].endsWith("D")) {
        line15.push(vec15[i].replace("D", ""));
      } else if (vec15[i].endsWith("C")) {
        line15.push(vec15[i].replace("C", ""));
      } else {
        line15.push(vec15[i]);
      }
    }

    //linha16
    var vec16 = [];
    for (let i = 0; i < aux16.length; i++) {
      if (aux16[i] != "") {
        vec16.push(
          aux16[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line16 = [];
    for (let i = 0; i < vec16.length; i++) {
      if (vec16[i].endsWith("D")) {
        line16.push(vec16[i].replace("D", ""));
      } else if (vec16[i].endsWith("C")) {
        line16.push(vec16[i].replace("C", ""));
      } else {
        line16.push(vec16[i]);
      }
    }

    //linha17
    var vec17 = [];
    for (let i = 0; i < aux17.length; i++) {
      if (aux17[i] != "") {
        vec17.push(
          aux17[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line17 = [];
    for (let i = 0; i < vec17.length; i++) {
      if (vec17[i].endsWith("D")) {
        line17.push(vec17[i].replace("D", ""));
      } else if (vec17[i].endsWith("C")) {
        line17.push(vec17[i].replace("C", ""));
      } else {
        line17.push(vec17[i]);
      }
    }

    //linha18
    var vec18 = [];
    for (let i = 0; i < aux18.length; i++) {
      if (aux18[i] != "") {
        vec18.push(
          aux18[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line18 = [];
    for (let i = 0; i < vec18.length; i++) {
      if (vec18[i].endsWith("D")) {
        line18.push(vec18[i].replace("D", ""));
      } else if (vec18[i].endsWith("C")) {
        line18.push(vec18[i].replace("C", ""));
      } else {
        line18.push(vec18[i]);
      }
    }

    //linha19
    var vec19 = [];
    for (let i = 0; i < aux19.length; i++) {
      if (aux19[i] != "") {
        vec19.push(
          aux19[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line19 = [];
    for (let i = 0; i < vec19.length; i++) {
      if (vec19[i].endsWith("D")) {
        line19.push(vec19[i].replace("D", ""));
      } else if (vec19[i].endsWith("C")) {
        line19.push(vec19[i].replace("C", ""));
      } else {
        line19.push(vec19[i]);
      }
    }

    //linha20
    var vec20 = [];
    for (let i = 0; i < aux20.length; i++) {
      if (aux20[i] != "") {
        vec20.push(
          aux20[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line20 = [];
    for (let i = 0; i < vec20.length; i++) {
      if (vec20[i].endsWith("D")) {
        line20.push(vec20[i].replace("D", ""));
      } else if (vec20[i].endsWith("C")) {
        line20.push(vec20[i].replace("C", ""));
      } else {
        line20.push(vec20[i]);
      }
    }

    //linha21
    var vec21 = [];
    for (let i = 0; i < aux21.length; i++) {
      if (aux21[i] != "") {
        vec21.push(
          aux21[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line21 = [];
    for (let i = 0; i < vec21.length; i++) {
      if (vec21[i].endsWith("D")) {
        line21.push(vec21[i].replace("D", ""));
      } else if (vec21[i].endsWith("C")) {
        line21.push(vec21[i].replace("C", ""));
      } else {
        line21.push(vec21[i]);
      }
    }

    //linha22
    var vec22 = [];
    for (let i = 0; i < aux22.length; i++) {
      if (aux22[i] != "") {
        vec22.push(
          aux22[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line22 = [];
    for (let i = 0; i < vec22.length; i++) {
      if (vec22[i].endsWith("D")) {
        line22.push(vec22[i].replace("D", ""));
      } else if (vec22[i].endsWith("C")) {
        line22.push(vec22[i].replace("C", ""));
      } else {
        line22.push(vec22[i]);
      }
    }

    //linha23
    var vec23 = [];
    for (let i = 0; i < aux23.length; i++) {
      if (aux23[i] != "") {
        vec23.push(
          aux23[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line23 = [];
    for (let i = 0; i < vec23.length; i++) {
      if (vec23[i].endsWith("D")) {
        line23.push(vec23[i].replace("D", ""));
      } else if (vec23[i].endsWith("C")) {
        line23.push(vec23[i].replace("C", ""));
      } else {
        line23.push(vec23[i]);
      }
    }

    //linha24
    var vec24 = [];
    for (let i = 0; i < aux24.length; i++) {
      if (aux24[i] != "") {
        vec24.push(
          aux24[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line24 = [];
    for (let i = 0; i < vec24.length; i++) {
      if (vec24[i].endsWith("D")) {
        line24.push(vec24[i].replace("D", ""));
      } else if (vec24[i].endsWith("C")) {
        line24.push(vec24[i].replace("C", ""));
      } else {
        line24.push(vec24[i]);
      }
    }

    //linha25
    var vec25 = [];
    for (let i = 0; i < aux25.length; i++) {
      if (aux25[i] != "") {
        vec25.push(
          aux25[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line25 = [];
    for (let i = 0; i < vec25.length; i++) {
      if (vec25[i].endsWith("D")) {
        line25.push(vec25[i].replace("D", ""));
      } else if (vec25[i].endsWith("C")) {
        line25.push(vec25[i].replace("C", ""));
      } else {
        line25.push(vec25[i]);
      }
    }

    //linha26
    var vec26 = [];
    for (let i = 0; i < aux26.length; i++) {
      if (aux26[i] != "") {
        vec26.push(
          aux26[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line26 = [];
    for (let i = 0; i < vec26.length; i++) {
      if (vec26[i].endsWith("D")) {
        line26.push(vec26[i].replace("D", ""));
      } else if (vec26[i].endsWith("C")) {
        line26.push(vec26[i].replace("C", ""));
      } else {
        line26.push(vec26[i]);
      }
    }

    //linha27
    var vec27 = [];
    for (let i = 0; i < aux27.length; i++) {
      if (aux27[i] != "") {
        vec27.push(
          aux27[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line27 = [];
    for (let i = 0; i < vec27.length; i++) {
      if (vec27[i].endsWith("D")) {
        line27.push(vec27[i].replace("D", ""));
      } else if (vec27[i].endsWith("C")) {
        line27.push(vec27[i].replace("C", ""));
      } else {
        line27.push(vec27[i]);
      }
    }

    //linha28
    var vec28 = [];
    for (let i = 0; i < aux28.length; i++) {
      if (aux28[i] != "") {
        vec28.push(
          aux28[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line28 = [];
    for (let i = 0; i < vec28.length; i++) {
      if (vec28[i].endsWith("D")) {
        line28.push(vec28[i].replace("D", ""));
      } else if (vec28[i].endsWith("C")) {
        line28.push(vec28[i].replace("C", ""));
      } else {
        line28.push(vec28[i]);
      }
    }

    //linha29
    var vec29 = [];
    for (let i = 0; i < aux29.length; i++) {
      if (aux29[i] != "") {
        vec29.push(
          aux29[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line29 = [];
    for (let i = 0; i < vec29.length; i++) {
      if (vec29[i].endsWith("D")) {
        line29.push(vec29[i].replace("D", ""));
      } else if (vec29[i].endsWith("C")) {
        line29.push(vec29[i].replace("C", ""));
      } else {
        line29.push(vec29[i]);
      }
    }

    //linha30
    var vec30 = [];
    for (let i = 0; i < aux30.length; i++) {
      if (aux30[i] != "") {
        vec30.push(
          aux30[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line30 = [];
    for (let i = 0; i < vec30.length; i++) {
      if (vec30[i].endsWith("D")) {
        line30.push(vec30[i].replace("D", ""));
      } else if (vec30[i].endsWith("C")) {
        line30.push(vec30[i].replace("C", ""));
      } else {
        line30.push(vec30[i]);
      }
    }

    //linha31
    var vec31 = [];
    for (let i = 0; i < aux31.length; i++) {
      if (aux31[i] != "") {
        vec31.push(
          aux31[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line31 = [];
    for (let i = 0; i < vec31.length; i++) {
      if (vec31[i].endsWith("D")) {
        line31.push(vec31[i].replace("D", ""));
      } else if (vec31[i].endsWith("C")) {
        line31.push(vec31[i].replace("C", ""));
      } else {
        line31.push(vec31[i]);
      }
    }

    //linha32
    var vec32 = [];
    for (let i = 0; i < aux32.length; i++) {
      if (aux32[i] != "") {
        vec32.push(
          aux32[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line32 = [];
    for (let i = 0; i < vec32.length; i++) {
      if (vec32[i].endsWith("D")) {
        line32.push(vec32[i].replace("D", ""));
      } else if (vec32[i].endsWith("C")) {
        line32.push(vec32[i].replace("C", ""));
      } else {
        line32.push(vec32[i]);
      }
    }

    //linha33
    var vec33 = [];
    for (let i = 0; i < aux33.length; i++) {
      if (aux33[i] != "") {
        vec33.push(
          aux33[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line33 = [];
    for (let i = 0; i < vec33.length; i++) {
      if (vec33[i].endsWith("D")) {
        line33.push(vec33[i].replace("D", ""));
      } else if (vec33[i].endsWith("C")) {
        line33.push(vec33[i].replace("C", ""));
      } else {
        line33.push(vec33[i]);
      }
    }

    //linha34
    var vec34 = [];
    for (let i = 0; i < aux34.length; i++) {
      if (aux34[i] != "") {
        vec34.push(
          aux34[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line34 = [];
    for (let i = 0; i < vec34.length; i++) {
      if (vec34[i].endsWith("D")) {
        line34.push(vec34[i].replace("D", ""));
      } else if (vec34[i].endsWith("C")) {
        line34.push(vec34[i].replace("C", ""));
      } else {
        line34.push(vec34[i]);
      }
    }

    //linha35
    var vec35 = [];
    for (let i = 0; i < aux35.length; i++) {
      if (aux35[i] != "") {
        vec35.push(
          aux35[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line35 = [];
    for (let i = 0; i < vec35.length; i++) {
      if (vec35[i].endsWith("D")) {
        line35.push(vec35[i].replace("D", ""));
      } else if (vec35[i].endsWith("C")) {
        line35.push(vec35[i].replace("C", ""));
      } else {
        line35.push(vec35[i]);
      }
    }

    //linha36
    var vec36 = [];
    for (let i = 0; i < aux36.length; i++) {
      if (aux36[i] != "") {
        vec36.push(
          aux36[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line36 = [];
    for (let i = 0; i < vec36.length; i++) {
      if (vec36[i].endsWith("D")) {
        line36.push(vec36[i].replace("D", ""));
      } else if (vec36[i].endsWith("C")) {
        line36.push(vec36[i].replace("C", ""));
      } else {
        line36.push(vec36[i]);
      }
    }

    //linha37
    var vec37 = [];
    for (let i = 0; i < aux37.length; i++) {
      if (aux37[i] != "") {
        vec37.push(
          aux37[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line37 = [];
    for (let i = 0; i < vec37.length; i++) {
      if (vec37[i].endsWith("D")) {
        line37.push(vec37[i].replace("D", ""));
      } else if (vec37[i].endsWith("C")) {
        line37.push(vec37[i].replace("C", ""));
      } else {
        line37.push(vec37[i]);
      }
    }

    //linha38
    var vec38 = [];
    for (let i = 0; i < aux38.length; i++) {
      if (aux38[i] != "") {
        vec38.push(
          aux38[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line38 = [];
    for (let i = 0; i < vec38.length; i++) {
      if (vec38[i].endsWith("D")) {
        line38.push(vec38[i].replace("D", ""));
      } else if (vec38[i].endsWith("C")) {
        line38.push(vec38[i].replace("C", ""));
      } else {
        line38.push(vec38[i]);
      }
    }

    //linha39
    var vec39 = [];
    for (let i = 0; i < aux39.length; i++) {
      if (aux39[i] != "") {
        vec39.push(
          aux39[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line39 = [];
    for (let i = 0; i < vec39.length; i++) {
      if (vec39[i].endsWith("D")) {
        line39.push(vec39[i].replace("D", ""));
      } else if (vec39[i].endsWith("C")) {
        line39.push(vec39[i].replace("C", ""));
      } else {
        line39.push(vec39[i]);
      }
    }

    //linha40
    var vec40 = [];
    for (let i = 0; i < aux40.length; i++) {
      if (aux40[i] != "") {
        vec40.push(
          aux40[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line40 = [];
    for (let i = 0; i < vec40.length; i++) {
      if (vec40[i].endsWith("D")) {
        line40.push(vec40[i].replace("D", ""));
      } else if (vec40[i].endsWith("C")) {
        line40.push(vec40[i].replace("C", ""));
      } else {
        line40.push(vec40[i]);
      }
    }

    //linha41
    var vec41 = [];
    for (let i = 0; i < aux41.length; i++) {
      if (aux41[i] != "") {
        vec41.push(
          aux41[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line41 = [];
    for (let i = 0; i < vec41.length; i++) {
      if (vec41[i].endsWith("D")) {
        line41.push(vec41[i].replace("D", ""));
      } else if (vec41[i].endsWith("C")) {
        line41.push(vec41[i].replace("C", ""));
      } else {
        line41.push(vec41[i]);
      }
    }

    //linha42
    var vec42 = [];
    for (let i = 0; i < aux42.length; i++) {
      if (aux42[i] != "") {
        vec42.push(
          aux42[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line42 = [];
    for (let i = 0; i < vec42.length; i++) {
      if (vec42[i].endsWith("D")) {
        line42.push(vec42[i].replace("D", ""));
      } else if (vec42[i].endsWith("C")) {
        line42.push(vec42[i].replace("C", ""));
      } else {
        line42.push(vec42[i]);
      }
    }

    //linha43
    var vec43 = [];
    for (let i = 0; i < aux43.length; i++) {
      if (aux43[i] != "") {
        vec43.push(
          aux43[i]
            .trim()
            .replace(/\./g, "")
            .replace(",", ".")
        );
      }
    }
    var line43 = [];
    for (let i = 0; i < vec43.length; i++) {
      if (vec43[i].endsWith("D")) {
        line43.push(vec43[i].replace("D", ""));
      } else if (vec43[i].endsWith("C")) {
        line43.push(vec43[i].replace("C", ""));
      } else {
        line43.push(vec43[i]);
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
        finalBalance: JSON.parse(line10[5]),
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
        finalBalance: JSON.parse(line22[5]),
        parent: null
      },
      {
        description: line23[1],
        classifier: line23[0],
        openingBalance: JSON.parse(line23[2]),
        debit: JSON.parse(line23[3]),
        credit: JSON.parse(line23[4]),
        finalBalance: JSON.parse(line23[5]),
        parent: null
      },
      {
        description: line24[1],
        classifier: line24[0],
        openingBalance: JSON.parse(line24[2]),
        debit: JSON.parse(line24[3]),
        credit: JSON.parse(line24[4]),
        finalBalance: JSON.parse(line24[5]),
        parent: null
      },
      {
        description: line25[1],
        classifier: line25[0],
        openingBalance: JSON.parse(line25[2]),
        debit: JSON.parse(line25[3]),
        credit: JSON.parse(line25[4]),
        finalBalance: JSON.parse(line25[5]),
        parent: null	
      },
      {
        description: line26[1],
        classifier: line26[0],
        openingBalance: JSON.parse(line26[2]),
        debit: JSON.parse(line26[3]),
        credit: JSON.parse(line26[4]),
        finalBalance: JSON.parse(line26[5]),
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
        finalBalance: JSON.parse(line32[5]),
        parent: null	
      },
      {
        description: line33[1],
        classifier: line33[0],
        openingBalance: JSON.parse(line33[2]),
        debit: JSON.parse(line33[3]),
        credit: JSON.parse(line33[4]),
        finalBalance: JSON.parse(line33[5]),
        parent: null	
      },
      {
        description: line34[1],
        classifier: line34[0],
        openingBalance: JSON.parse(line34[2]),
        debit: JSON.parse(line34[3]),
        credit: JSON.parse(line34[4]),
        finalBalance: JSON.parse(line34[5]),
        parent: null	
      },
      {
        description: line35[1],
        classifier: line35[0],
        openingBalance: JSON.parse(line35[2]),
        debit: JSON.parse(line35[3]),
        credit: JSON.parse(line35[4]),
        finalBalance: JSON.parse(line35[5]),
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
      },
      {
        description: line40[1],
        classifier: line40[0],
        openingBalance: JSON.parse(line40[2]),
        debit: JSON.parse(line40[3]),
        credit: JSON.parse(line40[4]),
        finalBalance: JSON.parse(line40[5]),
        parent: null	
      },
      {
        description: line41[1],
        classifier: line41[0],
        openingBalance: JSON.parse(line41[2]),
        debit: JSON.parse(line41[3]),
        credit: JSON.parse(line41[4]),
        finalBalance: JSON.parse(line41[5]),
        parent: null	
      },
      {
        description: line42[1],
        classifier: line42[0],
        openingBalance: JSON.parse(line42[2]),
        debit: JSON.parse(line42[3]),
        credit: JSON.parse(line42[4]),
        finalBalance: JSON.parse(line42[5]),
        parent: null	
      },
      {
        description: line43[1],
        classifier: line43[0],
        openingBalance: null,
        debit: null,
        credit: null,
        finalBalance: null,
        parent: null	
      }
    ];
    
    
    return JSON.stringify(result);
  }
}

const input = `1				  ATIVO							1.120.807,67D		527.081,41					464.716,15			1.183.172,93D					
																										
																										
																										
  1.1				     Ativo Circulante							130.288,57D		527.081,41					464.716,15			192.653,83D					
                                                                                                         
  1.1.1				        Caixa							4.000,98D		104.653,71					108.648,69			6,00D					
                                                                                                         
  1.1.1.01				           Caixa							4.000,98D		104.653,71					108.648,69			6,00D					
                                                                                                         
  1.1.2				        Bancos							44.750,72D		282.256,32					268.764,52			58.242,52D					
                                                                                                         
  1.1.2.02				           Bradesco Conta: 9999999-9							1,00D		203.835,57					203.835,57			1,00D					
                                                                                                         
  1.1.2.03				           Bradesco Conta: 9999999-9							1,00D		64.845,40					64.845,40			1,00D					
                                                                                                         
  1.1.2.04				           Bradesco Conta Poupanca: 9999999-9							5.694,85D		8.502,20					6,78			14.190,27D					
                                                                                                         
  1.1.2.05				           Bradesco Conta Poupanca:9999999-9							39.053,87D		5.073,15					76,77			44.050,25D					
                                                                                                         
  1.1.3				        Aplicaçoes Financeiras							81.536,87D		140.171,38					87.302,94			134.405,31D					
                                                                                                         
  1.1.3.02				           Bradesco Aplicaçoes 9999999-9							87.827,84D		52.134,00					12.741,40			127.220,44D					
                                                                                                         
  1.1.3.03				           Bradesco Aplicaçoes 9999999-9							6.290,97C		88.037,38					74.561,54			7.184,87D					
                                                                                                         
  1.2				     REALIZAVEL A LONGO PRAZO							12.368,24D		0					0			12.368,24D					
                                                                                                         
  1.2.1				        REALIZAVEL A LONGO PRAZO							12.368,24D		0					0			12.368,24D					
                                                                                                         
  1.2.1.02				           Emprestimos a Associados							12.368,24D		0					0			12.368,24D					
                                                                                                         
  1.3				     PERMANENTE							978.150,86D		0					0			978.150,86D					
                                                                                                         
  1.3.1				        IMOBILIZADO							976.650,86D		0					0			976.650,86D					
                                                                                                         
  1.3.1.04				           Moveis e Utensilios							95.539,50D		0					0			95.539,50D					
                                                                                                         
  1.3.1.05				           Instalacoes							245.600,50D		0					0			245.600,50D					
                                                                                                         
  1.3.1.06				           Computadores e Perifericos							7.687,41D		0					0			7.687,41D					
                                                                                                         
  1.3.1.08				           Sede Campestre Sindicato							627.823,45D		0					0			627.823,45D					
                                                                                                         
  1.3.3				        Intangivel							1.500,00D		0					0			1.500,00D					
                                                                                                         
  1.3.3.03				           Marcas e Patentes							1.500,00D		0					0			1.500,00D					
                                                                                                         
 2				  PASSIVO							1.080.167,44C		0					0			1.080.167,44C					
                                                                                                         
                                                                                                         
                                                                                                         
  2.3				     PATRIMONIO SOCIAL							1.080.167,44C		0					0			1.080.167,44C					
                                                                                                         
  2.3.2				        Superavit ou Deficit							1.080.167,44C		0					0			1.080.167,44C					
                                                                                                         
  2.3.2.01				           Superavit							1.114.092,00C		0					0			1.114.092,00C					
                                                                                                         
  2.3.2.02				           Deficit							33.924,56D		0					0			33.924,56D					
                                                                                                         
 3				  DESPESAS E CUSTOS							219.398,02D		99.112,37					0			318.510,39D					
                                                                                                         
                                                                                                         
                                                                                                         
  3.1				     Despesas Gerais							194.940,27D		85.047,98					0			279.988,25D					
                                                                                                         
  3.1.1				        Despesas com Pessoal							39.005,75D		16.091,84					0			55.097,59D					
                                                                                                         
  3.1.1.01				           Salarios							17.161,50D		6.677,80					0			23.839,30D					
                                                                                                         
  3.1.1.03				           Fgts							1.757,55D		857,24					0			2.614,79D					
                                                                                                         
  3.1.1.04				           Previdencia Social - Inss							7.334,76D		3.541,07					0			10.875,83D					
                                                                                                         
  3.1.1.06				           Ferias							5.242,10D		0					0			5.242,10D					
                                                                                                         
  3.1.1.08				           Adiantamento de Salário.							3.250,00D		2.872,13					0			6.122,13D					
                                                                                                         
  3.1.1.09				           Vale Transporte.							1.419,00D		843,6					0			2.262,60D					
                                                                                                         
  3.1.1.10				           Ir Retido na Fonte							500,84D		0					0			500,84D					
                                                                                                         
  3.1.1.11				           Alimentação de Funcionários.							2.340,00D		1.300,00					0			3.640,00D					
                                                                                                         
  3.1.2				        Despesas Administrativas e de Estrutur							100.740,67D		61.210,48					0			161.951,15D					
                                                                                                         
  3.1.2.01				           Consumo de Energia Eletrica							1.596,58D		706,67					0			2.303,25D					
                                                                                                         
  3.1.2.02				           Despesas com Telefone							648,40D		668,4					0			1.316,80D					
                                                                                                         
  3.1.2.03				           Consumo de Agua do Amazonas`;

t = new Transform();
console.log(t.manipulation(input));
