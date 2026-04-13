function recursiva(max) {
    if(max >= 1) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);

for(let i = 0; i >= 1000; i++){
    console.log(i);
}