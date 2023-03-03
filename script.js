let time = { days: '00', hours: '00', minutes: '00', seconds: '00' }

const upEl = document.getElementsByClassName('up')
const downEl = document.getElementsByClassName('down')

setInterval(() => {
  upEl[0].classList.remove('upflip')
  downEl[0].classList.remove('downflip')

  upEl[1].classList.remove('upflip')
  downEl[1].classList.remove('downflip')

  upEl[2].classList.remove('upflip')
  downEl[2].classList.remove('downflip')
  updateTime()
}, 1000)


const daysEl = document.getElementsByClassName('days')
const hoursEl = document.getElementsByClassName('hours')
const minutesEl = document.getElementsByClassName('minutes')
const secondsEl = document.getElementsByClassName('seconds')

function updateTime() {
  const oldDays = time.days
  const newDays = new Date().getDay().toLocaleString('id', { minimumIntegerDigits: 2 })
  if (time.days !== newDays) {
    upEl[0].classList.add('upflip')
    downEl[0].classList.add('downflip')
  }
  time.days = newDays
  changeElementValue(daysEl, time.days, oldDays)

  const oldHours = time.hours
  const newHours = new Date().getHours().toLocaleString('id', { minimumIntegerDigits: 2 })
  if (time.hours !== newHours) {
    upEl[1].classList.add('upflip')
    downEl[1].classList.add('downflip')
  }
  time.hours = newHours
  changeElementValue(hoursEl, time.hours, oldHours)

  const oldMinutes = time.minutes
  const newMinutes = new Date().getMinutes().toLocaleString('id', { minimumIntegerDigits: 2 })
  console.log({ newMinutes, minutes: time.minutes })
  if (time.minutes !== newMinutes) {
    upEl[2].classList.add('upflip')
    downEl[2].classList.add('downflip')
  }
  time.minutes = newMinutes
  changeElementValue(minutesEl, time.minutes, oldMinutes)

  const oldSeconds = time.seconds
  const newSecond = new Date().getSeconds().toLocaleString('id', { minimumIntegerDigits: 2 })
  if (time.seconds !== newSecond) {
    upEl[3].classList.add('upflip')
    downEl[3].classList.add('downflip')
  }
  time.seconds = newSecond
  changeElementValue(secondsEl, time.seconds, oldSeconds)

  time.hours = new Date().getHours().toLocaleString('id', { minimumIntegerDigits: 2 })
  time.minutes = new Date().getMinutes().toLocaleString('id', { minimumIntegerDigits: 2 })
  // time.seconds = new Date().getSeconds().toLocaleString('id', { minimumIntegerDigits: 2 })
  // daysEl[0].innerText = time.days
  // daysEl[1].innerText = time.days

  // hoursEl[0].innerText = time.hours
  // hoursEl[1].innerText = time.hours

  // minutesEl[0].innerText = time.minutes
  // minutesEl[1].innerText = time.minutes

  // secondsEl[0].innerText = time.seconds
  // secondsEl[1].innerText = time.seconds
}

function changeElementValue(element, value, oldValue) {
  element[2].innerText = oldValue
  element[1].innerText = oldValue
  element[0].innerText = value
}
