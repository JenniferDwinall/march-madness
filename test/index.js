import chai from 'chai'

import Bracket from '../src/bracket'
import { getPicks, getScores } from '../src/'

/* global expect */
global.expect = chai.expect

/* global describe it */
describe('Test March Madness', function () {
  describe('Test Picks', function (done) {
    it('Get second round', function (done) {
      let teams
      const south = [
        { id: 1, round: 1, name: 'UMBC', seed: 16 },
        { id: 2, round: 1, name: 'Kansas State', seed: 9 },
        { id: 3, round: 1, name: 'Kentucky', seed: 5 },
        { id: 4, round: 1, name: 'Buffalo', seed: 13 },
        { id: 5, round: 1, name: 'Loyola Chicago', seed: 11 },
        { id: 6, round: 1, name: 'Tennessee', seed: 3 },
        { id: 7, round: 1, name: 'Nevada', seed: 7 },
        { id: 8, round: 1, name: 'Cincinnati', seed: 2 }
      ]
      const west = [
        { id: 9, round: 1, name: 'Xavier', seed: 1 },
        { id: 10, round: 1, name: 'Florida State', seed: 9 },
        { id: 11, round: 1, name: 'Ohio State', seed: 5 },
        { id: 12, round: 1, name: 'Gonzaga', seed: 4 },
        { id: 13, round: 1, name: 'Houston', seed: 6 },
        { id: 14, round: 1, name: 'Michigan', seed: 3 },
        { id: 15, round: 1, name: 'Texas A&M', seed: 7 },
        { id: 16, round: 1, name: 'North Carolina', seed: 2 }
      ]
      const east = [
        { id: 17, round: 1, name: 'Villanova', seed: 1 },
        { id: 18, round: 1, name: 'Alabama', seed: 9 },
        { id: 19, round: 1, name: 'West Virginia', seed: 5 },
        { id: 20, round: 1, name: 'Marshall', seed: 13 },
        { id: 21, round: 1, name: 'Florida', seed: 6 },
        { id: 22, round: 1, name: 'Texas Tech', seed: 3 },
        { id: 23, round: 1, name: 'Butler', seed: 10 },
        { id: 24, round: 1, name: 'Purdue', seed: 2 }
      ]

      const midwest = [
        { id: 25, round: 1, name: 'Kansas', seed: 1 },
        { id: 26, round: 1, name: 'Seton Hall', seed: 8 },
        { id: 27, round: 1, name: 'Clemson', seed: 5 },
        { id: 28, round: 1, name: 'Auburn', seed: 4 },
        { id: 29, round: 1, name: 'Syracuse', seed: 11 },
        { id: 30, round: 1, name: 'Michigan State', seed: 3 },
        { id: 31, round: 1, name: 'Rhode Island', seed: 7 },
        { id: 32, round: 1, name: 'Duke', seed: 2 }
      ]

      const round = 1

      teams = getPicks(round, 'south')
      expect(teams).to.be.a('array')
      expect(teams).to.eql(south)

      teams = getPicks(round, 'west')
      expect(teams).to.be.a('array')
      expect(teams).to.eql(west)

      teams = getPicks(round, 'east')
      expect(teams).to.be.a('array')
      expect(teams).to.eql(east)

      teams = getPicks(round, 'midwest')
      expect(teams).to.be.a('array')
      expect(teams).to.eql(midwest)

      done()
    })

    it('Get sweet 16', function (done) {
      let teams
      const south = [
        { id: 33, round: 2, name: 'Kansas State', seed: 9 },
        { id: 34, round: 2, name: 'Kentucky', seed: 5 },
        { id: 35, round: 2, name: 'Loyola Chicago', seed: 11 },
        { id: 36, round: 2, name: 'Nevada', seed: 7 }
      ]
      const west = [
        { id: 37, round: 2, name: 'Florida State', seed: 9 },
        { id: 38, round: 2, name: 'Gonzaga', seed: 4 },
        { id: 39, round: 2, name: 'Michigan', seed: 3 },
        { id: 40, round: 2, name: 'Texas A&M', seed: 7 }
      ]
      const east = [
        { id: 41, round: 2, name: 'Villanova', seed: 1 },
        { id: 42, round: 2, name: 'West Virginia', seed: 5 },
        { id: 43, round: 2, name: 'Texas Tech', seed: 3 },
        { id: 44, round: 2, name: 'Purdue', seed: 2 }
      ]

      const midwest = [
        { id: 45, round: 2, name: 'Kansas', seed: 1 },
        { id: 46, round: 2, name: 'Clemson', seed: 5 },
        { id: 47, round: 2, name: 'Syracuse', seed: 11 },
        { id: 48, round: 2, name: 'Duke', seed: 2 }
      ]

      const round = 2

      teams = getPicks(round, 'south')
      expect(teams).to.be.a('array')
      expect(teams).to.eql(south)

      teams = getPicks(round, 'west')
      expect(teams).to.be.a('array')
      expect(teams).to.eql(west)

      teams = getPicks(round, 'east')
      expect(teams).to.be.a('array')
      expect(teams).to.eql(east)

      teams = getPicks(round, 'midwest')
      expect(teams).to.be.a('array')
      expect(teams).to.eql(midwest)

      done()
    })

    it('Get elite 8', function (done) {
      let teams
      const south = [
        { id: 49, round: 3, name: 'Kansas State', seed: 9 },
        { id: 50, round: 3, name: 'Loyola Chicago', seed: 11 }
      ]
      const west = [
        { id: 51, round: 3, name: 'Florida State', seed: 9 },
        { id: 52, round: 3, name: 'Michigan', seed: 3 }
      ]
      const east = [
        { id: 53, round: 3, name: 'Villanova', seed: 1 },
        { id: 54, round: 3, name: 'Texas Tech', seed: 3 }
      ]
      const midwest = [
        { id: 55, round: 3, name: 'Kansas', seed: 1 },
        { id: 56, round: 3, name: 'Duke', seed: 2 }
      ]
      const round = 3

      teams = getPicks(round, 'south')
      expect(teams).to.be.a('array')
      expect(teams).to.eql(south)

      teams = getPicks(round, 'west')
      expect(teams).to.be.a('array')
      expect(teams).to.eql(west)

      teams = getPicks(round, 'east')
      expect(teams).to.be.a('array')
      expect(teams).to.eql(east)

      teams = getPicks(round, 'midwest')
      expect(teams).to.be.a('array')
      expect(teams).to.eql(midwest)

      done()
    })

    it('Get final four', function (done) {
      let teams
      const south = [ { id: 57, round: 4, name: 'Loyola Chicago', seed: 11 } ]
      const west = [ { id: 58, round: 4, name: 'Michigan', seed: 3 } ]
      const east = [ { id: 59, round: 4, name: 'Villanova', seed: 1 } ]
      const midwest = [ { id: 60, round: 4, name: 'Kansas', seed: 1 } ]
      const round = 4

      teams = getPicks(round, 'south')
      expect(teams).to.be.a('array')
      expect(teams).to.eql(south)

      teams = getPicks(round, 'west')
      expect(teams).to.be.a('array')
      expect(teams).to.eql(west)

      teams = getPicks(round, 'east')
      expect(teams).to.be.a('array')
      expect(teams).to.eql(east)

      teams = getPicks(round, 'midwest')
      expect(teams).to.be.a('array')
      expect(teams).to.eql(midwest)

      done()
    })

    it('Get finals', function (done) {
      let round = 5
      let teams = getPicks(round)
      expect(teams).to.be.a('array')
      expect(teams).to.eql([
        { id: 61, round: 5, name: 'Michigan', seed: 3 },
        { id: 62, round: 5, name: 'Villanova', seed: 1 }
      ])
      done()
    })

    it('Get bracket winner', function (done) {
      let round = 6
      let teams = getPicks(round)
      expect(teams).to.be.a('array')
      expect(teams).to.eql([ { id: 63, round: 6, name: 'Villanova', seed: 1 } ])
      done()
    })
  })

  describe('Test the Bracket class', function (done) {
    let b = new Bracket()

    it('Test constructor', function (done) {
      expect(b.numberOfRounds).to.be.a('number')
      expect(b.numberOfRounds).to.equal(6)
      expect(b.numberOfTeams).to.be.a('number')
      expect(b.numberOfTeams).to.equal(64)
      expect(b.regions).to.be.a('array')
      expect(b.regions).to.eql(['south', 'west', 'east', 'midwest'])
      done()
    })

    it('Test isBracketComplete', function (done) {
      const isComplete = b.isBracketComplete()
      expect(isComplete).to.be.a('string')
      expect(isComplete).to.equal('Bracket is complete')
      done()
    })

    it('Test findChampion', function (done) {
      const champion = b.findChampion()
      expect(champion).to.be.a('string')
      expect(champion).to.equal('Your champion is Villanova')
      done()
    })

    it('Test championsPathToVictory', function (done) {
      const pathToVictory = b.championsPathToVictory()
      expect(pathToVictory).to.be.a('string')
      expect(pathToVictory).to.equal('Your champions path to victory was Radford -> Alabama -> West Virginia -> Texas Tech -> Kansas -> Michigan')
      done()
    })
  })

  describe('Get bracket scores', function (done) {
    it('Get first round scores', function (done) {
      let scores
      const south = [
        { id: 1, round: 1, name: 'Virginia', score: 54 },
        { id: 1, round: 1, name: 'UMBC', score: 74 },
        { id: 2, round: 1, name: 'Creighton', score: 59 },
        { id: 2, round: 1, name: 'Kansas State', score: 69 },
        { id: 3, round: 1, name: 'Kentucky', score: 78 },
        { id: 3, round: 1, name: 'Davidson', score: 73 },
        { id: 4, round: 1, name: 'Arizona', score: 68 },
        { id: 4, round: 1, name: 'Buffalo', score: 89 },
        { id: 5, round: 1, name: 'Miami', score: 62 },
        { id: 5, round: 1, name: 'Loyola Chicago', score: 64 },
        { id: 6, round: 1, name: 'Tennessee', score: 73 },
        { id: 6, round: 1, name: 'Wright State', score: 47 },
        { id: 7, round: 1, name: 'Nevada', score: 87 },
        { id: 7, round: 1, name: 'Texas', score: 83 },
        { id: 8, round: 1, name: 'Cincinnati', score: 68 },
        { id: 8, round: 1, name: 'Georgia State', score: 53 }
      ]
      const west = [
        { id: 9, round: 1, name: 'Xavier', score: 102 },
        { id: 9, round: 1, name: 'Texas Southern', score: 83 },
        { id: 10, round: 1, name: 'Missouri', score: 54 },
        { id: 10, round: 1, name: 'Florida State', score: 67 },
        { id: 11, round: 1, name: 'Ohio State', score: 81 },
        { id: 11, round: 1, name: 'South Dakota State', score: 73 },
        { id: 12, round: 1, name: 'Gonzaga', score: 68 },
        { id: 12, round: 1, name: 'UNCG', score: 64 },
        { id: 13, round: 1, name: 'Houston', score: 67 },
        { id: 13, round: 1, name: 'San Diego State', score: 65 },
        { id: 14, round: 1, name: 'Michigan', score: 61 },
        { id: 14, round: 1, name: 'Montana', score: 47 },
        { id: 15, round: 1, name: 'Texas A&M', score: 73 },
        { id: 15, round: 1, name: 'Providence', score: 69 },
        { id: 16, round: 1, name: 'North Carolina', score: 84 },
        { id: 16, round: 1, name: 'Lipscomb', score: 66 }
      ]
      const east = [
        { id: 17, round: 1, name: 'Villanova', score: 87 },
        { id: 17, round: 1, name: 'Radford', score: 61 },
        { id: 18, round: 1, name: 'Virginia Tech', score: 83 },
        { id: 18, round: 1, name: 'Alabama', score: 86 },
        { id: 19, round: 1, name: 'West Virginia', score: 85 },
        { id: 19, round: 1, name: 'Murray State', score: 68 },
        { id: 20, round: 1, name: 'Wichita State', score: 75 },
        { id: 20, round: 1, name: 'Marshall', score: 81 },
        { id: 21, round: 1, name: 'Florida', score: 77 },
        { id: 21, round: 1, name: 'St. Bonaventure', score: 62 },
        { id: 22, round: 1, name: 'Texas Tech', score: 70 },
        { id: 22, round: 1, name: 'SFA', score: 60 },
        { id: 23, round: 1, name: 'Arkansas', score: 62 },
        { id: 23, round: 1, name: 'Butler', score: 79 },
        { id: 24, round: 1, name: 'Purdue', score: 74 },
        { id: 24, round: 1, name: 'CSU Fullerton', score: 48 }
      ]
      const midwest = [
        { id: 25, round: 1, name: 'Kansas', score: 76 },
        { id: 25, round: 1, name: 'Penn', score: 60 },
        { id: 26, round: 1, name: 'Seton Hall', score: 94 },
        { id: 26, round: 1, name: 'NC State', score: 83 },
        { id: 27, round: 1, name: 'Clemson', score: 79 },
        { id: 27, round: 1, name: 'New Mexico State', score: 68 },
        { id: 28, round: 1, name: 'Auburn', score: 62 },
        { id: 28, round: 1, name: 'Charleston', score: 58 },
        { id: 29, round: 1, name: 'TCU', score: 52 },
        { id: 29, round: 1, name: 'Syracuse', score: 57 },
        { id: 30, round: 1, name: 'Michigan State', score: 82 },
        { id: 30, round: 1, name: 'Bucknell', score: 78 },
        { id: 31, round: 1, name: 'Rhode Island', score: 83 },
        { id: 31, round: 1, name: 'Oklahoma', score: 78 },
        { id: 32, round: 1, name: 'Duke', score: 89 },
        { id: 32, round: 1, name: 'Iona', score: 67 }
      ]
      const round = 1
      scores = getScores(round, 'south')
      expect(scores).to.be.a('array')
      expect(scores).to.eql(south)

      scores = getScores(round, 'west')
      expect(scores).to.be.a('array')
      expect(scores).to.eql(west)

      scores = getScores(round, 'east')
      expect(scores).to.be.a('array')
      expect(scores).to.eql(east)

      scores = getScores(round, 'midwest')
      expect(scores).to.be.a('array')
      expect(scores).to.eql(midwest)

      done()
    })

    it('Get second round scores', function (done) {
      let scores
      const south = [
        { id: 33, round: 2, name: 'UMBC', score: 43 },
        { id: 33, round: 2, name: 'Kansas State', score: 50 },
        { id: 34, round: 2, name: 'Kentucky', score: 95 },
        { id: 34, round: 2, name: 'Buffalo', score: 75 },
        { id: 35, round: 2, name: 'Loyola Chicago', score: 63 },
        { id: 35, round: 2, name: 'Tennessee', score: 62 },
        { id: 36, round: 2, name: 'Nevada', score: 75 },
        { id: 36, round: 2, name: 'Cincinnati', score: 73 }
      ]
      const west = [
        { id: 37, round: 2, name: 'Xavier', score: 70 },
        { id: 37, round: 2, name: 'Florida State', score: 75 },
        { id: 38, round: 2, name: 'Ohio State', score: 84 },
        { id: 38, round: 2, name: 'Gonzaga', score: 90 },
        { id: 39, round: 2, name: 'Houston', score: 63 },
        { id: 39, round: 2, name: 'Michigan', score: 64 },
        { id: 40, round: 2, name: 'Texas A&M', score: 86 },
        { id: 40, round: 2, name: 'North Carolina', score: 65 }
      ]
      const east = [
        { id: 41, round: 2, name: 'Villanova', score: 81 },
        { id: 41, round: 2, name: 'Alabama', score: 58 },
        { id: 42, round: 2, name: 'West Virginia', score: 94 },
        { id: 42, round: 2, name: 'Marshall', score: 71 },
        { id: 43, round: 2, name: 'Florida', score: 66 },
        { id: 43, round: 2, name: 'Texas Tech', score: 69 },
        { id: 44, round: 2, name: 'Butler', score: 73 },
        { id: 44, round: 2, name: 'Purdue', score: 76 }
      ]
      const midwest = [
        { id: 45, round: 2, name: 'Kansas', score: 83 },
        { id: 45, round: 2, name: 'Seton Hall', score: 79 },
        { id: 46, round: 2, name: 'Clemson', score: 84 },
        { id: 46, round: 2, name: 'Auburn', score: 53 },
        { id: 47, round: 2, name: 'Syracuse', score: 55 },
        { id: 47, round: 2, name: 'Michigan State', score: 53 },
        { id: 48, round: 2, name: 'Rhode Island', score: 62 },
        { id: 48, round: 2, name: 'Duke', score: 87 }
      ]
      const round = 2
      scores = getScores(round, 'south')
      expect(scores).to.be.a('array')
      expect(scores).to.eql(south)

      scores = getScores(round, 'west')
      expect(scores).to.be.a('array')
      expect(scores).to.eql(west)

      scores = getScores(round, 'east')
      expect(scores).to.be.a('array')
      expect(scores).to.eql(east)

      scores = getScores(round, 'midwest')
      expect(scores).to.be.a('array')
      expect(scores).to.eql(midwest)

      done()
    })
    it('Get sweet 16 scores', function (done) {
      let scores
      const south = [
        { id: 49, round: 3, name: 'Kansas State', score: 61 },
        { id: 49, round: 3, name: 'Kentucky', score: 58 },
        { id: 50, round: 3, name: 'Loyola Chicago', score: 69 },
        { id: 50, round: 3, name: 'Nevada', score: 68 }
      ]

      const west = [
        { id: 51, round: 3, name: 'Florida State', score: 75 },
        { id: 51, round: 3, name: 'Gonzaga', score: 60 },
        { id: 52, round: 3, name: 'Michigan', score: 99 },
        { id: 52, round: 3, name: 'Texas A&M', score: 72 }
      ]

      const east = [
        { id: 53, round: 3, name: 'Villanova', score: 90 },
        { id: 53, round: 3, name: 'West Virginia', score: 78 },
        { id: 54, round: 3, name: 'Texas Tech', score: 78 },
        { id: 54, round: 3, name: 'Purdue', score: 65 }
      ]

      const midwest = [
        { id: 55, round: 3, name: 'Kansas', score: 80 },
        { id: 55, round: 3, name: 'Clemson', score: 76 },
        { id: 56, round: 3, name: 'Syracuse', score: 65 },
        { id: 56, round: 3, name: 'Duke', score: 69 }
      ]

      const round = 3
      scores = getScores(round, 'south')
      expect(scores).to.be.a('array')
      expect(scores).to.eql(south)

      scores = getScores(round, 'west')
      expect(scores).to.be.a('array')
      expect(scores).to.eql(west)

      scores = getScores(round, 'east')
      expect(scores).to.be.a('array')
      expect(scores).to.eql(east)

      scores = getScores(round, 'midwest')
      expect(scores).to.be.a('array')
      expect(scores).to.eql(midwest)

      done()
    })

    it('Get elite eight scores', function (done) {
      let scores
      const south = [
        { id: 57, round: 4, name: 'Kansas State', score: 62 },
        { id: 57, round: 4, name: 'Loyola Chicago', score: 78 }
      ]

      const west = [
        { id: 58, round: 4, name: 'Florida State', score: 54 },
        { id: 58, round: 4, name: 'Michigan', score: 58 }
      ]

      const east = [
        { id: 59, round: 4, name: 'Villanova', score: 71 },
        { id: 59, round: 4, name: 'Texas Tech', score: 59 }
      ]

      const midwest = [
        { id: 60, round: 4, name: 'Kansas', score: 85 },
        { id: 60, round: 4, name: 'Duke', score: 81 }
      ]

      const round = 4
      scores = getScores(round, 'south')
      expect(scores).to.be.a('array')
      expect(scores).to.eql(south)

      scores = getScores(round, 'west')
      expect(scores).to.be.a('array')
      expect(scores).to.eql(west)

      scores = getScores(round, 'east')
      expect(scores).to.be.a('array')
      expect(scores).to.eql(east)

      scores = getScores(round, 'midwest')
      expect(scores).to.be.a('array')
      expect(scores).to.eql(midwest)

      done()
    })

    it('Get final four scores', function (done) {
      const finalFour = [
        { id: 61, round: 5, name: 'Loyola Chicago', score: 57 },
        { id: 61, round: 5, name: 'Michigan', score: 68 },
        { id: 62, round: 5, name: 'Villanova', score: 95 },
        { id: 62, round: 5, name: 'Kansas', score: 79 }
      ]

      const round = 5
      const scores = getScores(round)
      expect(scores).to.be.a('array')
      expect(scores).to.eql(finalFour)

      done()
    })

    it('Get final score', function (done) {
      const finals = [
        { id: 63, round: 6, name: 'Michigan', score: 62 },
        { id: 63, round: 6, name: 'Villanova', score: 79 }
      ]

      const round = 6
      const scores = getScores(round)
      expect(scores).to.be.a('array')
      expect(scores).to.eql(finals)

      done()
    })
  })
})
