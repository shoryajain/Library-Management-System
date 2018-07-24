(function () {
    'use strict';

    angular
        .module('app')
        .controller('BookExploreController', BookExploreController);

    BookExploreController.$inject = ['BookService', 'FlashService', '$rootScope'];
    function BookExploreController(BookService, FlashService, $rootScope) {
        var vm = this;

        vm.allBooks;
        vm.check;
        vm.getgenres = getgenres;
        vm.getauthors = getauthors;
        vm.getAllBooksByGenre = getAllBooksByGenre;
        vm.getAllBooksByAuthor = getAllBooksByAuthor;

        initController();

        function initController() {
            getgenres();
            getauthors();
        }

        function getgenres() {
            BookService.GetAllGenres(function(response) {
                    vm.allgenres = response.data;
                });
        }

        function getauthors() {
            BookService.GetAllAuthors(function(response) {
                    vm.allauthors = response.data;
                });
        }

        function getAllBooksByGenre(param) {
            BookService.GetBookByGenre(param, function (response) {
                    vm.check=true;
                    vm.allBooks = response.data;
            });
        }

        function getAllBooksByAuthor(param) {
            BookService.GetBookByAuthorname(param, function (response) {
                    vm.check=true;
                    vm.allBooks = response.data;
            });
        }
    }

})();