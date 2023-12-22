let app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "subject.html",
    })
        .when("/about", {
            templateUrl: "about.html",
        })
        .when("/contact", {
            templateUrl: "contact.html",
        })
        .when("/signup", {
            templateUrl: "signup.html",
            controller: "signupCtrl"
        })
        .when("/signin", {
            templateUrl: "signin.html",
            controller: "signinCtrl"
        })
        .when("/changePassword", {
            templateUrl: "change_password.html",
            controller: "changePasswordCtrl"
        })
        .when("/logout", {
            templateUrl: "subject.html",
            controller: "logoutCtrl"
        })
        .when("/profile", {
            templateUrl: "profile.html",
            controller: "profileCtrl"
        })
        .when("/forgotPassword", {
            templateUrl: "forgot_password.html",
            controller: "forgotPasswordCtrl"
        })
        .when("/test/:idMH/:tenMH", { templateUrl: "test.html", controller: "testCtrl" })
        .otherwise({ templateUrl: "<h3>Đây là trang chủ</h3>" });
})

app.controller("myCtrl", function ($scope, $rootScope, $http) {
    // Tách chuỗi và lấy value cookie của username đã đăng nhập
    $rootScope.usernameValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("username="))
        ?.split("=")[1]

    $scope.subjects = [];
    $http.get("db/Subjects.js").then(
        function (r) { $scope.subjects = r.data },
        function (d) { alert(`Lỗi: ${d.statusText}`) }
    )

    $scope.pageSize = 6;
    $scope.start = 0;
    $scope.next = function () {
        if ($scope.start < $scope.subjects.length - $scope.pageSize) {
            $scope.start += $scope.pageSize;
        }
    }
    $scope.prev = function () {
        if ($scope.start > 0) {
            $scope.start -= $scope.pageSize;
        }
    }
    $scope.first = function () { $scope.start = 0 }
    $scope.last = function () {
        sotrang = Math.ceil($scope.subjects.length / $scope.pageSize);
        $scope.start = (sotrang - 1) * $scope.pageSize;
    }
})