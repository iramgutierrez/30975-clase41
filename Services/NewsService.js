class NewsService {
  constructor (dao) {
    this.dao = dao
  }

  getAll () {
    return this.dao.getAll()
  }

  create (data) {
    data.createdAt = new Date()

    return this.dao.create(data)
  }

  getOne (id) {
    return this.dao.getOne(id)
  }

  update (id, data) {
    return this.dao.update(id, data)
  }

  delete (id) {
    return this.dao.delete(id)
  }
}

module.exports = NewsService