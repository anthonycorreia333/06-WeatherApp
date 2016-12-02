(function() {
    'use strict';

    angular
        .module('app')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['$http'];

    /* @ngInject */
    function WeatherController($http) {
        var vm = this;
        vm.callWeatherController = callWeatherController;
        vm.hidden = true;
        vm.results = [];

        function callWeatherController(city) {
            $http
                .get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=cdb3dd37673de698ff2c51562b68edb1')
                .then(function(response) {
              
                    vm.weatherinfo = response.data;
                    vm.weatherinfo.main.temp = (vm.weatherinfo.main.temp * (9 / 5) - 459.67).toFixed(2);
                    vm.weatherinfo.main.temp_min = (vm.weatherinfo.main.temp_min * (9 / 5) - 459.67).toFixed(2);
                    vm.weatherinfo.main.temp_max = (vm.weatherinfo.main.temp_max * (9 / 5) - 459.67).toFixed(2);
                    vm.nowDate = new Date(new Date().getTime()).toLocaleDateString();
                    vm.nowTime = new Date(new Date().getTime()).toLocaleTimeString();
                    vm.results.push({ name: vm.weatherinfo.name, date: vm.nowDate, time: vm.nowTime });
                })


            vm.hidden = false;



        }
    }
})();
