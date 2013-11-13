define(['parse_re/re',
        'parse_re/match'],
function(re,
        match){
    return {
        'module': "Character Class",
        'tests': [
            ["Simple Single Class",
            function(){
                var p = re.evaluate("[a]");
                
                var r = match.exec(p, 'a');
                assert.deepEqual(r, ['a']);
                
                var r2 = match.exec(p, 'aX');
                assert.deepEqual(r2, ['a']);
            }],
            ["Simple Multi Char class Class",
            function(){
                var p = re.evaluate("[abc]");
                
                var r = match.exec(p, 'a');
                assert.deepEqual(r, ['a']);
                
                var r2 = match.exec(p, 'b');
                assert.deepEqual(r2, ['b']);
                
                var r3 = match.exec(p, 'c');
                assert.deepEqual(r3, ['c']);
                
                var rf = match.exec(p, 'd');
                assert.deepEqual(rf, null);
            }],
            
             ["Simple negated class Class",
            function(){
                var p = re.evaluate("[^abc]");
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'c'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'd'),
                    ['d']);
            }],
            
            ["Simple range Char class Class",
            function(){
                var p = re.evaluate("[a-c]");
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    ['b']);
                
                assert.deepEqual(
                    match.exec(p, 'c'),
                    ['c']);
                
                assert.deepEqual(
                    match.exec(p, 'd'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'A'),
                    null);
            }],

        ],
    };
});
