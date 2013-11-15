define(['parse_re/re',
        'parse_re/match'],
function(re,
        match){
    return {
        'module': "Assert",
        'tests': [
            ["Simple",
            function(){
                var p = re.evaluate("a(?=b)");
                
                assert.deepEqual(
                    match.match(p, 'ab'),
                    ['a']);
                
                assert.deepEqual(
                    match.match(p, 'ax'),
                    null);
            }],
            ["Consumes Nothing",
            function(){
                var p = re.evaluate("a(?=b)b+");
                
                assert.deepEqual(
                    match.match(p, 'abb'),
                    ['abb']);
            }],
            ["With Group",
            function(){
                var p = re.evaluate("b(?=(a+))");
                
                assert.deepEqual(
                    match.match(p, 'baaac'),
                    ['b', 'aaa']);
            }]
        ],
    };
});
