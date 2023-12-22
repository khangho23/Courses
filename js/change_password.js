app.controller("changePasswordCtrl", function ($scope, $rootScope, $http, $routeParams) {
    let user = JSON.parse(sessionStorage.getItem("student"))
    $scope.password = {}
    $scope.students = []
    let url = `db/Students.js`
    $http.get(url).then(response => {
        $scope.students = response.data
    })

    $scope.changePassword = () => {
        if (user != null) {
            $scope.students.push(user)
        }

        $scope.students.forEach(std => {

            if ($rootScope.usernameValue == std.username) {
                if ($scope.password.currentPassword == std.password) {
                    if ($scope.password.newPassword == $scope.password.confirmPassword) {
                        std.password = $scope.password.newPassword
                        alert("successfully")
                    }
                } else {
                    alert("password not match")
                }
            }

        })
    }
})