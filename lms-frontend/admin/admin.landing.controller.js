(function () {
    'use strict';

    angular
        .module('app')
        .controller('AdminLandingController', AdminLandingController);

    AdminLandingController.$inject = ['UserService', '$rootScope'];
    function AdminLandingController(UserService, $rootScope) {
        var vm = this;

        vm.user = null;
        vm.users = [];

        initController();

        function initController() {
            loadAllUsers();
        }

        function loadAllUsers() {
            UserService.GetAll(function(response) {
                    vm.users = response.data;
                });
        }
    }

})();