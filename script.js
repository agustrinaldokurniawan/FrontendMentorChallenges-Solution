//toggle
const toggle = document.getElementsByClassName('toggle')
const ball = document.getElementsByClassName('ball')
toggle[0].addEventListener('click', toggleHandler)

function toggleHandler(event) {
  if (event.offsetX > 0 && event.offsetX < 20) {
    if (
      ball[0].style.animationName === "theme1to2" ||
      ball[0].style.animationName === "theme3to2"
    ) {
      ball[0].style.animationName = "theme2to1"
      document.body.dataset.theme = "1"
    }
    if (
      ball[0].style.animationName === "theme1to3" ||
      ball[0].style.animationName === "theme2to3"
    ) {
      ball[0].style.animationName = "theme3to1"
      document.body.dataset.theme = "1"
    }
  }
  if (event.offsetX > 20 && event.offsetX < 40) {
    if (
      ball[0].style.animationName === "theme2to1" ||
      ball[0].style.animationName === "" ||
      ball[0].style.animationName === "theme3to1"
    ) {
      ball[0].style.animationName = "theme1to2"
      document.body.dataset.theme = "2"
    }
    if (
      ball[0].style.animationName === "theme2to3" ||
      ball[0].style.animationName === "theme1to3"
    ) {
      ball[0].style.animationName = "theme3to2"
      document.body.dataset.theme = "2"
    }
  }
  if (event.offsetX > 40 && event.offsetX < 60) {
    if (
      ball[0].style.animationName === "theme3to1" ||
      ball[0].style.animationName === "" ||
      ball[0].style.animationName === "theme2to1"
    ) {
      ball[0].style.animationName = "theme1to3"
      document.body.dataset.theme = "3"
    }
    if (
      ball[0].style.animationName === "theme3to2" ||
      ball[0].style.animationName === "theme1to2"
    ) {
      ball[0].style.animationName = "theme2to3"
      document.body.dataset.theme = "3"
    }
  }
}

//util
String.prototype.formatToBoard = function () {
  const numberString = this.replace(/[^.\d]/g, '')
  const split = numberString.split('.')
  const integerPart = split[0].length % 3
  let value = split[0].substring(0, integerPart)
  const thousand = split[0].substring(integerPart).match(/\d{3}/gi)
  if (thousand) {
    const separator = integerPart ? ',' : ''
    value += separator + thousand.join(',')
  }
  value = split[1] != undefined ? value + '.' + split[1] : value
  return value
};

String.prototype.formatToNumber = function () {
  return Number(this.replace(/[,]/g, ''))
};

let historyCalc = []

//board 
const boardEl = document.getElementsByClassName('board')

boardEl[0].oninput = e => {
  boardEl[0].value = e.target.value.formatToBoard()
}
//action

//reset
const delEl = document.getElementById('reset')
delEl.onclick = () => {
  boardEl[0].value = ''
}

//list-button
const listButtonEl = document.getElementsByClassName('list-button')
listButtonEl[0].addEventListener('click', handleClickListButton)

function handleClickListButton(e) {
  e.target.style.animationName = "button-press"

  if (/\d/.test(e.target.id)) {
    const value = boardEl[0].value + e.target.id
    boardEl[0].value = value.formatToBoard()
  }

  if (e.target.id === 'dot') {
    if (boardEl[0].value.length && !boardEl[0].value.includes('.')) {
      const value = boardEl[0].value + '.'
      boardEl[0].value = value.formatToBoard()
    }
  }

  if (e.target.id === 'del') {
    boardEl[0].value = ''
  }

  const operator = ['plus', 'minus', 'multiply', 'divide', 'equal']
  if (operator.includes(e.target.id)) {
    const value = boardEl[0].value.formatToNumber()
    handleCalculation(value, e.target.id)
  }
  setTimeout(() => {
    e.target.style.animationName = ""
  }, 100)
}

function handleCalculation(value, operator) {
  if (operator === 'equal') {
    historyCalc.push(value)
    const equation = historyCalc.map(e => {
      switch (e) {
        case 'plus':
          return '+';
        case 'minus':
          return '-';
        case 'divide':
          return '/';
        case 'multiply':
          return '*';
        default:
          return e.toString().formatToNumber()
      }
    })
    const result = eval(equation.join(''))
    boardEl[0].value = !isFinite(result) ? '∞' : result.toString().formatToBoard()
    historyCalc = []
  } else {
    historyCalc.push(value, operator)
    boardEl[0].value = ''
  }
}