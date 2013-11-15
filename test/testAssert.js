define(['parse_re/re',
        'parse_re/match'],
function(re,
        match){
    return {
        'module': "Assert",
        'tests': [
            ["Simple",
            function(){
                var p = re.compile("a(?=b)");
                
                assert.deepEqual(
                    match.match(p, 'ab'),
                    ['a']);
                
                assert.deepEqual(
                    match.match(p, 'ax'),
                    null);
            }],
            ["Consumes Nothing",
            function(){
                var p = re.compile("a(?=b)b+");
                
                assert.deepEqual(
                    match.match(p, 'abb'),
                    ['abb']);
            }],
            ["With Group",
            function(){
                var p = re.compile("b(?=(a+))");
                
                assert.deepEqual(
                    match.match(p, 'baaac'),
                    ['b', 'aaa']);
            }],
            
            ["No backtrack",
            function(){
                var p = re.compile("(?=(a+))a*b\\1");
                
                assert.deepEqual(
                    match.exec(p, 'baaabac'),
                    ['aba', 'a']);
            }]
        ],
    };
});
