const testInterval=(fn, args, t)=>{
    let res = fn(...args)
    let time = 0
    return setInterval(()=>{
    console.log(res,time)
    time +=t
    },t)
}

const timer = testInterval((x)=>x+2,[3],250)

setTimeout(()=>{
    clearInterval(timer)
},4000)
