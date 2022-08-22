
// Budgets section 

document.getElementById('player-cost').addEventListener('click', function () {
    const getValue = getInputValue('player-budget');
    if (isNaN(getValue, true)) {
        alert('প্রতি খেলোয়াড়ের বাজেটের টাকা নির্ধারন করুন, ধন্যবাদ ')
        return;
    }
    else {
        const totalPlayerCost = getValue * 5;
    
    setElementValue('Player-total-cost',totalPlayerCost)
    }
    
})

// Total Cost Secton 
document.getElementById('total-cost').addEventListener('click', function () {
    const totalPlayerCost = getElementValue('Player-total-cost');
    const managerCost = getInputValue('manager-cost');
    const coachCost = getInputValue('coach-cost');
    const inTotalBudget = totalPlayerCost + managerCost + coachCost;
    
    if (isNaN(inTotalBudget, true)) {
        alert('ম্যানেজার এবং কোচের বাজেটের টাকা নির্ধারন করুন, ধন্যবাদ ');
        return;
    }
    else {
         setElementValue('in-Total-Cost',inTotalBudget)
    }
})