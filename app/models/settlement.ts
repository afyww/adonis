import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Settlement extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare start_time: DateTime

  @column()
  declare end_time: DateTime

  @column()
  declare start_amount: Number

  @column()
  declare total_amount: Number

  @column()
  declare expected: Number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
