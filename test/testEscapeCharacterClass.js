define(['parse_re/re',
        'parse_re/match'],
function(re,
        match){
    return {
        'module': "Escape Character Class",
        'tests': [
            ["Digit",
            function(){
                var p = re.compile("\\d+");
                
                assert.deepEqual(
                    match.match(p, '0'),
                    ['0']);
                
                assert.deepEqual(
                    match.match(p, '01234556789'),
                    ['01234556789']);
                
                assert.deepEqual(
                    match.match(p, 'a'),
                    null);
            }],
            ["Non Digit",
            function(){
                var p = re.compile("\\D+");
                
                assert.deepEqual(
                    match.match(p, '0'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, '01234556789'),
                    null);
                
                assert.deepEqual(
                    match.match(p, 'a'),
                    ['a']);
            }],
            
            ["Space",
            function(){
                var p = re.compile("\\s+");
                
                assert.deepEqual(
                    match.match(p, ' '),
                    [' ']);
                
                assert.deepEqual(
                    match.match(p, ' \t'),
                    [' \t']);
                
                assert.deepEqual(
                    match.match(p, 'a'),
                    null);
            }],
            ["Space Matches line Terminator",
            function(){
                var p = re.compile("\\s+");
                
                assert.deepEqual(
                    match.match(p, ' \n a'),
                    [' \n ']);
                
                assert.deepEqual(
                    match.match(p, ' \t'),
                    [' \t']);
                
                assert.deepEqual(
                    match.match(p, 'a'),
                    null);
            }],
            ["Non Space",
            function(){
                var p = re.compile("\\S+");
                
                assert.deepEqual(
                    match.match(p, ' '),
                    null);
                
                assert.deepEqual(
                    match.match(p, '\r'),
                    null);
                
                assert.deepEqual(
                    match.exec(p, 'abc123'),
                    ['abc123']);

            }],
        ],
    };
});
