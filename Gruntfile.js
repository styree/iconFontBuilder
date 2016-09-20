(function() {
    'use strict';

    module.exports = function(grunt) {

        // Project configuration.
        grunt.initConfig({
            concat: {
                options: {},
                dist: {
                    src: ['app/src/js/**/*.js'],
                    dest: 'app/build/js/scripts.js',
                },
            },
						
			clean: {
				options:{
					'no-write': false
				},
				clean: ['/build/font/']
			},
			
			svgicons2svgfont: {
				options: {
					fontName: 'newIconFont',
					normalize: true
				},
				your_target: {
					src: 'src/icons/*.svg',
					dest: 'build/font/'
				},
			},

        }); // end config

        // These plugins provide necessary tasks.
		grunt.loadNpmTasks('grunt-svgicons2svgfont');
		grunt.loadNpmTasks('grunt-contrib-clean');

        // Default task.
        grunt.registerTask('default', ['clean', 'svgicons2svgfont']);

    };

}());