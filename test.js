//console.log( exports = typeof window === 'undefined' )


// cd test
// aok . -p 10000

const req = require('./dist/mini.req')

req('http://localhost:10000/abc', 'get',{ hello : 'good good day'}).then(
    d=>{
        console.log(d)
    }
)

req.get('http://localhost:10000/abc?a=1', { hello : 'get'}).then(
    d=>{
        console.log(d.data)
    }
)

req.post('http://localhost:10000/ssabc', { hello : 'post'}).then(
    d=>{
        console.log(d.data)
    }
)

req.put('http://localhost:10000/abc', { hello : 'put'}).then(
    d=>{
        console.log(d.data)
    }
)

req.delete('http://localhost:10000/abc?a=2', { hello : 'del'}).then(
    d=>{
        console.log(d.data)
    }
)