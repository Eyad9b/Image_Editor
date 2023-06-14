
setTimeout(function(){
   $('.loader').fadeToggle();
},1500)

//Fillter
const saturate = document.getElementById('saturate');
const contast = document.getElementById('contast');
const brightness = document.getElementById('brightness');
const sepia = document.getElementById('sepia');
const grayScale = document.getElementById('grayScale');
const blur = document.getElementById('blur');
const hue =document.getElementById('hue-rotate');
const image_box = document.getElementById('img-box');
const image = document.getElementById('img');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
//buttons

const DownloadButton = document.getElementById('download');
const ResetButton = document.getElementById('Rest');
console.log(ResetButton);
const upload = document.getElementById('upload');
//Hide the button onload page

window.onload=function(){
    DownloadButton.style.display='none';
    ResetButton.style.display='none';
    image_box.style.display='none';
}
upload.onchange = function(){
   Rest();
    DownloadButton.style.display='block';
    ResetButton.style.display='block';
    image_box.style.display='block';

    const reader = new FileReader();
    //store the image in the array
     reader.readAsDataURL(upload.files[0])
     //when image is ready
     reader.onload= function(){
        image.src=reader.result;
     }

     image.onload=function(){
      canvas.width=image.width;
      canvas.height=image.height;
      ctx.drawImage(image,0,0,canvas.width,canvas.height);
      image.style.display='none'
     }
}
function Rest(){
   image.style.filter='none';
   saturate.value='100';
   contast.value='100';
   brightness.value='100';
   sepia.value='0';
   grayScale.value='0';
   blur.value='0';
   hue.value='0;'
}

let filters =document.querySelectorAll('ul li input')

filters.forEach(filter=>{
   filter.addEventListener('input',function(){
    ctx.filter= `saturate(${saturate.value}%)
    contrast(${contast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayScale(${grayScale.value})
    blur(${blur.value}px)
    hue-rotate(${hue.value}deg)
    `
    ctx.drawImage(image,0,0,canvas.width,canvas.height);
   })
   
})


DownloadButton.onclick=()=>{
   DownloadButton.href=canvas.toDataURL();
}