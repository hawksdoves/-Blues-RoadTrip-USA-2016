
module.exports = function(config) {
  config.set({

    basePath: '../',

    frameworks: ['jasmine'],

    vendor: [
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDxY7pHJ_biZy5AQY9JxLQ3xvA_n6hnSqk"
    ],

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'public/**/*.js',
      'public/app.js',
      'test/unit/**/*.js',
      'test/mocks/*.js'
    ],

    autoWatch: true,

    browsers: ['Chrome'],



    plugins : [
                'karma-chrome-launcher',
                'karma-jasmine'
        ]
  })
}
