(function () {
    'use strict';

    angular
        .module('app')
        .controller('GetAllUsersController', GetAllUsersController);

    GetAllUsersController.$inject = ['UserService'];
    function GetAllUsersController(UserService) {
        var vm = this;

        vm.users = [];

        initController();
        
        function initController() {
            UserService.GetAll(function(response) {
                vm.users = response.data;
            });
        }
    }

})();