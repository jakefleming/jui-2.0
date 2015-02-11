module.exports = function (grunt) {
    grunt.initConfig({
        cfg: {
            dist: './'
        },
        prettysass: {
            options: {
                // Task-specific options go here.
                alphabetize: true
            },
            your_target: {
                src: ['scss/**/*.scss']
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: './scss',
                    src: ['*.scss'],
                    dest: './css',
                    ext: '.css'
                }]
            }//,
            //options: {
            //    style: 'compressed'
            //}
        },
        autoprefixer: {
            dist: {
                files: {
                    '<%= cfg.dist %>css/styles.css' : '<%= cfg.dist %>css/styles.css',
                    '<%= cfg.dist %>css/docs.css' : '<%= cfg.dist %>css/docs.css',
                    '<%= cfg.dist %>css/styles-scoped.css' : '<%= cfg.dist %>css/styles-scoped.css'
                }
            },
            options: {
                browsers: ['last 5 versions','iOS 6','Firefox 19','ie 10','ie 9']
            }
        },
        watch: {
            styles: {
                files: ['./scss/**/*.scss'],
                tasks: ['sass','autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-prettysass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};