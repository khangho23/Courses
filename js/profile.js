app.controller("profileCtrl", function ($scope, $rootScope, $http, $routeParams) {
    $scope.password = {}
    $scope.student = {}
    $scope.students = []
    let url = `db/Students.js`
    $http.get(url).then(response => {
        $scope.students = response.data
    })

    $scope.student.username = $rootScope.usernameValue   

    $scope.hideStudent = () => {
        $scope.students.forEach(std => {
            if ($rootScope.usernameValue == std.username) {
                $scope.student.fullname = std.fullname
                $scope.student.email = std.email
                $scope.student.schoolfee = std.schoolfee
                $scope.student.birthday = new Date(std.birthday)
                $scope.student.gender = std.gender
            }
        })
    }

    $scope.changeMyProfile = () => {
        $scope.students.forEach(std => {
            if ($rootScope.usernameValue == std.username) {
                std = angular.copy($scope.student)
                console.log(std)
            }
        })
    }
})