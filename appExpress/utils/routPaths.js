const routesPaths = [
    { path: '/', router: require('../routes/index') },
    { path: '/users', router: require('../routes/users') },
    { path: '/register', router: require('../routes/register') },
    { path: '/login', router: require('../routes/login') },
    { path: '/logout', router: require('../routes/logout') },
    { path: '/profile', router: require('../routes/profile') },
];

module.exports = routesPaths;