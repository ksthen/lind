var im = require('imagemagick');

var fs = require('fs-extra');
var rimraf = require('rimraf');


var walkPath = './src/assets/images';

var walk = function (dir, done) {

    fs.readdir(dir, function (error, list) {
        if (error) {
            return done(error);
        }
        var i = 0;

        (function next () {
            var file = list[i++];

            if (!file) {
                return done(null);
            }

            file = dir + '/' + file;
            
            fs.stat(file, function (error, stat) {
        
                if (stat && stat.isDirectory()) {
                    walk(file, function (error) {
                        next();
                    });
                } else {


                    if (file.slice(-3) === 'gif' ||
                        file.slice(-3) === 'GIF' ||
                        file.slice(-3) === 'png' ||
                        file.slice(-3) === 'PNG') {       

                        // 1920
                        im.convert([file, '-resize', '1920', file.slice(0, -4) + '-1920' + file.slice(-4)], 
                        function(err, stdout){
                            if (err) throw err;
                                console.log('err', err);
                                console.log('stdout:', stdout);
                        });      

                        // 1280
                        im.convert([file, '-resize', '1280', file.slice(0, -4) + '-1280' + file.slice(-4)], 
                        function(err, stdout){
                            if (err) throw err;
                                console.log('err', err);
                                console.log('stdout:', stdout);
                        });

                        // 960
                        im.convert([file, '-resize', '960', file.slice(0, -4) + '-960' + file.slice(-4)], 
                        function(err, stdout){
                            if (err) throw err;
                                console.log('err', err);
                                console.log('stdout:', stdout);
                        });

                        // 640
                        im.convert([file, '-resize', '640', file.slice(0, -4) + '-640' + file.slice(-4)], 
                        function(err, stdout){
                            if (err) throw err;
                                console.log('err', err);
                                console.log('stdout:', stdout);
                        });                           

                        // 320
                        im.convert([file, '-resize', '320', file.slice(0, -4) + '-320' + file.slice(-4)], 
                        function(err, stdout){
                            if (err) throw err;
                                console.log('err', err);
                                console.log('stdout:', stdout);
                        });

                    } else if (file.slice(-4) === 'jpeg' ||  file.slice(-4) === 'JPEG') {
                        // 1920
                        im.convert([
                            file, 
                            '-resize', '1920',
                            '-sampling-factor', '4:2:0', 
                            '-strip',
                            '-interlace', 'JPEG', 
                            '-colorspace', 'sRGB',
                            '-quality',  '60', 
                            file.slice(0, -5) + '-1920' + file.slice(-5)], 
                        function(err, stdout){
                            if (err) throw err;
                                console.log('err', err);
                                console.log('stdout:', stdout);
                        });      


                        // 1280
                        im.convert([
                            file, 
                            '-resize', '1280',
                            '-sampling-factor', '4:2:0', 
                            '-strip',
                            '-interlace', 'JPEG', 
                            '-colorspace', 'sRGB',
                            '-quality',  '60', 
                            file.slice(0, -5) + '-1280' + file.slice(-5)], 
                        function(err, stdout){
                            if (err) throw err;
                                console.log('err', err);
                                console.log('stdout:', stdout);
                        });

                        // 960
                        im.convert([
                            file, 
                            '-resize', '960',
                            '-sampling-factor', '4:2:0', 
                            '-strip',
                            '-interlace', 'JPEG', 
                            '-colorspace', 'sRGB',
                            '-quality',  '60', 
                            file.slice(0, -5) + '-960' + file.slice(-5)], 
                        function(err, stdout){
                            if (err) throw err;
                                console.log('err', err);
                                console.log('stdout:', stdout);
                        });

                        // 640
                        im.convert([
                            file, 
                            '-resize', '640',
                            '-sampling-factor', '4:2:0', 
                            '-strip',
                            '-interlace', 'JPEG', 
                            '-colorspace', 'sRGB',
                            '-quality',  '60', 
                            file.slice(0, -5) + '-640' + file.slice(-5)], 
                        function(err, stdout){
                            if (err) throw err;
                                console.log('err', err);
                                console.log('stdout:', stdout);
                        });                           

                        // 320
                        im.convert([
                            file, 
                            '-resize', '320',
                            '-sampling-factor', '4:2:0', 
                            '-strip',
                            '-interlace', 'JPEG', 
                            '-colorspace', 'sRGB',
                            '-quality',  '60', 
                            file.slice(0, -5) + '-320' + file.slice(-5)], 
                        function(err, stdout){
                            if (err) throw err;
                                console.log('err', err);
                                console.log('stdout:', stdout);
                        });                            
                    }  else if (file.slice(-3) === 'jpg' ||  file.slice(-3) === 'JPG') {
                        // 1920
                        im.convert([
                            file, 
                            '-resize', '1920',
                            '-sampling-factor', '4:2:0', 
                            '-strip',
                            '-interlace', 'JPEG', 
                            '-colorspace', 'sRGB',
                            '-quality',  '60', 
                            file.slice(0, -4) + '-1920' + file.slice(-4)], 
                        function(err, stdout){
                            if (err) throw err;
                                console.log('err', err);
                                console.log('stdout:', stdout);
                        });      

                        
                        // 1280
                        im.convert([
                            file, 
                            '-resize', '1280',
                            '-sampling-factor', '4:2:0', 
                            '-strip',
                            '-interlace', 'JPEG', 
                            '-colorspace', 'sRGB',
                            '-quality',  '60', 
                            file.slice(0, -4) + '-1280' + file.slice(-4)], 
                        function(err, stdout){
                            if (err) throw err;
                                console.log('err', err);
                                console.log('stdout:', stdout);
                        });

                        // 960
                        im.convert([
                            file, 
                            '-resize', '960',
                            '-sampling-factor', '4:2:0', 
                            '-strip',
                            '-interlace', 'JPEG', 
                            '-colorspace', 'sRGB',
                            '-quality',  '60', 
                            file.slice(0, -4) + '-960' + file.slice(-4)], 
                        function(err, stdout){
                            if (err) throw err;
                                console.log('err', err);
                                console.log('stdout:', stdout);
                        });

                        // 640
                        im.convert([
                            file, 
                            '-resize', '640',
                            '-sampling-factor', '4:2:0', 
                            '-strip',
                            '-interlace', 'JPEG', 
                            '-colorspace', 'sRGB',
                            '-quality',  '60', 
                            file.slice(0, -4) + '-640' + file.slice(-4)], 
                        function(err, stdout){
                            if (err) throw err;
                                console.log('err', err);
                                console.log('stdout:', stdout);
                        });                           

                        // 320
                        im.convert([
                            file, 
                            '-resize', '320',
                            '-sampling-factor', '4:2:0', 
                            '-strip',
                            '-interlace', 'JPEG', 
                            '-colorspace', 'sRGB',
                            '-quality',  '60', 
                            file.slice(0, -4) + '-320' + file.slice(-4)], 
                        function(err, stdout){
                            if (err) throw err;
                                console.log('err', err);
                                console.log('stdout:', stdout);
                        });                           
                    }                        

                    console.log(file);

                    next();
                }
            });
        })();
    });
};


// optional command line params
//      source for walk path
process.argv.forEach(function (val, index, array) {
    if (val.indexOf('source') !== -1) {
        walkPath = val.split('=')[1];
    }
});

console.log('-------------------------------------------------------------');
console.log('processing...');
console.log('-------------------------------------------------------------');

//Remove existing images
rimraf('./src/assets/images', function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Removed current images directory OK');

        //Create a new directory
        fs.mkdir('./src/assets/images', function(err) {
            console.log('callback');
            if (err) {
                console.log(err);
            } else {
                console.log('Create dir OK');
                    //Copy source to images
                    fs.copy('./src/assets/source-images', './src/assets/images', function (err) {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log("Copy source OK!");
                            walk(walkPath, function(error) {

                                if (error) {
                                    throw error;
                                } else {
                                    console.log('-------------------------------------------------------------');
                                    console.log('finished.');
                                    console.log('-------------------------------------------------------------');
                                }
                            });
                        }
                    });
            }
        });
    }
});