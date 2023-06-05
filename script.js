const illustrationWomanOnlineElement = document.getElementById("illustration-woman-online")

function setIllustrationImage() {
  if (window.innerWidth >= 1200) illustrationWomanOnlineElement.src = "./images/illustration-woman-online-desktop.svg"
  if (window.innerWidth < 1200) illustrationWomanOnlineElement.src = "./images/illustration-woman-online-mobile.svg"
}

setIllustrationImage()
window.onresize = setIllustrationImage

function getFaqQuestion(params) {
  const questions = [
    {
      question: "How many team members can I invite?",
      answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
    },
    {
      question: "What is the maximum file upload size?",
      answer: "No more than 2GB. All files in your account must fit your allotted storage space."
    },
    {
      question: "How do I reset my password?",
      answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes! Send us a message and we’ll process your request no questions asked."
    },
    {
      question: "Do you provide additional support?",
      answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours."
    },
  ]

  return questions;
}

async function renderQuestion() {
  const questions = getFaqQuestion();

  const contentElement = document.getElementsByClassName('content')

  questions.forEach((item, index) => {
    const questionItemElement = document.createElement('div')
    questionItemElement.className = "question-item"

    const questionElement = document.createElement('div')
    questionElement.className = "question"

    const questionTextElement = document.createElement('p')
    questionTextElement.innerText = item.question
    questionTextElement.onclick = () => openAnswer(index)

    const buttonArrowElement = document.createElement('button')
    buttonArrowElement.className = "button-arrow"
    buttonArrowElement.onclick = () => openAnswer(index)

    const imageArrowElement = document.createElement('img')
    imageArrowElement.src = "images/icon-arrow-down.svg"
    imageArrowElement.alt = "Arrow"

    buttonArrowElement.appendChild(imageArrowElement)

    questionElement.appendChild(questionTextElement)
    questionElement.appendChild(buttonArrowElement)

    const answerElement = document.createElement("p")
    answerElement.className = "answer"
    answerElement.innerText = item.answer

    questionItemElement.appendChild(questionElement)
    questionItemElement.appendChild(answerElement)

    contentElement[0].appendChild(questionItemElement)
  });
}

function setActiveQuestion(index) {
  const contentElemet = document.getElementsByClassName('content')
  contentElemet[0].children[index + 1].dataset.active = "active"
}

function setDeactiveQuestion(index) {
  const contentElemet = document.getElementsByClassName('content')
  contentElemet[0].children[index + 1].removeAttribute("data-active")
}

const historyFaqClick = () => {
  const clickedIndex = []
  return (n) => {
    if (clickedIndex.length) {
      clickedIndex.push({ active: false, index: n })
      if (clickedIndex[clickedIndex.length - 1].index !== clickedIndex[clickedIndex.length - 2].index) {
        clickedIndex[clickedIndex.length - 1].active = true
        setActiveQuestion(clickedIndex[clickedIndex.length - 1].index)
        setDeactiveQuestion(clickedIndex[clickedIndex.length - 2].index)
      } else {
        if (!clickedIndex[clickedIndex.length - 2].active) {
          clickedIndex[clickedIndex.length - 1].active = true
          setActiveQuestion(clickedIndex[clickedIndex.length - 1].index)
        } else {
          setDeactiveQuestion(clickedIndex[clickedIndex.length - 1].index)
        }
      }
    } else {
      setActiveQuestion(n)
      clickedIndex.push({ active: true, index: n })
    }
  }
}

const openAnswer = historyFaqClick()

renderQuestion()