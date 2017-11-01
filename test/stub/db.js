'use strict'
import fix from '../fixtures'

export default class Db {
  connect () {
    return Promise.resolve(true)
  }
  disconnect () {
    return Promise.resolve(true)
  }
  getImage (id) {
    return Promise.resolve(fix.getImage())
  }
  saveImage (image) {
    return Promise.resolve(image)
  }
  likeImage (id) {
    let image = fix.getImage()
    image.liked = true
    image.likes = 1
    return Promise.resolve(image)
  }
  getImages () {
    return Promise.resolve(fix.getImages())
  }
  getImageByUser () {
    return Promise.resolve(fix.getImageByUser())
  }
  getImageByTag (tag) {
    return Promise.resolve(fix.getImagesByTag())
  }
  saveUser (user) {
    return Promise.resolve(fix.getUser())
  }
  getUser (username) {
    return Promise.resolve(fix.getUser())
  }
  authenticate (username, password) {
    return Promise.resolve(fix.getUser())
  }
}
