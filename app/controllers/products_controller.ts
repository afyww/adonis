import Product from '#models/product'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProductsController {
  async index({ view }: HttpContext) {
    const products = await Product.all()
    return view.render('product', { products })
  }

  async create({ view }: HttpContext) {
    return view.render('addproduct')
  }

  async store({ request, response, session }: HttpContext) {
    // Handle file upload
    const image = request.file('img', {
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg'],
    })

    if (image) {
      const imageName = `${new Date().getTime()}.${image.extname}` // Generate unique file name

      // Move the file to 'uploads/products'
      await image.move('uploads/products', {
        name: imageName,
        overwrite: true, // If the file with the same name exists, it will be replaced
      })

      if (!image.moved()) {
        session.flash('error', 'Error uploading image')
        return response.redirect().back()
      }

      const imagePath = `uploads/products/${image.fileName}`

      // Prepare the rest of the product data
      const data = request.only(['name', 'price'])
      data.img = imagePath // Add image path to product data

      // Save product with image
      await Product.create(data)

      session.flash('notification', 'Product created successfully!')
      return response.redirect().toRoute('products.index')
    }

    session.flash('error', 'Please upload a valid image')
    return response.redirect().back()
  }
}
