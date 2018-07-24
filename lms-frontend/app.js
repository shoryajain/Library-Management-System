(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/user', {
                controller: 'HomeController',
                templateUrl: 'user/user.view.html',
                controllerAs: 'vm'
            })

            .when('/user/genres', {
                controller: 'HomeController',
                templateUrl: 'user/user.view.html',
                controllerAs: 'vm'
            })

            .when('/user/authors', {
                controller: 'HomeController',
                templateUrl: 'user/user.view.html',
                controllerAs: 'vm'
            })

            .when('/user/search/byname', {
                controller: 'UserSearchController',
                templateUrl: 'user/user.search.book.view.html',
                controllerAs: 'vm'
            })

            .when('/user/issue', {
                controller: 'IssueBooksController',
                templateUrl: 'issue-books/issue-books.view.html',
                controllerAs: 'vm'
            })

            .when('/user/seeissued', {
                controller: 'SeeIssuedBooksController',
                templateUrl: 'issue-books/see.issued-books.view.html',
                controllerAs: 'vm'
            })

            .when('/user/search/byauth', {
                controller: 'UserSearchController',
                templateUrl: 'user/user.search.author.view.html',
                controllerAs: 'vm'
            }) 

            .when('/user/search/bylang', {
                controller: 'UserSearchController',
                templateUrl: 'user/user.search.lang.view.html',
                controllerAs: 'vm'
            }) 

            .when('/admin', {
                controller: 'AdminLandingController',
                templateUrl: 'admin/admin.view.html',
                controllerAs: 'vm'
            })

            .when('/admin/inventory', {
                controller: 'AdminHomeController',
                templateUrl: 'admin/admin.inventory.html',
                controllerAs: 'vm'
            })

            .when('/admin/authors', {
                controller: 'AuthorController',
                templateUrl: 'author/author.view.all.html',
                controllerAs: 'vm'
            })

            .when('/admin/books', {
                controller: 'BookController',
                templateUrl: 'book/book.view.all.html',
                controllerAs: 'vm'
            })

            .when('/admin/users', {
                controller: 'AdminHomeController',
                templateUrl: 'admin/admin.users.view.html',
                controllerAs: 'vm'
            })

            .when('/issued-books-author', {
                controller: 'AdminIssuedController',
                templateUrl: 'admin/see.issued-books.author.view.html',
                controllerAs: 'vm'
            })

            .when('/issued-books-name', {
                controller: 'AdminIssuedController',
                templateUrl: 'admin/see.issued-books.name.view.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })
            
            .when('/register-user', {
                controller: 'RegisterController',
                templateUrl: 'register/register.view.html',
                controllerAs: 'vm'
            }) 

            .when('/register-author', {
                controller: 'AuthorRegisterController',
                templateUrl: 'register/author.register.view.html',
                controllerAs: 'vm'
            }) 

            .when('/register-book', {
                controller: 'BookRegisterController',
                templateUrl: 'register/book.register.view.html',
                controllerAs: 'vm'
            }) 

            .when('/forget-password', {
                controller: 'ForgetPasswordController',
                templateUrl: 'forget-password/forget-password.view.html',
                controllerAs: 'vm'
            })

            .when('/view-book', {
                controller: 'BookController',
                templateUrl: 'book/book.view.html',
                controllerAs: 'vm'
            })

            .when('/view-author', {
                controller: 'AuthorController',
                templateUrl: 'author/author.view.html',
                controllerAs: 'vm'
            })

            .when('/user-update',{
                controller: 'UserUpdateController',
                templateUrl: 'register/user.update.view.html',
                controllerAs: 'vm'
            })

            .when('/book-update',{
                controller: 'BookRegisterController',
                templateUrl: 'register/book.update.view.html',
                controllerAs: 'vm'
            })

            .when('/author-update',{
                controller: 'AuthorRegisterController',
                templateUrl: 'register/author.update.view.html',
                controllerAs: 'vm'
            })

            .when('/user-delete',{
                controller: 'HomeController',
                templateUrl: 'user/user.delete.view.html',
                controllerAs: 'vm'
            })

            .when('/book-delete',{
                controller: 'BookController',
                templateUrl: 'book/book.delete.view.html',
                controllerAs: 'vm'
            })

            .when('/author-delete',{
                controller: 'AuthorController',
                templateUrl: 'author/author.delete.view.html',
                controllerAs: 'vm'
            })

            .when('/role-update',{
                controller: 'UpdateRoleController',
                templateUrl: 'role/update-role.view.html',
                controllerAs: 'vm'
            })

            .when('/role-view',{
                controller: 'GetRoleController',
                templateUrl: 'role/role.view.html',
                controllerAs: 'vm'
            })

            .when('/user/search/byname/selection', {
                controller: 'IssueBooksController',
               templateUrl: 'issue-books/user.search.book.selection.html',
               controllerAs: 'vm'
            })

            .when('/user/issue/results', {
                controller: 'IssueBooksController',
                templateUrl: 'issue-books/user.search.book.selection.html',
                controllerAs: 'vm'
            })
            .when('/explore-author',{
                controller: 'BookExploreController',
                templateUrl: 'book/book.explore.author.view.html',
                controllerAs: 'vm'
            })
            
            .when('/explore-genre',{
                controller: 'BookExploreController',
                templateUrl: 'book/book.explore.genre.view.html',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/login' });
    }
    
    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        } 
        
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register-user', '/forget-password']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        }); 
    }

})();