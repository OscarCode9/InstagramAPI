'use strict'
import { send, json } from 'micro' // eslint-disable-line no-unused-vars
import HttpHash from 'http-hash'
import Db from 'backenplatzi'
import DbStrub from './test/stub/db'
import config from './config'
import gravatar from 'gravatar'
const env = 'testing'
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
hash.set('GET /:username', async function getUser (req, res, params) {
  let username = params.username
  await db.connect()
  let user = await db.getUser(username)

  let images = await db.getImageByUser(username)
  user.pictures = images
  user.avatar = gravatar.url(user.email)
  delete user.email
  delete user.password
  send(res, 200, user)
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
