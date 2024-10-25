import Discount from '#models/discount'
import type { HttpContext } from '@adonisjs/core/http'

export default class DiscountsController {
  async index({ view }: HttpContext) {
    const discounts = Discount.all()
    return view.render('discount', { discounts })
  }

  async create({ view }: HttpContext) {
    return view.render('adddiscount')
  }
}
