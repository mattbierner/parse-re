define(['parse_re/re',
        'parse_re/match'],
function(re,
        match){
    return {
        'module': "Atom",
        'tests': [
            ["Simple Atom",
            function(){
                var p = re.evaluate("a");
                
                var r = match.exec(p, 'a');
                assert.deepEqual(r, ['a']);
                
                var r2 = match.exec(p, 'aX');
                assert.deepEqual(r2, ['a']);
            }],
            ["Simple Multiple Atoms",
            function(){
                var p = re.evaluate("ab");
                var result = match.exec(p, 'ab');
                assert.deepEqual(result, ['ab']);
            }],
        ],
    };
});
