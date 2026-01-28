function once(fn) {
    let used = false
    if (!used) {
        used = true
       fn()
    }
}

once(() => console.log("Hello"))
once(() => console.log("Hello"));