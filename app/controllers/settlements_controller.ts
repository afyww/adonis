import Settlement from '#models/settlement'
import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'

interface StartData {
  start_amount: Number
  start_time: DateTime
}

interface TotalData {
  total_amount: Number
  end_time: DateTime
}

export default class SettlementsController {
  async index({ view }: HttpContext) {
    const settlements = await Settlement.all()
    return view.render('settlement', { settlements })
  }

  async vstart({ view }: HttpContext) {
    return view.render('addstart')
  }

  async poststart({ response, request }: HttpContext) {
    const data: StartData = request.only(['start_amount', 'start_time'])
    data.start_time = DateTime.now().setZone('Asia/Bangkok')
    await Settlement.create(data)
    return response.redirect().toRoute('settlement')
  }

  async vtotal({ view }: HttpContext) {
    return view.render('addtotal')
  }

  async posttotal({ response, request }: HttpContext) {
    const data: TotalData = request.only(['total_amount', 'end_time'])
    data.end_time = DateTime.now().setZone('Asia/Bangkok')
    await Settlement.create(data)
    return response.redirect().toRoute('settlement')
  }
}
