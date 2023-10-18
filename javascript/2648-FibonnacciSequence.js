
var fibGenerator = function*() {
    yield prev = 0;
    yield current =1;
    while(true){
        let temp=current
        current=prev+current
        prev = temp
        yield current;
    }
};
