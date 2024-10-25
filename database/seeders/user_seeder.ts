import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        fullName: 'Admin',
        email: 'Admin@gmail.com',
        password: '123456',
      },
    ])
  }
}
