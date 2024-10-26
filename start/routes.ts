import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const AuthController = () => import('#controllers/auth_controller')
const PagesController = () => import('#controllers/pages_controller')
const UsersController = () => import('#controllers/users_controller')
const ProductController = () => import('#controllers/products_controller')
const CategoryController = () => import('#controllers/categories_controller')
const DiscountsController = () => import('#controllers/discounts_controller')

// AUTH
router.get('/', [AuthController, 'index']).as('index')
router.post('/login', [AuthController, 'login']).as('login')

router
  .group(() => {
    //PAGES
    router.get('/dashboard', [PagesController, 'dashboard']).as('dashboard')
    //USER
    router.get('/user', [UsersController, 'index']).as('user')
    router.get('/adduser', [UsersController, 'create']).as('adduser')
    router.post('/postusers', [UsersController, 'store']).as('postuser')
    router.get('user/:id', [UsersController, 'destroy']).as('deluser')
    //PRODUUCT
    router.get('/product', [ProductController, 'index']).as('product')
    router.get('/addproduct', [ProductController, 'create']).as('addproduct')
    router.post('/postproduct', [ProductController, 'store']).as('postproduct')
    //CATEGORY
    router.get('/category', [CategoryController, 'index']).as('category')
    router.get('/addcategory', [CategoryController, 'create']).as('addcategory')
    router.post('/postcategory', [CategoryController, 'store']).as('postcategory')
    router.get('/editcategory/:id', [CategoryController, 'edit']).as('editcategory')
    router.post('/updatecategory/:id', [CategoryController, 'update']).as('updatecategory')
    router.get('delcategory/:id', [CategoryController, 'destroy']).as('delcategory')
    //DISCOUNT
    router.get('/discount', [DiscountsController, 'index']).as('discount')
    router.get('/adddiscount', [DiscountsController, 'create']).as('adddiscount')
    router.post('/postdiscount', [DiscountsController, 'store']).as('postdiscount')
    router.get('/editdiscount/:id', [DiscountsController, 'edit']).as('editdiscount')
    router.post('/updatediscount/:id', [DiscountsController, 'update']).as('updatediscount')
    router.get('deldiscount/:id', [DiscountsController, 'destroy']).as('deldiscount')

    //LOGOUT
    router.post('/logout', [AuthController, 'logout']).as('logout')
  })
  .middleware([middleware.auth()])
