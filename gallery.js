setTimeout(()=>{
    if(db){

//video retiveral 
let videodbTransaction = db.transaction("video", "readonly");
let videoStore = videodbTransaction.objectStore("video");
let videoRequest = videoStore.getAll(); //Event driven
videoRequest.onsuccess= (e) =>{
    let videoResult = videoRequest.result;
    let galleryCont = document.querySelector(".gallery-cont");
    videoResult.forEach((videoObj)=>{
        let mediaElem = document.createElement("div");
        mediaElem.setAttribute("class" , "media-cont");
        mediaElem.setAttribute("id" , videoObj.id);



        let url = URL.createObjectURL(videoObj.blobData);

        mediaElem.innerHTML=`
         <div class="media">
            <video autoplay loop src="${url}"></video>
        </div>
        <div class="delete action-btn">DELETE</div>
        <div class="download action-btn">DOWNLOAD</div>
    </div>`

    
        galleryCont.appendChild(mediaElem);
//listeners
let deleteBtn = mediaElem.querySelector(".delete");
deleteBtn.addEventListener("click",deleteListener);
let downloadBtn= mediaElem.querySelector(".download");
downloadBtn.addEventListener("click",downloadListener);
    })
}


//image retrival


let ImageDbTransaction = db.transaction("image", "readonly");
let imageStore = ImageDbTransaction.objectStore("image");
let imageRequest = imageStore.getAll(); //Event driven
imageRequest.onsuccess= (e) =>{
    let imageResult = imageRequest.result;
    let galleryCont = document.querySelector(".gallery-cont");
    imageResult.forEach((imageObj)=>{
        let mediaElem = document.createElement("div");
        mediaElem.setAttribute("class" , "media-cont");
        mediaElem.setAttribute("id" , imageObj.id);



        let url = imageObj.url;

        mediaElem.innerHTML=`
         <div class="media">
            <img src="${url}"></img>
        </div>
        <div class="delete action-btn">DELETE</div>
        <div class="download action-btn">DOWNLOAD</div>
    </div>`


    
        galleryCont.appendChild(mediaElem);


        //listeners
let deleteBtn = mediaElem.querySelector(".delete");
deleteBtn.addEventListener("click",deleteListener);
let downloadBtn= mediaElem.querySelector(".download");
downloadBtn.addEventListener("click",downloadListener);

    })
}



    }
},100)





//UI remove , DB remove

function  deleteListener(e){
    // DB removal
    let id = e.target.parentElement.getAttribute("id");
  let type =id.slice(0,3);
  if(type==="vid"){
  let videoDBTransaction = db.transaction("video", "readwrite");
 let videoStore = videoDBTransaction.objectStore("video");
 videoStore.delete(id);  
    } else if(type === "img" ){
           let imageDBTransaction = db.transaction("image", "readwrite");
        let imageStore = imageDBTransaction.objectStore("image");
        imageStore.delete(id);
    }

//UI REMOVAL

    e.target.parentElement.remove();
}



function downloadListener(e){

  let id = e.target.parentElement.getAttribute("id");
    let type = id.slice(0, 3);
    if (type === "vid") {

  let videoDBTransaction = db.transaction("video", "readwrite");
  let videoStore = videoDBTransaction.objectStore("video");
  let videoRequest = videoStore.get(id);
  videoRequest.onsuccess=(e)=>{
    let videoResult = videoRequest.result;

    let videoURL = URL.createObjectURL(videoResult.blobData);
      let a = document.createElement("a");
            a.href = videoURL;
            a.download = "stream.mp4";
            a.click();
  }


    }else if(type=== "img"){

 let imageDBTransaction = db.transaction("image", "readwrite");
        let imageStore = imageDBTransaction.objectStore("image");
        let imageRequest = imageStore.get(id);
        imageRequest.onsuccess = (e) => {
            let imageResult = imageRequest.result;

            let a = document.createElement("a");
            a.href = imageResult.url;
            a.download = "image.jpg";
            a.click();

    }

}
}