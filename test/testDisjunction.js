define(['parse_re/re',
        'parse_re/match'],
function(re,
        match){
    return {
        'module': "Disjunction",
        'tests': [
            ["Simple",
            function(){
                var p = re.evaluate("a|b");
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    ['b']);
                
                assert.deepEqual(
                    match.exec(p, 'x'),
                    null);
            }],
            ["Takes first",
            function(){
                var p = re.evaluate("a|ab");
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'ab'),
                    ['a']);
            }],
            ["Backtracks on fail",
            function(){
                var p = re.evaluate("abx|abc");
                
                assert.deepEqual(
                    match.exec(p, 'abx'),
                    ['abx']);
                
                assert.deepEqual(
                    match.exec(p, 'abc'),
                    ['abc']);
            }]
        ],
    };
});
