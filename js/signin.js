app.controller("signinCtrl", function ($scope, $rootScope, $http, $routeParams) {
    let user = JSON.parse(sessionStorage.getItem('student'))
    $scope.student = {}
    $scope.students = []
    let url = `db/Students.js`
    $http.get(url).then(response => {
        $scope.students = response.data
    })

    let checked = false

    $scope.signIn = () => {
        if (user != null) {
            // document.cookie = `username = null`
            $scope.students.push(user)
        }

        $scope.students.forEach(std => {

            if (std.username == $scope.student.username) {
                if (std.password == $scope.student.password) {
                    document.cookie = `username = ${std.username}`

                    $rootScope.usernameValue = document.cookie
                        .split("; ")
                        .find((row) => row.startsWith("username="))
                        ?.split("=")[1]


                    checked = true
                    alert("Đăng nhập thành công")
                    window.location.href = "#!home";
                }
            }

        })


        if (checked == false) {
            alert("Đăng nhập thất bại")
        }

    }

})