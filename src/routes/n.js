
    let persons=[
        {
        name:"pk",
        age:18,
        votingstatus:false

    },
    {
        name:"nikhil",
        age:24,
        votingstatus:false
    },
    {
        name:"sis",
        age:10,
        votingstatus:false
    },
    {
        name:"thor",
        age:24,
        votingstatus:false

    },
    {
        name:"hawkeye",
        age:15,
        votingstatus:false
    }

]
// router.post('/vote-query',function(req,res){
    let votingAge=18
    for(let i=0;i<persons.length;i++){
        let p=persons[i]
        if(votingAge<=p.age){
            p.votingstatus=true
           console.log(p)
         
        } else{
        //  console.log("not")
        }}
    // } console.log(persons)