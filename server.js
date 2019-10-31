const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const Fixture = require('./api/Fixture')
const Team = require('./api/Team')
const Stadium = require('./api/Stadium')
const Page = require('./api/Page')

app.prepare().then(() => {
  const server = express()
  server.use(express.static('static'))
  server.use(bodyParser.json())
  server.use(cookieParser())

  var router = express.Router()

  server.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    next()
  })

  /* Team
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  router.route('/api/v1/teams').get(Team.getTeams)
  router.route('/api/v1/teams/:team_id').get(Team.getTeam)
  router.route('/api/v1/teams').post(Team.addTeam)
  router.route('/api/v1/teams/:team_id').put(Team.updateTeam)
  router.route('/api/v1/teams/:team_id').delete(Team.deleteTeam)

  /* Stadium
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  router.route('/api/v1/stadiums').get(Stadium.getStadiums)
  router.route('/api/v1/stadiums/:stadium_id').get(Stadium.getStadium)
  router.route('/api/v1/stadiums').post(Stadium.addStadium)
  router.route('/api/v1/stadiums/:stadium_id').put(Stadium.updateStadium)
  router.route('/api/v1/stadiums/:stadium_id').delete(Stadium.deleteStadium)

  /* Page
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  router.route('/api/v1/pages').get(Page.getPages)
  router.route('/api/v1/pages/:page_id').get(Page.getPage)
  router.route('/api/v1/pages').post(Page.addPage)
  router.route('/api/v1/pages/:page_id').put(Page.updatePage)
  router.route('/api/v1/pages/:page_id').delete(Page.deletePage)

  server.use(router)

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(8001, (err) => {
    if (err) throw err
    console.log('Running on 8001')
  })
})
