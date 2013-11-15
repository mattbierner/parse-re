define(['parse_re/re',
        'parse_re/match'],
function(re,
        match){
    return {
        'module': "EOF",
        'tests': [
            ["Simple",
            function(){
                var p = re.evaluate("$");
                
                assert.deepEqual(
                    match.match(p, ''),
                    ['']);
                
                assert.deepEqual(
                    match.match(p, 'abc'),
                    null);
            }],
            ["Fail",
            function(){
                var p = re.evaluate("a$");
                
                assert.deepEqual(
                    match.match(p, ''),
                    null);
                
                assert.deepEqual(
                    match.match(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.match(p, 'ab'),
                    null);
            }],
            ["MultiLine",
            function(){
                var p = re.evaluate("a$[^]a", re.RE_M);
                
                assert.deepEqual(
                    match.match(p, 'a\na'),
                    ['a\na']);
            }]
        ],
    };
});
