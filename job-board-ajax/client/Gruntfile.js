module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
      
        jshint: {
            all: ['Gruntfile.js', 'js/app.js'],
            options: {
                camelcase: true,
                curly: true,
                eqeqeq: true,
                indent: 4,
                newcap: true,
                quotmark: 'single',
                maxparams: 4,
                maxdepth: 4,
                maxstatements: 25,
                maxcomplexity: 8,
                maxlen: 120,
                white: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    grunt.registerTask('default', ['jshint']);
};