export default {
  getImage () {
    return {
      id: '6a238b19-3ee3-4d5c-acb5-944a3c1fb407',
      publicId: '3ehqEZvwZByc6hjzgEZU5p',
      userId: 'platzigram',
      liked: false,
      likes: 0,
      src: 'user2.jpg',
      description: '#awesome',
      tags: [ 'awesome' ],
      createdAt: new Date().getTime()
    }
  },
  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },
  getImageByUser () {
    return [
      this.getImage(),
      this.getImage()
    ]
  },
  getImagesByTag () {
    return [
      this.getImage(),
      this.getImage()
    ]
  },
  getUser () {
    return {
      id: 'oasjkbfkjasbfalskjbf',
      name: 'Oscar99',
      username: 'Oscar99',
      email: 'f@platzi.test',
      avatar: 'https://scontent.fntr2-1.fna.fbcdn.net/v/t31.0-8/fr/cp0/e15/q65/14902930_1352895544750667_1009881812025283727_o.jpg?efg=eyJpIjoidCJ9&oh=f9eacb7523b2173275d5e0e25be807d0&oe=5A7E41E7',
      password: 'pla4tzi',
      createdAt: new Date().getTime()
    }
  }
}
