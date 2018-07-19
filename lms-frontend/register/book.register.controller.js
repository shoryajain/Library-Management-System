(function () {
    'use strict';

    angular
        .module('app')
        .controller('BookRegisterController', BookRegisterController);

    BookRegisterController.$inject = ['AuthorService','BookService', '$location', '$rootScope', 'FlashService'];
    function BookRegisterController(AuthorService, BookService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.register = register;

        vm.bookupdate = bookupdate;

        vm.alldetails = alldetails;

        vm.checking = checking;

        function alldetails () {
            vm.dataLoad = true;
            BookService.GetByBookname(vm.book.name, function (response) {
                if (response.data!="") {
                    vm.check = true;
                    vm.book = response.data;
                } else {
                    FlashService.Error("Book doesn't exist");
                    $location.path('/book-update');
                }
            vm.dataLoad = false;
            });
        }
 
        function bookupdate() {
            vm.dataLoading = true;
                    BookService.Update(book, function (response) {
                        if(response.success) {
                            FlashService.Success('Details Succesfully Updated');
                            $location.path('/');
                        }
                        else {
                            FlashService.Error('Details could not be updated. Please try again');
                            $location.path('/book-update');
                        }
                    });
            vm.dataLoading = false;    
        }

        function register() {
            vm.dataLoading = true;
            BookService.Create(vm.book, vm.auth.id, function (response) {
                if (response.success) {
                    FlashService.Success('Book registration successful', true);
                    $location.path('/login');
                } else {
                    FlashService.Error('Registration unsuccessful. Please try again');
                    vm.dataLoading = false;
                }
            });
        }
        function checking(authname) {
            vm.dataLoad = true;
            AuthorService.GetByAuthorname(vm.auth, function (response) {
                if (response.data!="") {
                    vm.id = response.data.id;
                    vm.check=true;
                } else {
                    FlashService.Error('Author does not exist. Please add author first.');
                    vm.check=false;
                }
             vm.dataLoad = false;
            });
        }
    }

})();
