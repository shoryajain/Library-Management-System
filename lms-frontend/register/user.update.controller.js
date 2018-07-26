(function () {
    'use strict';

    angular
        .module('app')
        .controller('UserUpdateController', UserUpdateController);

    UserUpdateController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
    function UserUpdateController(UserService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.userupdate = userupdate;
        vm.alldetails = alldetails;

        initController();

        function initController() {
            alldetails();
            if($rootScope.globals.currentUser.role=="user" || $rootScope.globals.currentUser.role=="USER") {
                vm.cancel = true;
            }
            else {
                vm.cancel = false;
            }
        }

        function alldetails () {
            UserService.GetByUsername($rootScope.globals.currentUser.username, function (response) {
                vm.user = response.data;
            });
        }
 
        function userupdate() {
            vm.dataLoading = true;
                    UserService.Update(vm.user, function (response) {
                        if(response.data=="") {
                            FlashService.Success('Details Succesfully Updated', true);
                             $location.path('/login');
                        }
                        else {
                            FlashService.Error('Details could not be updated. Please try again');
                            $location.path('/user-update');
                        }
                    });
            vm.dataLoading = false;    
        }
    }

})();
