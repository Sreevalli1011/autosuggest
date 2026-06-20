
var users = [
    {
        "name" : "John doe",
        "gender" : "male",
        "image" : "/images/john.png"

    },
    {
        "name" : "Jane",
        "gender" : "female",
        "image" : "/images/jane.png"
    }
]

var curId = 0;

function toggle(){
    //toggle curId from 0 -> 1 & 1 -> 0
    curId = (curId + 1) % 2;

    var user = users[curId];
    document.getElementById("user-img").src=user.image;
    document.getElementById("user-name").innerText = user.name;
    document.getElementById("user-gender").innerText = user.gender;

}