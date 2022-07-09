let btnSum = document.getElementById("oblicz");
btnSum.addEventListener("click", payCheck);

function payCheck() {
  let workTime = document.getElementsByClassName("czas");
  let workRate = document.getElementsByClassName("stawka");
  let workers = document.getElementsByClassName("pracownik");
  let bestEmployee = [];
  let olElement = document.createElement("ol");

  for (let i = 0; i < workRate.length; i++) {
    document.getElementsByClassName("wyplata")[i].innerHTML =
      workRate[i].value * workTime[i].value;

    if (workTime[i].value > 160) {
      document.getElementsByClassName("wyplata")[i].innerHTML =
        workRate[i].value * 160 +
        (workTime[i].value - 160) * workRate[i].value * 2;
    }
    if (workTime[i].value <= 100) {
      document
        .getElementsByClassName("pracownik")
        [i].setAttribute("style", "background-color:red;");
      document
        .getElementsByClassName("czas")
        [i].setAttribute("style", "background-color:red;");
    }
  }

  for (let i = 0; i < workTime.length; i++) {
    let employee = {
      name: workers[i].innerHTML,
      time: Number(workTime[i].value),
    };
    bestEmployee.push(employee);
  }

  bestEmployee.sort((a, b) => b.time - a.time);
  document.getElementById("najlepsi-pracownicy").innerHTML = ''
  document.getElementById("najlepsi-pracownicy").appendChild(olElement);

  for (let i = 0; i < 3; i++) {
    let liElement = document.createElement("li");
    olElement.appendChild(liElement);
    let txtNode = document.createTextNode(
      bestEmployee[i].name + " przepracował " + bestEmployee[i].time + " godzin"
    );
    liElement.appendChild(txtNode);
  }
}
