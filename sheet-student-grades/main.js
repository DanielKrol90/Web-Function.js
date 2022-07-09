const btn = document.getElementById("oblicz")
btn.addEventListener("click", classyfied)

function classyfied() {
  const allStudents = document.querySelectorAll("[id*=uczen]")

  allStudents.forEach((student) => {
    const inputs = student.querySelectorAll('input[type="number"]')
    const inputExtra = student.querySelector('input[type="text"]')
    const studentsName = student.querySelector(".uczen")
    const finalScore = student.querySelector(".srednia")

    let srednia = 0

    inputs.forEach((przedmiot) => {
      let ocena = +przedmiot.value

      if (
        inputExtra.value.includes(przedmiot.className) &&
        przedmiot.value < 6
      ) {
        ocena += 0.5
      }

      srednia += ocena

      if (ocena === 1) {
        studentsName.style.backgroundColor = "red"
      }
    })

    let averageScore = srednia / 7
    finalScore.textContent = averageScore.toFixed(2)

    if (averageScore >= 4.75) {
      studentsName.style.backgroundColor = "lightgreen"
    }
  })
}
