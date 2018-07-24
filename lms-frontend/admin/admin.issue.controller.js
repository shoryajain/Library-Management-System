(function () {
    'use strict';

    angular
        .module('app')
        .controller('AdminIssuedController', AdminIssuedController);

    AdminIssuedController.$inject = ['BookService', 'FlashService', '$rootScope'];
    function AdminIssuedController(BookService, FlashService, $rootScope) {
        var vm = this;

        vm.num = null;
        vm.total = total;
        vm.byAuthor = byAuthor;
        vm.byName = byName;

        function total() {
            BookService.GetIssuedBooks(function(response) {
                vm.num = response.data;
                FlashService.Success("The total issued of books are " +vm.num);
            });
        }

        function byAuthor() {
            vm.dataLoading = true;
            vm.check = true;
            UserService.AllIssuedBooksByAuthor(vm.name, function (response) {
                vm.details = response.data;
            });
        }

        function byName() {
           vm.dataLoading = true;
            vm.check = true;
            UserService. AllIssuedBooksByBookName(vm.name, function (response) {
                vm.details = response.data;
            });
        }


    }

})();