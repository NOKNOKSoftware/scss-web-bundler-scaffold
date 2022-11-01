const gulp          = require( 'gulp' );
const sourcemaps    = require( 'gulp-sourcemaps' );
const sass          = require( 'gulp-sass' )( require( 'sass' ) );

const SCSS_SRC = [ './src/*.scss' ];

gulp.task( 'build', () => {
    return gulp.src( SCSS_SRC )
        .pipe( sourcemaps.init() )
        .pipe( sass( { outputStyle: 'compressed' } ).on( 'error', sass.logError ) )
        .pipe( sourcemaps.write('./') )
        .pipe( gulp.dest( './dist' ) )
} );

gulp.task( 'watch', () => gulp.watch( SCSS_SRC, gulp.parallel( 'build' ) ) );
