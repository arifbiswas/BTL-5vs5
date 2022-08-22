// Player Section 
let plyerCount = 0;
function selectBtn(btn) {
    // player count + 1
    plyerCount++;
    // player Name 
const playerName = btn.parentNode.children[0].innerText;
       
    
    if (plyerCount < 6) {
        //  Player section 
    const playerSelectSection = document.getElementById('Player-select');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <ul class=" flex gap-20 text-xl text-white pl-10 pb-6">
                    <li>${plyerCount}</li>
                    <li>${playerName}</li>
                   </ul> 
    `
        playerSelectSection.appendChild(tr)
    btn.parentNode.children[2].setAttribute('disabled',true)
    btn.style.backgroundColor = 'gray';
        return;
    }
    
    else {
        alert('দুঃখিত আপনি ৫ জনের বেশি নিতে পারবেন না')
        btn.parentNode.children[2].removeAttribute('disabled',true)
        btn.style.backgroundColor = 'black';
        return;
    }
}
