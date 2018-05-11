var im = require('imagemagick');

var fs = require('fs');

var walkPath = './dist/browser/assets/images';

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

                    //Compress JPG and JPEG
                    if (file.slice(-3) === 'jpg' ||  file.slice(-3) === 'JPG' == file.slice(-4) === 'jpeg' || file.slice(-4) === 'JPEG') {



                        im.convert([file, '-strip', '-colorspace', 'sRGB', file], 
                        function(err, stdout){
                            if (err) throw err;
                                console.log('err', err);
                                console.log('stdout:', stdout);
                        });
                    }

                    // do stuff to file here
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

walk(walkPath, function(error) {
    if (error) {
        throw error;
    } else {
        console.log('-------------------------------------------------------------');
        console.log('finished.');
        console.log('-------------------------------------------------------------');
    }
});