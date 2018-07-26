(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', 'BookService', 'FlashService', '$rootScope', '$location'];
    function HomeController(UserService, BookService, FlashService, $rootScope, $location) {
        var vm = this;

        vm.searchname = searchname;
        vm.searchauthor = searchauthor;
        vm.searchlang = searchlang;
        vm.deleteUser = deleteUser;

        function deleteUser() {
            UserService.GetByUsername(vm.uname, function(response) {
                if(response.data!="") {
                    UserService.Delete(vm.uname, function(response) {
                        if(response.data=="") {
                            FlashService.Success('User deleted');
                            $location.path('/admin');
                        }
                        else {
                            FlashService.Error('User could not be deleted. Please try again');
                        }
                    });
                }
                else {
                    FlashService.Error('User does not exist');
                }
            });
        }

        function searchname(searchparam) {
            BookService.GetByBookname(searchparam, function(response) {
                $rootScope.books = response.data;
                if($rootScope.books!="") {
                    $location.path('/user/search/byauth');
                }
                else {
                    FlashService.Error('Book does not exist');
                }
            });
        }

        function searchauthor(searchparam) {
            BookService.GetBookByAuthorname(searchparam, function(response) {
                $rootScope.books = response.data;
                if($rootScope.books!="") {
                    $location.path('/user/search/byauth');
                }
                else {
                    FlashService.Error('Book does not exist');
                }
            });
        }

        function searchlang(searchparam) {
            BookService.GetBookByLanguage(searchparam, function(response) {
                $rootScope.books = response.data;
                if($rootScope.books!="") {
                    $location.path('/user/search/bylang');
                }
                else {
                    FlashService.Error('Book does not exist');
                }
            });
        }
    }

})();