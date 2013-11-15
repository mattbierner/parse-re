define(['parse_re/re',
        'parse_re/match'],
function(re,
        match){
    return {
        'module': "Control Escapes",
        'tests': [
            ["Atom",
            function(){
                var p = re.evaluate("a\\na");
                
                assert.deepEqual(
                    match.match(p, 'a\na'),
                    ['a\na']);
            }],
            ["Character Class",
            function(){
                var p = re.evaluate("[a\\n]");
                
                assert.deepEqual(
                    match.match(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, '\n'),
                    ['\n']);
            }],
            ["Character Class Range",
            function(){
                var p = re.evaluate("[\\n-\\r]");
                
                assert.deepEqual(
                    match.match(p, '\n'),
                    ['\n']);
                
                assert.deepEqual(
                    match.exec(p, '\r'),
                    ['\r']);
                
                assert.deepEqual(
                    match.exec(p, '\v'),
                    ['\v']);
            }],
        ],
    };
});
