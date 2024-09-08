let  asyncdata =async()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/posts');
    let data= await response.json();
    console.log(data);
    let view =document.getElementById("text-for-body");
    
    setInterval(() => {
  
      
        let random = Math.floor( Math.random() * data.length);
     
        let randomData = data[random];
       // console.log(randomData.id);
        view .innerHTML=randomData.body;
     }, 1000);

    }
 
    asyncdata();
    
   