document.addEventListener('DOMContentLoaded', function () {
  const getNode = (node) => document.querySelector(node)
  let result = getNode('#result')
  let matchCon = getNode('#condition')
  const playBtn = getNode('.buttons')

  playBtn.addEventListener('click', (e) => {
    if (e.target.hasAttribute('id')) {
      play(parseInt(e.target.getAttribute('id')))
    }
  })
  const rand = () => {
    return Math.ceil(Math.random() * 3)
  }
  const play = (user) => {
    let computer = rand()
    if (
      (computer === 1 && user === 3) ||
      (computer === 2 && user === 1) ||
      (computer === 3 && user === 2)
    ) {
      result.textContent = 'Computer Win 😛'
    } else if (computer === user) {
      result.textContent = 'Draw 🤦‍♂️'
    } else {
      result.textContent = 'Player Win 🙄'
    }
    const emoji = (computer) => {
      if (computer === 1) {
        return '✊'
      }
      return computer === 2 ? '✋' : '✌'
    }
    matchCon.textContent = 'computer chose ' + emoji(computer)
  }
})
