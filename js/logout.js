app.controller("logoutCtrl", function ($scope, $rootScope, $http, $routeParams) {
        if ($rootScope.usernameValue != undefined) {
                document.cookie = `username=;Max-Age=-99999999;`
                $rootScope.usernameValue = document.cookie
                        .split("; ")
                        .find((row) => row.startsWith("username="))
                        ?.split("=")[1]
                window.location.reload();
        }
})