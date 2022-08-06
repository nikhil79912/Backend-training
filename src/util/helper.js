let num=new Date()

function printDate(){
    let date=(num.getDate())
    console.log("date:"+date)
}
function printMonth(){
    let month=(num.getMonth())
    console.log("month:"+month)
}
function getBatchInfo(){
    console.log('plutonium, W3d5,today we learn about git nodejs')
}

module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo