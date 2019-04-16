module.exports = function(){
    return{
        handRank: [
            [//Royal flush
                {num: '1', suit: 'same'},
                {num: '13', suit: 'same'},
                {num: '12', suit: 'same'},
                {num: '11', suit: 'same'},
                {num: '10', suit: 'same'}
            ],
            [//straight flush
                {num: 'n<10', suit: 'same'},
                {num: 'n-1', suit: 'same'},
                {num: 'n-2', suit: 'same'},
                {num: 'n-3', suit: 'same'},
                {num: 'n-4', suit: 'same'}
            ],
            [//Four kind
                {num: 'n', suit: 'any'},
                {num: 'n', suit: 'any'},
                {num: 'n', suit: 'any'},
                {num: 'n', suit: 'any'},
                {num: 'any', suit: 'any'}
            ],
            [//full house
                {num: 'n', suit: 'any'},
                {num: 'n', suit: 'any'},
                {num: 'n', suit: 'any'},
                {num: 'k', suit: 'any'},
                {num: 'k', suit: 'any'}
            ],
            [//flush
                {num: 'any', suit: 'same'},
                {num: 'any', suit: 'same'},
                {num: 'any', suit: 'same'},
                {num: 'any', suit: 'same'},
                {num: 'any', suit: 'same'}
            ],
            [//three kind
                {num: 'n', suit: 'any'},
                {num: 'n', suit: 'any'},
                {num: 'n', suit: 'any'},
                {num: 'any', suit: 'any'},
                {num: 'any', suit: 'any'}
            ],
            [//Two pair
                {num: 'n', suit: 'any'},
                {num: 'n', suit: 'any'},
                {num: 'k', suit: 'any'},
                {num: 'k', suit: 'any'},
                {num: 'any', suit: 'any'}
            ],
            [//high card
                {num: 'n', suit: 'any'},
                {num: 'k<n', suit: 'any'},
                {num: 'k<n', suit: 'any'},
                {num: 'k<n', suit: 'any'},
                {num: 'k<n', suit: 'any'}
            ]
        ]
    }
}