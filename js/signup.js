app.controller("signupCtrl", function ($scope, $rootScope, $http, $routeParams) {
    let user
    $scope.students = []
    $scope.student = {}
    let url = `db/Students.js`
    $http.get(url).then(response => {
        $scope.students = response.data
    })

    $scope.signUp = () => {
        let checkedUsername = false
        // $http({
        //     method: "POST",
        //     url: "db/Students.js",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify($scope.student)
        // }).then(function mySuccess(response) {
        //     console.log(response.data);
        // }, function myError(response) {
        //     console.log(response.statusText);
        // });
        $scope.students.forEach(std => {
            if ($scope.student.username == std.username) {
                checkedUsername = true
                alert("Tài khoản đã tồn tại!")
            }
        });

        if (checkedUsername == false) {
            sessionStorage.setItem('student', JSON.stringify($scope.student))
            user = JSON.parse(sessionStorage.getItem('student'))
            $scope.students.push(user)
            window.location.href = "#!signin";
            console.log($scope.students)
            checkedUsername = true
            alert("Đăng ký tài khoản thành công!")
        }
    }
})