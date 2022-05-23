import GetRoutes from './GET.routes'
import PostRoutes from './POST.routes'
import express from 'express'

const carRouter = express.Router()

carRouter.use(GetRoutes)
carRouter.use(PostRoutes)

export default carRouter