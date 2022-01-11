const debounce = (func, ms = 300) => {
    let timer;

    return (...args) => {
        console.log(func)
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, ms)
    }
}

export {debounce}