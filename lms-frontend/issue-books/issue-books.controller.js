(function () {
    'use strict';

    angular
        .module('app')
        .controller('IssueBooksController', IssueBooksController);

    IssueBooksController.$inject = ['$location', '$rootScope', 'UserService', 'FlashService'];
    function IssueBooksController($location, $rootScope, UserService, FlashService) {
        var vm = this;

        vm.issuebooks = issuebooks;
        function issuebooks() {
            vm.dataLoading = true;
            vm.book.uname = $rootScope.globals.currentUser.username;
            UserService.UserIssueBook(vm.book.uname, vm.book.bname, function (response) {
                if (response.data) {
                    FlashService.Success('Book Issued Successfully', true);
                    $location.path('/user');
                } else {
                        FlashService.Error('Book could not be issued. Please try again');
                        vm.dataLoading = false;
                }
                });
   
            }
        }

})();
