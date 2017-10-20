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
    return Promise.resolve(fix.getImage())
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
  getImageByTag (tag) {
    return Promise.resolve(fix.getImagesByTag())
  }
}
