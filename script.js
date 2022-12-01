let turn = 'X'
let tie = 9
const changeTurn = ()=>{
    return turn ==='X'?'0':'X'
    
}
// 0 1 2
// 3 4 5
// 6 7 8
let footer_text = document.querySelector('.footer')
const checkWin=()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins =[
        [0,1,2],[3,4,5],[6,7,8],[2,4,6],[0,4,8],[0,3,6],[1,4,7],[2,5,8]
    ]
    
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&  (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !='')){
            boxtext[e[0]].style.color = 'green'
            boxtext[e[1]].style.color = 'green'
            boxtext[e[2]].style.color = 'green'
            boxtext[e[0]].style['box-shadow'] = '0px 0px 5px 1px green'
            boxtext[e[1]].style['box-shadow'] = '0px 0px 5px 1px green'
            boxtext[e[2]].style['box-shadow'] = '0px 0px 5px 1px green'
            footer_text.style.display='block'
            if (turn =='0'){
                turn='X'}else{turn='0'}
            document.getElementById('win').innerHTML = turn + ' Winner!!'
            
            // document.getElementsByTagName('button').forEach((el)=>el.disabled = true);
            document.querySelectorAll('.btn').forEach(elem => {
                elem.disabled = true;
            })
        }
        
    })
}
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText == ''){
            boxtext.innerText=turn
            boxtext.style.padding = '40px 59.6px'
            turn = changeTurn()
            document.getElementById('turns').innerText = turn + ' Turns'
            tie-=1
            checkWin()
            
        }
        if(tie==0){
            document.getElementById('win').innerHTML =  'Tie!!'
            footer_text.style.display='block'
        }
        
    })
})
reset.addEventListener('click',()=>{
    tie = 9
    let boxtexts = document.querySelectorAll('.boxtext')
    let footer_text_ = document.querySelector('.footer')
    Array.from(boxtexts).forEach(element_=>{
        element_.innerText=''
        element_.style.padding = '50px 65px'
        element_.style['box-shadow'] = '0px 0px 5px 1px red'
        element_.style.color = 'red'
        footer_text_.style.display='none'
        document.getElementById('turns').innerText = 'X Turns'
        document.querySelectorAll('.btn').forEach(elem => {
            elem.disabled = false;
        })
        
    })
})
