'use strict'
import { send, json } from 'micro' // eslint-disable-line no-unused-vars
import HttpHash from 'http-hash'
import Db from 'backenplatzi'
import DbStrub from './test/stub/db'
import config from './config'
import utils from './test/lib/utils'
const env = 'tes'
let db = new Db(config.db) // eslint-disable-line no-unused-vars
if (env === 'test') {
  db = new DbStrub()
}
const hash = HttpHash()

hash.set('POST /', async function authenticate (req, res, params) {
  let credentials = await json(req)
  await db.connect()
  let auth = await db.authenticate(credentials.username, credentials.password)
  console.log(auth)
  if (!auth) {
    return send(res, 401, { error: 'invalid credentials' })
  }
  let token = await utils.signToken({
    username: credentials.username
  }, config.secret)
  send(res, 200, token)
})
export default async function main (req, res) {
  let { method, url } = req
  let match = hash.get(`${method.toUpperCase()} ${url}`)
  if (match.handler) {
    try {
      await match.handler(req, res, match.params)
    } catch (e) {
      send(res, 500, { error: e.message })
    }
  } else {
    send(res, 404, { error: 'route not found' })
  }
}
