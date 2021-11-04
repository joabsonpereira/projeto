// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HorariosController {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  public async listar ({ view }){
    const lista = [
      {
        data: 'piseiro1',
        hora: 'hora',
        agendado: true,
      },
      {
        data: 'piseiro2',
        hora: 'hora2',
        agendado: false,
      },
    ]

    return view.render('layouts/agendamento',{
      horarios: lista,
    })
  }
}

