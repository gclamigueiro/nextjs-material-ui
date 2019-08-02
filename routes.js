const routes = module.exports = require('next-routes')()

routes
.add('home', '/', 'index')
.add('content', '/contenido/:id', 'content')
.add('about', '/nosotros', 'about')
.add('login', '/login', 'login')
.add('register', '/registro', 'register')
