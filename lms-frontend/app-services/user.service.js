(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        service.CheckUname = CheckUname;
        service.CheckPno = CheckPno;
        service.CheckPnoTrue = CheckPnoTrue;
        service.GetUserBooks = GetUserBooks;
        service.GetUserRole = GetUserRole;
        service.UserIssueBook = UserIssueBook;
        service.UpdateUserRole = UpdateUserRole;

        return service;

        function GetAll(callback) {
            (function() {$http.get('http://localhost:8080/admin/users')
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function GetByUsername(uname, callback) {
            (function() {$http.get('http://localhost:8080/admin/user' , {params: {uname: uname}})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        } 
        
        function Create(user, callback) {
            (function() {$http.post('http://localhost:8080/adduser' , {user:user})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        } 
        function Update(user, callback) {
            (function() {$http.put('http://localhost:8080/updateuser' , {uname:uname, user:user})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function Delete(uname, callback) {
            (function() {$http.delete('http://localhost:8080/deleteuser',{params: {uname: uname}})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function CheckUname(uname, callback) {
            (function() {$http.get('http://localhost:8080/usercheck',{params: {uname: uname}})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function CheckPno(pno, callback) {
            (function() {$http.get('http://localhost:8080/userforgetpass',{params: {pno: pno}})
                        .then(function(response) {
                            callback(response);                          
                        });                     
                    })();
        }
        function CheckPnoTrue(pno, callback) {
            (function() {$http.get('http://localhost:8080/userforgetpass/true',{params: {pno: pno}})
                                    .then(function(response) {
                            callback(response);
                             });                     
                            })();
        }
        function GetUserBooks(uname, callback) {
            (function() {$http.get('http://localhost:8080/user/issuedbooks',{params: {uname: uname}})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function GetUserRole(uname, callback) {
            (function() {$http.get('http://localhost:8080/role',{params: {uname: uname}})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function UserIssueBook(uname, bname, callback) {
            (function() {$http.put('http://localhost:8080/user/newbook',{params: {uname: uname, bname:bname}})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function UpdateUserRole(uname, role, callback) {
            (function() {$http.put('http://localhost:8080/admin/role',{params: {uname: uname, role:role}})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }

    }

})();
