let quotesArray = [];
  

    let a=[-1,-2,-3,-4,-5];

    for (let i = 0; i < 5; i++) {
       
        do {
            a[i] = Math.floor(Math.random() * 29);
        } while (a.indexOf(a[i]) !== i || a.lastIndexOf(a[i]) !== i);
    }
    
    index1=a[0]
    index2=a[1]
    index3=a[2]
    index4=a[3]
    index5=a[4]
    
    
    fetch('https://dummyjson.com/quotes')
        .then(res => res.json())
        .then(data => {
            quotesArray = data.quotes; 
           
    if(quotesArray.length>0){
     
        document.getElementById("p1").innerHTML=quotesArray[index1].quote;
        document.getElementById("p2").innerHTML=quotesArray[index2].quote;
        document.getElementById("p3").innerHTML=quotesArray[index3].quote;
        document.getElementById("p4").innerHTML=quotesArray[index4].quote;
        document.getElementById("p5").innerHTML=quotesArray[index5].quote;
    
    
        document.getElementById("h1").innerHTML=quotesArray[index1].author;
        document.getElementById("h2").innerHTML=quotesArray[index2].author;
        document.getElementById("h3").innerHTML=quotesArray[index3].author;
        document.getElementById("h4").innerHTML=quotesArray[index4].author;
        document.getElementById("h5").innerHTML=quotesArray[index5].author;
    
    
    }
            
        }
        )
        .catch(error => console.error('Error fetching data:', error));
 
    btn=document.getElementById("btn");
    btn.addEventListener("click", quote_generator);


    function quote_generator() {
        let quotesArray = [];
  
    let a=[-1,-2,-3,-4,-5];

    for (let i = 0; i < 5; i++) {
        do {
            a[i] = Math.floor(Math.random() * 29);
        } while (a.indexOf(a[i]) !== i || a.lastIndexOf(a[i]) !== i);
    }
    
    index1=a[0]
    index2=a[1]
    index3=a[2]
    index4=a[3]
    index5=a[4]
    
    
    fetch('https://dummyjson.com/quotes')
        .then(res => res.json())
        .then(data => {
            quotesArray = data.quotes;
           
    if(quotesArray.length>0){
     
        document.getElementById("p1").innerHTML=quotesArray[index1].quote;
        document.getElementById("p2").innerHTML=quotesArray[index2].quote;
        document.getElementById("p3").innerHTML=quotesArray[index3].quote;
        document.getElementById("p4").innerHTML=quotesArray[index4].quote;
        document.getElementById("p5").innerHTML=quotesArray[index5].quote;
    
       
    
        document.getElementById("h1").innerHTML=quotesArray[index1].author;
        document.getElementById("h2").innerHTML=quotesArray[index2].author;
        document.getElementById("h3").innerHTML=quotesArray[index3].author;
        document.getElementById("h4").innerHTML=quotesArray[index4].author;
        document.getElementById("h5").innerHTML=quotesArray[index5].author;
    
    
    }
            
        }
        )
        .catch(error => console.error('Error fetching data:', error));
     }  


    btn1=document.getElementById("btn1");


    btn1.addEventListener("click", opacity0);

//     function opacity(){
//     //    [0].style.opacity=1;
//     const m= document.querySelectorAll("h3");
//    const n= document.querySelectorAll("p");
//    for(i=0;i<5;i++){
//     n[i].style.opacity=1;
//     m[i].style.opacity=1;
//    }
//     }
var p=0;


    function opacity0(){
    //    [0].style.opacity=1;
    if(p%2==0){
    let m= document.querySelectorAll("h3");
   let n= document.querySelectorAll("p");

   for(i=0;i<5;i++){

       
       m[i].style.opacity=0;
       n[i].style.opacity=0;
    //    n[i].style.transition:"1s";
   }
   p++;
   btn1.innerHTML="Show Quotes";
}

else{
    let m= document.querySelectorAll("h3");
    let n= document.querySelectorAll("p");
 
    for(i=0;i<5;i++){
 
        
        m[i].style.opacity=1;
        n[i].style.opacity=1;
}
p++;
btn1.innerHTML="Hide Quotes";

    }
    }
   
   

    
    // console.log(quotesArray.length+8)
    
  
        //  console.log("Specific Quote:", quotesArray[index]);


        