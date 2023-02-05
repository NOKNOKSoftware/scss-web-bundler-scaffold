# Scss Web Bundler Scaffold
Automatic scaffolding for a scss web bundles powered by gulp-sass. Geared towards WordPress development

## Prerequists:
Make sure you install the following
- Python 3.10 or later with dependencies

## Python 3.10 or later with dependencies
You can check if python is already installed by running the following command ```python --version```

Download Python [here](https://www.python.org/downloads/). 

### Python dependencies
Once installed, you can use the following command to install each of the required python dependencies.
``` sh
pip install cookiecutter
```

If you have any issues during dependency installation, try reinstalling python.


## Creating a new Typescript bundle project
Once all pre-requisites are installed, you can run the following command to scaffold a new bundler project.
``` sh
python -m cookiecutter https://github.com/NOKNOKSoftware/scss-web-bundler-scaffold

```

## Cookiecutter props
- ```package_slug``` - Set's the package slug, this is also the name of the projects output folder.


## Gulp Commands
- ```gulp build``` - Bundle scss files and export css to ```dist/``` directory
- ```gulp watch``` - Watch scss files for changes and automatically build when files are changed
