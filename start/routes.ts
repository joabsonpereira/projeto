
import Route from '@ioc:Adonis/Core/Route'
import HorariosController from '../app/Controllers/Http/HorariosController'

Route.get('/', async ({ view }) => {
  return view.render('login/login')
})

Route.get('/main', async ({ view }) => {
  return view.render('layouts/main')
})

Route.get('/profile', async ({ view }) => {
  return view.render('layouts/profile')
})

Route.get('/inicio', async ({ view }) => {
  return view.render('home/index')
})

Route.get('/agendamento','HorariosController.listar')

