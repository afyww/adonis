import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const AuthController = () => import('#controllers/auth_controller')
const PagesController = () => import('#controllers/pages_controller')
const UsersController = () => import('#controllers/users_controller')
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
    router.post('/users', [UsersController, 'store']).as('postuser')
    router.get('user/:id', [UsersController, 'destroy']).as('deluser')
    //DISCOUNT
    router.get('/discount', [DiscountsController, 'index']).as('discount')
    router.get('/adddiscount', [UsersController, 'create']).as('adddiscount')
    //LOGOUT
    router.post('/logout', [AuthController, 'logout']).as('logout')
  })
  .middleware([middleware.auth()])
