(function () {
    'use strict';

    angular
        .module('app')
        .controller('UserSearchController', UserSearchController);

    UserSearchController.$inject = ['$rootScope'];
    function UserSearchController($rootScope) {
        
        var vm = this;

        vm.books = [];

        initController();

        function initController() {
            vm.books = $rootScope.books;
            if($rootScope.globals.currentUser.role == "user" || $rootScope.globals.currentUser.role == "USER") {
                vm.check1=true;
            }
            else {
                vm.check1=false;
            }
        }


    }

})();