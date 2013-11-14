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
                    match.exec(p, 'ab'),
                    ['a']);
                
                assert.deepEqual(
                    match.exec(p, 'ax'),
                    null);
            }],
            ["Consumes Nothing",
            function(){
                var p = re.evaluate("a(?=b)b+");
                
                assert.deepEqual(
                    match.exec(p, 'abb'),
                    ['abb']);
            }]
        ],
    };
});