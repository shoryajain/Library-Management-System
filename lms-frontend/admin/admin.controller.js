(function () {
    'use strict';

    angular
        .module('app')
        .controller('AdminHomeController', AdminHomeController);

    AdminHomeController.$inject = ['UserService', 'BookService', 'FlashService', '$rootScope'];
    function AdminHomeController(UserService, BookService, FlashService, $rootScope) {
        var vm = this;

        vm.num = null;
        vm.total = total;
        vm.unique = unique;

        function total() {
            BookService.GetTotalBooks(function(response) {
                vm.num = response.data;
                FlashService.Success("The total number of books are " +vm.num);
            });
        }

        function unique() {
            BookService.GetUniqueBooks(function(response) {
                vm.num = response.data;
                FlashService.Success("The total number of unique books are " +vm.num);
            });
        }
    }

})();