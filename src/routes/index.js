import config from '../configs'
import { Home, Profile, Topic, Login, Question } from '../pages'

export const publicRoutes = [
  {
    path: config.routes.profile,
    component: Profile
  },
  {
    path: config.routes.home,
    component: Home
  },
  {
    path: config.routes.topic,
    component: Topic
  },
  {
    path: config.routes.login,
    component: Login
  },
  {
    path: config.routes.question,
    component: Question
  }
]

export const privateRoutes = []