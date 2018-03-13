var i = 0;
var images = [];
var time = 3000;

		  // Image list
images[0] = 'nh9.jpg';
images[1] = 'nh10.jpg';
images[2] = 'nh7.jpg';
images[3] = 'nh6.jpg';
images[4] = 'nh5.jpg';
images[5]	= 'nh1.jpg';

		  // Change image
function changeImage(){

	document.slide.src = images[i];

	if(i <images.length - 1){
		    i++;
	} else {
		    i = 0;
	}
    setTimeout("changeImage()", time);
}

window.onload = changeImage;




function changeImages(hinhnho){
			var anhto=document.getElementById('to');
			anhto.src=hinhnho.src;
}
function changeImg(hinhsmall){
			var anhbig=document.getElementById('big');
			anhbig.src=hinhsmall.src;
}