import { getPicks, getPath } from './'

export default class Bracket {
  /**
   * Initializes a bracket.
   */
  constructor () {
    this.regions = [ 'south', 'west', 'east', 'midwest' ]
    this.numberOfRounds = 6
    this.numberOfTeams = 64
  }

  /**
   * Checks the number of picks for each round.
   *
   * @return {string}
   *    Returns a message stating if the bracket was filled out completely.
   */
  isBracketComplete () {
    let numberOfTeams = this.numberOfTeams / 2
    for (var i = 1; i <= this.numberOfRounds; i++) {
      let picks = getPicks(i)
      if (numberOfTeams !== picks.length) return 'Bracket is not complete'
      numberOfTeams = numberOfTeams / 2
    }
    return 'Bracket is complete'
  }

  /**
   * Given a completed bracket, returns the winner/champion.
   *
   * @return {string}
   *    Returns a message stating the bracket winner.
   */
  findChampion () {
    if (this.isBracketComplete()) {
      const winner = getPicks(this.numberOfRounds)
      return `Your champion is ${winner[0].name}`
    }
  }

  /**
   * Given a completed bracket, returns the teams the champion beat in order
   * starting from the first round.
   *
   * @return {string}
   *    Returns a message listing all of the bracket winner's opponents.
   */
  championsPathToVictory () {
    const champion = (this.isBracketComplete()) ? getPicks(this.numberOfRounds) : null
    const championPath = (champion[0].name) ? getPath(champion[0].name) : null

    return `Your champions path to victory was ${championPath.join(' -> ')}`
  }
}
