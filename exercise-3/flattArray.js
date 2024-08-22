function flatArray(array){
    return array.flat(nestingDepth(array))
}
function nestingDepth(array){
    if(!array.length) return 0
    let arrStr = JSON.stringify(array)
    const arrStrLen  = arrStr.length, depths =[]
    // Don not count in the outside [] of an array
    arrStr = arrStr.slice(1,arrStrLen-1)
    let i=0
    while(i<arrStrLen-2){
        const leftSubString = arrStr.slice(i)
        const closeTagIndex = leftSubString.indexOf(']')+1
        const rightOfCloseTag = leftSubString.slice(0,closeTagIndex).split('')
        const depth = rightOfCloseTag.filter(el=>el=='[').length
        depths.push(depth)
        i +=closeTagIndex?closeTagIndex:1
    }
    return Math.max(...depths)
}