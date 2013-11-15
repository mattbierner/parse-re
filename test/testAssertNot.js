define(['parse_re/re',
        'parse_re/match'],
function(re,
        match){
    return {
        'module': "Assert Not",
        'tests': [
            ["Simple",
            function(){
                var p = re.evaluate("a(?!b).");
                
                assert.deepEqual(
                    match.exec(p, 'ab'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'ac'),
                    ['ac']);
            }],
           
            ["Group is undef",
            function(){
                var p = re.evaluate("a(?!(b)).");
                
                assert.deepEqual(
                    match.exec(p, 'ab'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'ac'),
                    ['ac', undefined]);
            }],
        ],
    };
});
