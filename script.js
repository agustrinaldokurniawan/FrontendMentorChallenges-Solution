const shareButtonContainer = document.getElementsByClassName('share-button-container')
const tooltipShare = document.getElementsByClassName('tooltip-share')
const footer = document.getElementsByClassName('footer')

window.onclick = (event) => {
  if (
    event.target !== shareButtonContainer[0].children[0]
    && event.target !== shareButtonContainer[1].children[0]
  ) closeTooltip()
}

window.onkeydown = () => {
  closeTooltip()
}
shareButtonContainer[1].addEventListener('click', openTooltip)
shareButtonContainer[0].addEventListener('click', openTooltip)

function openTooltip() {
  if (window.innerWidth > 1000) tooltipShare[0].style.display = tooltipShare[0].style.display === 'flex' ? 'none' : 'flex'
  if (window.innerWidth <= 1000) {
    footer[0].children[1].style.display = footer[0].children[1].style.display === 'flex' ? 'none' : 'flex'
    footer[0].children[0].style.display = footer[0].children[1].style.display === 'flex' ? 'none' : 'flex'
  }
}

function closeTooltip() {
  if (window.innerWidth > 1000) tooltipShare[0].style.display = 'none'
  if (window.innerWidth <= 1000) {
    footer[0].children[1].style.display = 'flex'
    footer[0].children[0].style.display = 'none'
  }
}