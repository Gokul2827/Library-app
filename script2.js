let formEl=document.querySelector("form")

 let rend= document.getElementById("renderlibrary")
 rend.innerHTML=''
 let arr=[]
formEl.addEventListener("submit",(e)=>{
    e.preventDefault()
    let bookname=document.getElementById("bookname").value.trim()
   let authorname=document.getElementById("authorname").value.trim()
   let abc = {"bookname":bookname,"authorname":authorname,
    read:false,
    isread(){
       return this.read=true
    }
   }
   arr.push(abc)
   renderlibrary(abc)
   console.log(arr[0].bookname) 
})

  
    function renderlibrary(abc){
        arr.forEach((value,index)=>{
                rend.innerHTML += `<li class="p-3 bg-orange-100 rounded flex justify-around">
                
                        <div class="${abc.read ? 'line-through':''}">
                            ${abc.bookname} by ${abc.authorname}
                        </div>
                         <div>
                     <button class="px-2 py1 bg-green-600 text-sm rounded text-white" onclick=${abc.isread()}>mark as read</button>
                     <button class="px-2 py1 bg-red-600 text-sm rounded text-white" >remove</button>
                 </div>
                    </li>`
    })
}


   function markasread(){

   }


