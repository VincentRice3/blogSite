function dividerVisibility(){

    var showHideButtonValue = document.getElementById("showHide").innerText;

    if(showHideButtonValue == "Show More")
    {
        document.getElementById('leftDivide').style.display='flex'; 
        document.getElementById('rightDivide').style.width='70%';
        document.getElementById('showHide').innerText = "Hide";
    }else{
        document.getElementById('leftDivide').style.display='none'; 
        document.getElementById('rightDivide').style.width='100%';
        document.getElementById('showHide').innerText = "Show More";
    }
}


function blogVis(){
    var blogVis = document.getElementById("showBlog").innerText;

    if (blogVis == "Hide")
    {
        document.getElementById("blogContainer").style.display='none';
        console.log("Blog hidden");
        document.getElementById("showBlog").innerText ="Show";

    }else{
        document.getElementById("blogContainer").style.display='block';
        console.log(document.getElementById("blogContainer").innerHTML.length);
        document.getElementById("showBlog").innerText ="Hide";

    }
}