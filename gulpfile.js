var gulp = require('gulp'),
jasmine = require('gulp-jasmine'),
Server = require('karma').Server;



gulp.task('default',function(){

});

gulp.task('test_t', function(){
    return gulp.src('spec/*.js')
        .pipe(jasmine({verbose: true}))
});

gulp.task('test', function(done){
    new Server({
        configFile: __dirname + '/karma.config.js',
        singleRun: true
    }, done).start();
});