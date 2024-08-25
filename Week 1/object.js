const alluser = [{
    fname: "kshitj",
    gender: "male"
}
,{
    fname: "aarush",
    gender: "male"
}
,{
    fname: "tiwari",
    gender: "male"
}
,{
    fname: "kurma",
    gender: "female"
}]

for(let i=0; i<alluser.length; i++){
    if(alluser[i]["gender"] == "male"){
        console.log(alluser[i]["fname"])
    }
}
