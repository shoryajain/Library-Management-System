(function () {
    'use strict';

    angular
        .module('app')
        .controller('BookController', BookController);

    BookController.$inject = ['BookService', 'FlashService', '$rootScope'];
    function BookController(BookService, FlashService, $rootScope) {
        var vm = this;
        vm.allBooks = [];
        vm.loadAllBooks = loadAllBooks;
        vm.deleteBook = deleteBook;

        initController();

        function initController() {
            loadAllBooks();
        }

        function loadAllBooks() {
            BookService.GetAll(function(response) {
                    vm.allBooks = response.data;
                });
        }

        function deleteBook() {
            BookService.GetByBookname(vm.name, function(response) {
                if(response.data!="") {
                     vm.id = response.data.id;
                    BookService.Delete(vm.id, function(response) {
                        if(response.success) {
                            FlashService.Success('Book deleted');
                        }
                        else {
                            FlashService.Error('Book could not be deleted. Please try again');
                        }
                    });
                }
                else {
                    FlashService.Error('Book does not exist');
                }
                $location.path('/admin');
            });
        }
    }

})();