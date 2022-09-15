
let instance = null
class NewsDAOMemory {
  constructor () {
    console.log('Creando instancia de NewsDAOMemory')
    this.news = []
  }

  static getInstance () {
    if (instance) {
      return instance
    }

    instance = new NewsDAOMemory()

    return instance
  }

  getAll () {
    return Promise.resolve(this.news)
  }

  create (data) {
    const total = this.news.length

    data.id = total + 1

    this.news.push(data)

    return Promise.resolve(data)
  }

  getOne(id) {
    const newsItem = this.news.find(newsItem => newsItem.id === parseInt(id))

    if (!newsItem) {
      return Promise.reject(new Error('Item not found'))
    }

    return Promise.resolve(newsItem)
  }

  update (id, data) {
    const index = this.news.findIndex(newsItem => newsItem.id === parseInt(id))

    if (index === -1) {
      return Promise.reject(new Error('Item not found'))
    }

    this.news[index] = Object.assign(this.news[index], data)

    return Promise.resolve(this.news[index])
  }

  delete (id) {
    const index = this.news.findIndex(newsItem => newsItem.id === parseInt(id))

    if (index === -1) {
      return Promise.reject(new Error('Item not found'))
    }

    this.news.splice(index, 1)

    return Promise.resolve(true)
  }
}

module.exports = NewsDAOMemory