define(['parse_re/re',
        'parse_re/match'],
function(re,
        match){
    return {
        'module': "Word Boundary",
        'tests': [
            ["Simple",
            function(){
                var p = re.compile("a \\ba");
                
                assert.deepEqual(
                    match.exec(p, ''),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'a a'),
                    ["a a"]);
            }],
            ["Starting",
            function(){
                var p = re.compile("\\ba");
                
                assert.deepEqual(
                    match.exec(p, ''),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    null);
            }],
            ["Ending",
            function(){
                var p = re.compile("a\\b");
                
                assert.deepEqual(
                    match.exec(p, ''),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'a'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'b'),
                    null);
            }],
            ["Line Terminator",
            function(){
                var p = re.compile("a[^]\\ba");
                
                assert.deepEqual(
                    match.exec(p, 'a\na'),
                    ['a\na']);
            }],
            ["Does not check forward",
            function(){
                var p = re.compile("a\\b a");
                
                assert.deepEqual(
                    match.exec(p, 'a a'),
                    null);
            }],
        ],
    };
});
