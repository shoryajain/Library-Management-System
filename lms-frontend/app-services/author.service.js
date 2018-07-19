(function () {
    'use strict';

    angular
        .module('app')
        .factory('AuthorService', AuthorService);

    AuthorService.$inject = ['$http'];
    function AuthorService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetByAuthorname = GetByAuthorname;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll(callback) {
            (function() {$http.get('http://localhost:8080/admin/authors')
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function GetByAuthorname(name, callback) {
            (function() {$http.get('http://localhost:8080/admin/author' ,{params: {name: name}})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function Create(author, callback) {
            (function() {$http.post('http://localhost:8080/admin/author' , {author:author})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function Update(author, callback) {
            (function() {$http.put('http://localhost:8080/admin/updateauthor' , {author:author})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
        function Delete(id, callback) {
            (function() {$http.delete('http://localhost:8080/admin/deleteauthor',{params: {id: id}})
                        .then(function(response) {
                            callback(response);
                        });                     
                    })();
        }
    }

})();
