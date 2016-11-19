'use strict'

// Creates your WhacAMole constructor with attributes and behaviors
function WhacAMole(width, height) {
  this.width = width || 4
  this.height = height || 4
  this.score = 0
  this.moleX = 0
  this.moleY = 0

  this.resetHoles()
}

WhacAMole.prototype.resetHoles = function() {
  this.holes = []

  for (var i = 0; i < this.height; i++) {
    var hole = []
    for (var j = 0; j < this.width; j++) {
      hole.push('O')
    }
    this.holes.push(hole)
  }
}

WhacAMole.prototype.isMoleHit = function(position) {
  var coordinates = position.split(',')
  if (parseInt(coordinates[0]) === this.moleX + 1 &&
      parseInt(coordinates[1]) === this.height - this.moleY) {
    this.score++
  }
}

WhacAMole.prototype.printScore = function() {
  console.log('You have whacked ' + this.score + ' moles!')
}

WhacAMole.prototype.showHoles = function() {
  this.resetHoles()

  this.moleX = getRandomIntInclusive(0, this.width - 1)
  this.moleY = getRandomIntInclusive(0, this.height - 1)

  this.holes[this.moleX][this.moleY] = 'M'

  var table = ''
  for (var i = 0; i < this.height; i++) {
    var tableRow = '|'
    for (var j = 0; j < this.width; j++) {
      tableRow += ' ' + this.holes[j][i] + ' |'
    }
    table += tableRow + '\n'
  }
  console.log(table)
}

// You should have no need to modify below code
var obj = new WhacAMole()

obj.showHoles()

var i = setInterval(function() {
  obj.showHoles()
}, 5000) // 5000 milliseconds which means 5 seconds

process.stdin.setEncoding('utf8')

process.stdin.on('readable', () => {
  var chunk = process.stdin.read()
  if (chunk !== null) {
    chunk = chunk.toString()
    // isMoleHit accepts your input after pressing Enter
    obj.isMoleHit(chunk.substring(0, chunk.length - 1))
  }
})

process.on('SIGINT', function() {
  clearInterval(i)
  // Prints out the exit message and score
  obj.printScore()

  process.exit(0)
})

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
