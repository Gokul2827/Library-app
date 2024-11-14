
// class Addbook{
//     constructor(title,author){
//         this.title=title
//         this.author=author
//         this.read=false
//     }
//     isread(){
//         return this.read
//     }
//     markasread(){
//         this.read=true
//     }
// }
// class Library{
//     constructor(){
//         this.books=[]
//     }
//     addbook(book){
//         this.books.push(book)
//     }
//     getbooks(){
//         return this.books
//     }
//     removebook(index){
//         if(index>=0 && index<this.books.length){
//             this.books.splice(index,1)
//         }


//     }
// }
// const formel= document.querySelector('form')

// const lib = new Library()

// formel.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     const booktitle= document.getElementById("bookname").value.trim()
//     const bookauthor=document.getElementById("authorname").value.trim()
   
//     if(booktitle && bookauthor ){
//         const addedbook = new Addbook(booktitle,bookauthor)
//         lib.addbook(addedbook) 
//         renderlibarary()
//         document.getElementById("bookname").value=''
//         document.getElementById("authorname").value=''
//     }
// })
// function markbookasread(index){
//     lib.getbooks()[index].markasread()
//     renderlibarary()
// }
// function removeBook(index){
//   lib.removebook(index)
//   renderlibarary()
// }

// function renderlibarary(){
 
//     let rend= document.getElementById("renderlibrary")
//     rend.innerHTML=''
//     lib.getbooks().forEach((book,index)=>{
//         rend.innerHTML += `<li class="p-3 bg-orange-100 rounded flex justify-around">
//                 <div class="${book.isread() ? 'line-through':''}">
//                     ${book.title} by ${book.author}
//                 </div>
//                 <div>
//                     <button class="px-2 py1 bg-green-600 text-sm rounded text-white" onclick="markbookasread(${index})">mark as read</button>
//                     <button class="px-2 py1 bg-red-600 text-sm rounded text-white" onclick="removeBook(${index})">remove</button>
//                 </div>

//             </li>`

//     })
    


// }





