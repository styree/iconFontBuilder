(function() {
    'use strict';

    module.exports = function(grunt) {

        // Project configuration.
        grunt.initConfig({
            clean: {
                options: {},
                clean: ['/build/font/']
            },

            svgicons2svgfont: {
                options: {
                    fontName: 'newIconFont',
                    normalize: true
                },
                build: {
                    src: 'src/icons/**/*.svg',
                    dest: 'build/'
                },
            },

            svg2ttf: {
                svg2ttf: {
                    src: 'build/newIconFont.svg',
                    dest: 'build/'
                }
            }

        }); // end config

        // These plugins provide necessary tasks.
        grunt.loadNpmTasks('grunt-svgicons2svgfont');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-svg2ttf');

        // Default task.
        grunt.registerTask('default', ['clean', 'svgicons2svgfont', 'svg2ttf']);

    };

}());
