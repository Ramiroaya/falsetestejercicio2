let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");
let btnEnviar2 = <HTMLButtonElement>document.getElementById("btnEnviar2");
let btnEnviar3 = <HTMLButtonElement>document.getElementById("btnEnviar3");
let btnEnviar4 = <HTMLButtonElement>document.getElementById("btnEnviar4");
let comisionA: number[] = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8];
let comisionB: number[] = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8];
let comisionC: number[] = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9];

//Next the function  Disapproved!!
function desaprobarAlumno(ingresoNota: number[]) {
  let indice: number;
  let cantidadDesaprobados: number = 0;
  for (indice = 0; indice < ingresoNota.length; indice++) {
    if (ingresoNota[indice] < 6) {
      cantidadDesaprobados = cantidadDesaprobados + 1;
    }
  }
  return cantidadDesaprobados;
}

//Next the function Minor Note!!
function notaMenor(ingresoNota: number[]) {
  let indice: number;
  let notaMenor: number = ingresoNota[0];
  for (indice = 0; indice < ingresoNota.length; indice++) {
    if (ingresoNota[indice] <= notaMenor) {
      notaMenor = ingresoNota[indice];
    }
  }
  return notaMenor;
}

//Next the function Average!!
function notaPromedio(ingresoNota: number[]) {
  let notaPromedio: number = 0;
  let sumaNotas: number = 0;
  let indice: number;
  for (indice = 0; indice < ingresoNota.length; indice++) {
    sumaNotas = sumaNotas + ingresoNota[indice];
  }
  notaPromedio = sumaNotas / ingresoNota.length;
  return notaPromedio;
}

btnEnviar1.addEventListener("click", () => {
  if (
    notaPromedio(comisionA) === notaPromedio(comisionB) &&
    notaPromedio(comisionA) === notaPromedio(comisionC)
  ) {
    console.log("Todas las Comisiones tienen el mismo Mayor Promedio");
  } else {
    if (
      notaPromedio(comisionA) > notaPromedio(comisionB) &&
      notaPromedio(comisionA) > notaPromedio(comisionC)
    ) {
      console.log(
        "El promedio Mayor esta en la Comision A y es :   " +
          notaPromedio(comisionA)
      );
    } else {
        if(notaPromedio(comisionB)>notaPromedio(comisionA) && notaPromedio(comisionB)>notaPromedio(comisionC)){
          console.log("El promedio Mayor esta en la Comision B y es :   "+notaPromedio(comisionB));
        } else {
          console.log("El promedio Mayor esta en la Comision C y es :   "+notaPromedio(comisionC));
        }
  }
});

btnEnviar2.addEventListener("click", () => {
  if (
    notaPromedio(comisionA) === notaPromedio(comisionB) &&
    notaPromedio(comisionA) === notaPromedio(comisionC)
  ) {
    console.log("Todas las Comisiones tienen el mismo Mayor Promedio");
  } else {
    if (
      notaPromedio(comisionA) < notaPromedio(comisionB) &&
      notaPromedio(comisionA) < notaPromedio(comisionC)
    ) {
      console.log(
        "El promedio Menor esta en la Comision A y es :   " +
          notaPromedio(comisionA)
      );
    } else {
        if(notaPromedio(comisionB)<notaPromedio(comisionA) && notaPromedio(comisionB)<notaPromedio(comisionC)){
          console.log("El promedio Menor esta en la Comision B y es :   "+notaPromedio(comisionB));
        } else {
          console.log("El promedio Menor esta en la Comision C y es :   "+notaPromedio(comisionC));
        }
  }
});

btnEnviar3.addEventListener("click", () => {
  console.log(
    "Hay " + desaprobarAlumno(comisionA),
    "de desaprobados en la Comision A"
  );
  console.log(
    "Hay " + desaprobarAlumno(comisionB),
    "de desaprobados en la Comision B"
  );
  console.log(
    "Hay " + desaprobarAlumno(comisionC),
    "de desaprobados en la Comision C"
  );
});

btnEnviar4.addEventListener("click", () => {
  console.log("La Menor nota de la Comsion A es :   " + notaMenor(comisionA));
  console.log("La Menor nota de la Comision B es :   " + notaMenor(comisionB));
  console.log("La Menor Nota de la Comision C es :   " + notaMenor(comisionC));
});
