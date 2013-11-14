define(['parse_re/re',
        'parse_re/match'],
function(re,
        match){
    return {
        'module': "Quantifier",
        'tests': [
            ["Simple +",
            function(){
                var p = re.evaluate("a+");
                
                assert.deepEqual(
                    match.exec(p, ''),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'aa'),
                    ['aa']);
                
                assert.deepEqual(
                    match.exec(p, 'aabaa'),
                    ['aa']);
            }],
            ["Simple *",
            function(){
                var p = re.evaluate("a*");
                
                assert.deepEqual(
                    match.exec(p, ''),
                    ['']);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    ['']);
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'aa'),
                    ['aa']);
                
                assert.deepEqual(
                    match.exec(p, 'aabaa'),
                    ['aa']);
            }],
            ["Simple ?",
            function(){
                var p = re.evaluate("a?");
                
                assert.deepEqual(
                    match.exec(p, ''),
                    ['']);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    ['']);
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'aa'),
                    ['a']);
            }],
            
            ["Lazy +",
            function(){
                var p = re.evaluate("a+?");
                
                assert.deepEqual(
                    match.exec(p, ''),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'aa'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'aabaa'),
                    ['a']);
            }],
            ["Lazy + consumes as many as required",
            function(){
                var p = re.evaluate("a+?b");
                
                assert.deepEqual(
                    match.exec(p, 'aabaa'),
                    ['aab']);
            }],
            ["Lazy *",
            function(){
                var p = re.evaluate("a*?");
                
                assert.deepEqual(
                    match.exec(p, ''),
                    ['']);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    ['']);
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['']);
                
                assert.deepEqual(
                    match.exec(p, 'aa'),
                    ['']);
                
                assert.deepEqual(
                    match.exec(p, 'aabaa'),
                    ['']);
            }],
            ["Lazy ?",
            function(){
                var p = re.evaluate("a??");
                
                assert.deepEqual(
                    match.exec(p, ''),
                    ['']);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    ['']);
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['']);
                
                assert.deepEqual(
                    match.exec(p, 'aa'),
                    ['']);
            }],
            ["Lazy ? consumes as many as required",
            function(){
                var p = re.evaluate("a??b");
                
                assert.deepEqual(
                    match.exec(p, 'ab'),
                    ['ab']);
            }],
        ],
    };
});
