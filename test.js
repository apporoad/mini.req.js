//console.log( exports = typeof window === 'undefined' )


// cd test
// aok . -p 19999

const req = require('./index')

// req('http://localhost:19999/abc', 'get',{ hello : 'good good day'}).then(
//     d=>{
//         console.log(d)
//     }
// )

// req.get('http://localhost:19999/abc?a=1', { hello : 'get'}).then(
//     d=>{
//         console.log(d.data)
//     }
// )

// req.post('http://localhost:19999/ssabc', { hello : 'post'}).then(
//     d=>{
//         console.log(d)
//     }
// )

// req.put('http://localhost:19999/abc', { hello : 'put'}).then(
//     d=>{
//         console.log(d)
//     }
// )

// req.delete('http://localhost:19999/abc?a=2', { hello : 'del'}).then(
//     d=>{
//         console.log(d)
//     }
// )

req('http://localhost:19999/abc', 'post',{ hello : 'good good day'} , {
    headers: {
        sessionId : 'xxxxxxxxaaaaaaa',
        reqId : 'ccccccccccccc'
    }
}).then(
    d=>{
        console.log(d)
    }
)

