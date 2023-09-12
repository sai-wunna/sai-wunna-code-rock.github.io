document.addEventListener('DOMContentLoaded', function () {
  const getNode = (node) => document.querySelector(node)
  const createNode = (node) => document.createElement(node)
  let result = getNode('#result')
  let matchCon = getNode('#condition')
  const playBtn = getNode('.buttons')
  const score = getNode('.score')
  const modal = getNode('.modal')
  const closeModalBtn = getNode('.close-modal')
  const nextRound = getNode('#next_round')
  const playMatches = getNode('.matches-list')

  let matches = []
  let userScore = 0
  let computerScore = 0

  const showModal = () => {
    modal.classList.add('show-modal')
  }
  const closeModal = () => {
    modal.classList.remove('show-modal')
  }
  const rand = () => {
    return Math.ceil(Math.random() * 3)
  }
  const emoji = (computer) => {
    if (computer === 1) {
      return '✊'
    }
    return computer === 2 ? '✋' : '✌'
  }
  const playedMatchCreator = ({ userScore, computerScore }, index) => {
    const li = createNode('li')
    li.setAttribute('class', 'match')
    li.textContent = `${
      index + 1
    } - User ${userScore} / ${computerScore} Computer`
    return li
  }

  score.addEventListener('click', () => {
    matches.map((match, index) => {
      playMatches.appendChild(playedMatchCreator(match, index))
    })
    showModal()
  })
  closeModalBtn.addEventListener('click', () => {
    closeModal()
    let child = playMatches.lastElementChild
    while (child) {
      playMatches.removeChild(child)
      child = playMatches.lastElementChild
    }
  })

  playBtn.addEventListener('click', (e) => {
    if (e.target.hasAttribute('id')) {
      play(parseInt(e.target.getAttribute('id')))
    }
  })
  nextRound.addEventListener('click', () => {
    if (userScore === 0 && computerScore === 0) {
      return (score.textContent = 'Can be saved after played')
    }
    score.textContent = `score`
    matchCon.textContent = '. . . . .'
    matches.push({ userScore, computerScore })
    userScore = 0
    computerScore = 0
    result.textContent = "Let's go 😉"
    score.style.boxShadow = '0 0 10px rgba(56, 255, 56, 0.4)'
  })

  const play = (user) => {
    score.style.boxShadow = ''
    let computer = rand()
    if (
      (computer === 1 && user === 3) ||
      (computer === 2 && user === 1) ||
      (computer === 3 && user === 2)
    ) {
      computerScore += 1
      result.textContent = 'Computer Win 😛'
    } else if (computer === user) {
      score.style.boxShadow = '0 0 10px rgba(255, 56, 56, 0.652)'
      result.textContent = 'Draw 🤦‍♂️'
    } else {
      userScore += 1
      result.textContent = 'Player Win 🙄'
    }
    score.textContent = `User ${userScore} / ${computerScore} Computer`
    matchCon.textContent = 'computer chose ' + emoji(computer)
  }
})

