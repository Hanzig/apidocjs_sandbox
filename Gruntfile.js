"use strict";

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-env');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-apidoc');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		env: {
			dev:{
				NODE_ENV: 'development'
			}
		},

		apidoc: {
			myapp: {
				src: 'server/',
				dest: 'apidoc/',
				options: {
					debug: true,
					includeFilters: ['.*\\.js$'],
					excludeFilters: ['node_modules/']
				}
			}
		},

		nodemon: {
			dev: {
				script: 'app.js',
				options: {
					callback: function(nodemon) {
						nodemon.on('log', function(event) {
							console.log(event.colour);
						});
					},
					env: {
						NODE_ENV: 'development',
						PORT: '8000'
					},
					cwd: __dirname,
					ignore: ['node_modules/**'],
					ext: 'js,json',
				}
			}
		},

		watch: {
			grunt: {files: ['Gruntfile.js']},

			apidoc: {
				files: 'server/routes.js',
				tasks: ['apidoc']
			}
		},

		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			dev: {
				tasks: ['env:dev', 'nodemon', 'watch']
			}
		}
	});

	grunt.registerTask('dev', ['concurrent:dev']);
};
