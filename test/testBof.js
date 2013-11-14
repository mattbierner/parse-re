define(['parse_re/re',
        'parse_re/match'],
function(re,
        match){
    return {
        'module': "BOF",
        'tests': [
            ["Simple",
            function(){
                var p = re.evaluate("^");
                
                assert.deepEqual(
                    match.exec(p, ''),
                    ['']);
                
                assert.deepEqual(
                    match.exec(p, 'abc'),
                    ['']);
            }],
            ["Fail",
            function(){
                var p = re.evaluate("a^");
                
                assert.deepEqual(
                    match.exec(p, ''),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    null);
            }],
            ["MultiLine",
            function(){
                var p = re.evaluate("a[^]^a", re.RE_M);
                
                
                assert.deepEqual(
                    match.exec(p, 'a\na'),
                    ['a\na']);
            }]
        ],
    };
});
