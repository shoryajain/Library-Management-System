(function () {
    'use strict';

    angular
        .module('app')
        .controller('AuthorController', AuthorController);

    AuthorController.$inject = ['AuthorService', 'FlashService', '$rootScope'];
    function AuthorController(AuthorService, FlashService, $rootScope) {
        var vm = this;
        vm.allAuthors = [];
        vm.loadAllAuthors = loadAllAuthors;
        vm.deleteAuthor = deleteAuthor;

        initController();

        function initController() {
            loadAllAuthors();
        }

        function loadAllAuthors() {
            AuthorService.GetAll(function(response) {
                    vm.allAuthors = response.data;
                });
        }

        function deleteAuthor() {
            AuthorService.GetByAuthorname(vm.name, function(response) {
                if(response.data!="") {
                    vm.id = response.data.id;
                    AuthorService.Delete(vm.id, function(response) {
                        if(response.data=="") {
                            FlashService.Success('Author deleted');
                            $location.path('/admin');
                        }
                        else {
                            FlashService.Error('Author could not be deleted. Please ensure all books by this author have been deleted before trying again');
                        }
                    });
                }
                else {
                    FlashService.Error('Author does not exist.');
                }
                $location.path('/admin');
            });
        }
    }

})();