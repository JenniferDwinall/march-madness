import picks from '../static/files/picks.js'
import scores from '../static/files/scores.js'
import teams from '../static/files/teams.js'

/*
 * Returns game by id.
 *
 * @params id {integer} - The game id.
 *
 * @return {array} - An array of team objects.
 */
export const getGameById = (id) => {
  return scores.filter(game => game.id === id)
}
/*
 * Returns all teams.
 *
 * @params [region] {string} - An optional string representing the region.
 *
 * @return {array} - An array of team objects.
 */
export const getTeams = (region) => {
  if (region) {
    return teams.filter(team => team.region === region)
  }
  return teams
}

/*
 * Returns scores.
 *
 * @params [round] {integer} - An optional integer representing the round number.
 * @params [region] {string} - An optional string representing the region.
 *
 * @return {array} - An array of team objects.
 */
export const getScores = (round = null, region = null) => {
  let results = scores

  if (region) {
    let teams = getTeams(region)
    let teamNames = teams.map(t => t.name)
    results = results.filter(team => teamNames.includes(team.name))
  }

  if (round) {
    results = results.filter(team => team.round === round)
  }

  return results
}

/*
 * Returns picks.
 *
 * @params [round] {integer} - An optional integer representing the round number.
 * @params [region] {string} - An optional string representing the region.
 *
 * @return {array} - An array of team objects.
 */
export const getPicks = (round = null, region = null) => {
  let results = picks

  let teams = getTeams(region)
  let teamNames = teams.map(t => {
    return { 'seed': t.seed, 'name': t.name }
  })
  let t2 = new Map()
  teamNames.forEach(t => {
    t2.set(t.name, t)
  })

  results = results.filter(team => {
    const t = t2.get(team.name)
    return (t) || null
  })
  results = results.map(result => {
    return Object.assign({}, result, t2.get(result.name))
  })

  if (round) {
    results = results.filter(team => team.round === round)
  }

  return results
}

/*
 * Returns an winning path for a team.
 *
 * @params team {string} - The team name.
 *
 * @return {array} - An array of opponent names, starting with the first round.
 */
export const getPath = (team) => {
  let pathPicks = []
  for (var i = 1; i <= 6; i++) {
    let picks = getPicks(i).filter(t => t.name === team)
    pathPicks.push(picks[0])
  }
  let results = []
  pathPicks.forEach(p => {
    let game = getGameById(p.id).filter(g => g.name !== team).map(t => t.name)
    results.push(game[0])
  })
  return results
}
