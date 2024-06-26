const paths = document.querySelectorAll("path");
for (let i=0; i<paths.length; i++){
    console.log(`path ${i} length is ${Math.ceil(paths[i].getTotalLength())}`)
}
