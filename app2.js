
let parser=new DOMParser()



var expected_delivery=document.querySelector(".aa")
var received_date=document.querySelector(".bb")
var quality_demanded=document.querySelector(".cc")
var quality_received=document.querySelector(".dd")
var quality_returned=document.querySelector(".ee")

function submitDetails(event){
    
    event.preventDefault()
    let new_data={expectedDeliveryDate:expected_delivery.value,
                receivedDate:received_date.value,    
                quantityDemanded:quality_demanded.value,
                quantityReceived:quality_received.value,
                quantityReturned:quality_returned.value
                }
    if (localStorage.getItem('data')==null){
        localStorage.setItem('data','[]')
    }
    var data=JSON.parse(localStorage.getItem('data'))
    data.push(new_data)
    localStorage.setItem('data',JSON.stringify(data))
    printRecords()
    clearData();
    return false; }
    
function printRecords(){
    let count=0
    
    let data=JSON.parse(localStorage.getItem('data'))
    let hi=document.querySelector('#hi')
    hi.innerHTML="";
    for (let item of data){
        count++
        let itemHTML=`             
             <section id=set${count}>
                 <p>Expected Delivery Date: ${item.expectedDeliveryDate}</p>
                 <p>Received Date: ${item.receivedDate}</p>
                 <p>Quantity Demanded: ${item.quantityDemanded}</p>
                 <p>Quantity Received: ${item.quantityReceived}</p>
                 <p>Quantity Returned: ${item.quantityReturned}</p>
                 <button class="deco" id="${count}" >Delete</button>
             </section>   
         `
         hi.appendChild(parser.parseFromString(itemHTML,'text/html').documentElement)
         
         for (let item of document.querySelectorAll('section')){
             item.style.backgroundColor="white"
             item.style.paddingBottom="5%"
            //  item.style.marginBottom="-10%"
         }
         

         for (let item of document.querySelectorAll('.deco')){
            item.style.marginLeft="5%"
            item.style.marginTop="2%"
            item.style.padding="0.75% 3%"
            item.style.backgroundColor="orangered"
            item.style.color="white"
            item.style.borderRadius="100px"
            item.style.border="3px solid orangered"
            item.addEventListener("mouseover",function(){
                item.style.background="none"
                item.style.color="orangered"
                item.style.cursor="pointer"
                item.style.transition="0.5s"
            })
            item.addEventListener("mouseout",function(){
                item.style.background="orangered"
                item.style.color="white"
                item.style.transition="0.5s"
                
            })
            
        }
        // for (let item of document.querySelectorAll('.deco')){
            
        // }
        
       
        
    }
    let delbtn=document.querySelectorAll(".deco")
    delbtn.forEach(btn=>{
        btn.addEventListener('click',deleteF)
    
    }  )
}
function clearData()
    {
        document.querySelector(".aa").value=null
        document.querySelector(".bb").value=null
        document.querySelector(".cc").value=null
        document.querySelector(".dd").value=null
        document.querySelector(".ee").value=null
    }


function clearAll(){
    return localStorage=null
}

function validateChecking(){
    var expected_delivery=document.querySelector(".aa")
    var received_date=document.querySelector(".bb")
    var quality_demanded=document.querySelector(".cc")
    var quality_received=document.querySelector(".dd")
    var quality_returned=document.querySelector(".ee")
    if ((expected_delivery.value.trim===null) || (received_date.value.trim===null) || (quality_demanded.value.trim===null) || (quality_received.value.trim===null) || (quality_returned.trim===null)){
        return false
    }
    else{
        return true
    }

}
function deleteF(event){
let y=JSON.parse(localStorage.getItem('data'))
// for(i=0;i<y.length;i++){
//     k=document.querySelector(`#del-${count}`)
//     k.addEventListener('click',function(){
            
//         y.splice(i,1)

//         })
//     }
    let idx=parseInt(event.target.id) - 1
    console.log("Deleting")
    y.splice(idx,1)
    localStorage.setItem("data",JSON.stringify(y))
    printRecords()
}
// if (validateChecking()){
//     ad=document.querySelector(".but")
//     ki=document.querySelector('#hi')
//     ki.innerHTML=" "
//     ad.addEventListener('click',printRecords)
    

// }
// else{
//     ki=document.querySelector('#hi')
//     ki.innerHTML=" "
// }

printRecords()
