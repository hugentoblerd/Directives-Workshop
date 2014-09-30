var app = angular.module('myDirective', []);

app.directive('pending', function ($q) {
  return {
    restrict: 'AE',
    scope: {
      request: '&',
    },
    link: function (scope, elem, attr) {
      // console.log(scope, elem, attr);
      var spinner = angular.element('<i class="fa fa-cog fa-spin"></i>').hide();
      elem.after(spinner);
      elem.click(function (event) {
        spinner.show();
        elem.text('Submitting');
        scope.request()
          .then(function () {
            elem.text('Submit');
            spinner.hide();
        })
      })
    }
  }





});