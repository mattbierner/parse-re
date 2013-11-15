define(['parse_re/re',
        'parse_re/match'],
function(re,
        match){
    return {
        'module': "Control Letter Escapes",
        'tests': [
            ["Atom",
            function(){
                var p = re.compile("a\\caa");
                
                assert.deepEqual(
                    match.match(p, 'a\u0001a'),
                    ['a\u0001a']);
            }],
            ["Character Class",
            function(){
                var p = re.compile("[a\\cab]");
                
                assert.deepEqual(
                    match.match(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    ['b']);
                
                assert.deepEqual(
                    match.exec(p, 'c'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, '\u0001'),
                    ['\u0001']);
            }],
            ["Character Class Range",
            function(){
                var p = re.compile("[\\ca-\\cc]");
                
                assert.deepEqual(
                    match.match(p, '\u0001'),
                    ['\u0001']);
                
                assert.deepEqual(
                    match.exec(p, '\u0002'),
                    ['\u0002']);
                
                assert.deepEqual(
                    match.exec(p, '\u0003'),
                    ['\u0003']);

                assert.deepEqual(
                    match.exec(p, '\u0004'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, '\u0000'),
                    null);
            }],
        ],
    };
});
