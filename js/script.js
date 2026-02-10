const btnGauche = document.getElementById('btn-gauche');
const btnDroite = document.getElementById('btn-droite');

let scaleValue = 1;

function boutonD(event) {
  if (scaleValue < 2) {
    scaleValue += 0.15;
    btnGauche.style.transform = `scale(${scaleValue})`;
  } else {
    alert("t'es sûr vraiment ?");
    btnGauche.classList.add('immobile');
    btnGauche.innerHTML = "oui";
  }
}

function boutonG() {
  scaleValue = 1;
  btnGauche.style.transform = 'scale(1)';
  window.location.href = "page1.html";
}

function moveOui(event) {
  let element = document.getElementById("btn-gauche");
  let currency = event.target.className;

  if (currency.includes('immobile')) return;

  switch (currency) {
   case "pos0":
     element.classList.remove("pos0");
     element.classList.add("pos1");
     break;
   case "pos1":
     element.classList.remove("pos1");
     element.classList.add("pos2");
     break;
   case "pos2":
     element.classList.remove("pos2");
     element.classList.add("pos3");
     break;
   case "pos3":
     element.classList.remove("pos3");
     element.classList.add("pos4");
     break;
   case "pos4":
     element.classList.remove("pos4");
     element.classList.add("pos5");
     break;
   case "pos5":
     element.classList.remove("pos5");
     element.classList.add("pos6");
     break;
   case "pos6":
     element.classList.remove("pos6");
     element.classList.add("pos7");
     break;
   case "pos7":
     element.classList.remove("pos7");
     element.classList.add("pos0");
     break;
 }

 console.log(element.className);
}

btnGauche.addEventListener('click', boutonG);
btnDroite.addEventListener('click', boutonD);
btnGauche.addEventListener('mouseenter', moveOui);
