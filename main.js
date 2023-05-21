Webcam.set({

    width : 350, height : 300 , image_format:"png",png_quality:90
    });
    Webcam.attach("#camera");
    
    function take_snapshot(){
    
    Webcam.snap(function(data_uri){
    
    document.getElementById("result").innerHTML ='<img id="image1" src="'+data_uri+'">';
    
    });
    
    
    }
    console.log("ml5version:",ml5.version);
    var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/b4rijy-nQ/model.json" , modelloaded);
    function modelloaded(){
    
    console.log("model is loaded");
    
    }
    function spek(){
    
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is"+prediction1;
    speak_data_2 = "The second prediction is"+prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
    }
