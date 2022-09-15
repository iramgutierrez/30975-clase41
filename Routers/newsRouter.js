const { Router } = require('express')

const newsModel = require('../Models/newsModel')
const NewsDAOMemory = require('../DAOs/NewsDAOMemory')
const NewsDAOMongo = require('../DAOs/NewsDAOMongo')
const NewsService = require('../Services/NewsService')
const NewsController = require('../Controllers/NewsController')

const newsRouterFn = () => {
  const newsDAO = new NewsDAOMongo(newsModel) 
  // const newsDAO =  new NewsDAOMemory()
  const newsService = new NewsService(newsDAO)
  const newsController = new NewsController(newsService)

  const newsRouter = Router()

  newsRouter.get('/', newsController.getAll.bind(newsController))
  newsRouter.post('/', newsController.create.bind(newsController))
  newsRouter.get('/:id', newsController.getOne.bind(newsController))
  newsRouter.put('/:id', newsController.update.bind(newsController))
  newsRouter.delete('/:id', newsController.delete.bind(newsController))

  return newsRouter
}

module.exports = newsRouterFn
