module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-replace');


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      style: {
        files: {
          'css/style.css': 'sass/style.scss',
          'lobsterchat-angular/app/assets/css/style.css': 'sass/style.scss'
        }
      },

      build: {
        files: {
          '../app/assets/css/style.css': 'sass/style.scss'
        }
      }
    },

    copy: {

      build: {
        files: [{
          expand: true,
          src: [
            'img/**'
          ],
          dest: '../app/assets',
        }]
      }
    },

    clean: {
      build: ['../app/assets/img/'],
      options: { force: true } 
    },

    autoprefixer: { 
      options: { 
        browsers: ["last 2 version", "ie 10"] 
      }, 

      build: { 
        src: "../app/assets/css/style.css" 
      }
    },

    cmq: {
      options: {
        log: false
      },
      build: {
        files: {
          '../app/assets/css/': ['../app/assets/css/*.css']
        }
      }
    },

    imagemin: { 
      images: { 
        options: { 
          optimizationLevel: 3 
        }, 
        files: [{ 
          expand: true, 
          src: ["../app/assets/img/**/*.{png,jpg,gif,svg}"] 
        }] 
      } 
    },

    cssmin: { 
      build: { 
        options: { 
          keepSpecialComments: 0, 
          report: "gzip" 
        }, 

        files: { 
          "../app/assets/css/style.min.css": ["../app/assets/css/style.css"] 
        } 
      } 
    },


    watch: {
      style: {
          files: ['sass/*.scss', 'sass/**/*.scss'],
          tasks: ['sass:style'],
          options: {
            spawn: false
          }
      }
    }
  });


  grunt.registerTask('default', ['sass:style']);
  grunt.registerTask('build', ['clean:build', 'copy:build', 'sass:build', 'autoprefixer:build' , 'cmq:build', 'cssmin:build' , 'imagemin']);
};
