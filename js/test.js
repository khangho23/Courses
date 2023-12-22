app.controller("testCtrl", function ($scope, $rootScope, $http, $routeParams, $interval) {
    if ($rootScope.usernameValue != undefined) {
        $scope.marks = 0;
        $scope.totalMarks = 0;

        $scope.ques = [];
        $scope.idMH = $routeParams.idMH;
        $scope.tenMH = $routeParams.tenMH;
        $http.get("db/Quizs/" + $scope.idMH + ".js").then(
            function (d) { $scope.ques = d.data; },
            function (d) {
                alert("Lỗi");
            });

        $scope.pageSize = 1;
        $scope.start = 1;
        $scope.next = function () {
            if ($scope.start < $scope.ques.length - $scope.pageSize) {
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
            sotrang = Math.ceil($scope.ques.length / $scope.pageSize);
            $scope.start = (sotrang - 1) * $scope.pageSize;
        }

        $scope.countMarks = (result, answ) => {
            if (result === answ) {
                $scope.marks += 1;
                $scope.totalMarks = ($scope.marks * 10 / $scope.ques.length).toFixed(2)
            }

            alert($scope.totalMarks)
        }

        $scope.m = 2
        $scope.s = 0;
        $scope.dongho = "";

        var thoiGian = function () {
            if ($scope.s === -1) {
                $scope.m--;
                $scope.s = 59;
            }
            if ($scope.m === -1) {
                $scope.m = 0
                $interval.cancel(loop)
                $scope.s = 0;
            }

            $scope.dongho = $scope.m + ":" + $scope.s;
        }

        var loop = $interval(function () {
            $scope.s--;
            thoiGian();
        }, 1000)

    } else {
        alert("Đăng nhập trước khi làm bài")
        window.location.href = "#!signin";
    }
})




