import subprocess

dev_dependencies = [
    'gulp',
    'sass',
    'gulp-sass',
    'gulp-sourcemaps'
]

subprocess.run( 'npm install ' + ' '.join( dev_dependencies ), shell=True, check=True )
subprocess.run( 'gulp build', shell=True )