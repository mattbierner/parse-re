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
        ],
    };
});
