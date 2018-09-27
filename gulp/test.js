import gulp from 'gulp';
import mocha from 'gulp-mocha';

const mochaGlobals = ['stub', 'spy', 'expect', 'Mn'];

function gulpMocha(setupFile) {
	return gulp.src(
		[setupFile,'test/unit/**/*.js'],
		{read: false}
	)
		.pipe(mocha({
			reporter: 'dot',
			globals: mochaGlobals,
			ignoreLeaks: false,
		}));
}


export function test() {
	require("babel-register");
	return gulpMocha('test/setup.js');
}

gulp.task('test', test);
