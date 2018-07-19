(function () {
    'use strict';

    angular
        .module('app')
        .controller('AuthorRegisterController', AuthorRegisterController);

    AuthorRegisterController.$inject = ['AuthorService', '$location', '$rootScope', 'FlashService'];
    function AuthorRegisterController(AuthorService, $location, $rootScope, FlashService) {
        var vm = this;

        vm.register = register;

        vm.authorupdate = authorupdate;

        vm.alldetails = alldetails;

        function alldetails () {
            vm.dataLoad = true;
            AuthorService.GetByAuthorname(vm.author.name, function (response) {
                if (response.data!="") {
                    vm.check = true;
                    vm.author = response.data;
                } else {
                    FlashService.Error("Author doesn't exist");
                }
            vm.dataLoad = false;
            });
        }
 
        function authorupdate() {
            vm.dataLoading = true;
                    AuthorService.Update(author, function (response) {
                        if(response.success) {
                            FlashService.Success('Details Succesfully Updated');
                            $location.path('/');
                        }
                        else {
                            FlashService.Error('Details could not be updated. Please try again');
                            $location.path('/author-update');
                        }
                    })
            vm.dataLoading = false;    
        }


        function register() {
            vm.dataLoading = true;
            AuthorService.Create(vm.author, function (response) {
                if (response.success) {
                    FlashService.Success('Author registration successful', true);
                    $location.path('/login');
                } else {
                    FlashService.Error('Registration unsuccessful. Please try again');
                    vm.dataLoading = false;
                }
            });
        }
    }

})();
