'use strict'
import { send, json } from 'micro' // eslint-disable-line no-unused-vars
import HttpHash from 'http-hash'
import Db from 'backenplatzi'
import DbStrub from './test/stub/db'
import config from './config'
const env = 'test'
let db = new Db(config.db) // eslint-disable-line no-unused-vars
if (env === 'test') {
  db = new DbStrub()
}
const hash = HttpHash()
hash.set('POST /', async function saveUser (req, res, params) {
  let user = await json(req)
  await db.connect()
  let created = await db.saveUser(user)
  await db.disconnect()
  delete created.email
  delete created.password
  send(res, 201, created)
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
