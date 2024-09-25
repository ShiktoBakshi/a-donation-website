document.getElementById('quota-donate')
    .addEventListener('click', function(event){
        event.preventDefault();

        const money = getInputFieldValueById('quota-input');

        if(isNaN(money)){
            alert('Failed donate');
            return;
        }
        if(money < 1){
            alert('amount is too low');
            return;
        }
        const balance = getTextFieldValueById('account-balance');
        if(balance < money){
            alert('You do not have enough money in your account');
            return;
        }
        else{
            const donate = getTextFieldValueById('totalDonate-add');
            const totalDonate = donate + money;
            document.getElementById('totalDonate-add').innerText = totalDonate;
            const newtBalance = balance - money;
            document.getElementById('account-balance').innerText = newtBalance;

            // add to transaction history
            const div = document.createElement('div');
            div.classList.add('text-left');
            const now = new Date();
            const dateTime = now.toLocaleString();
            div.innerHTML = `
                <h4 class="text-2xl font-bold text-black">${money} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h4>
                <p class="text-gray-500">Date:${dateTime} GMT +0600 (Bangladesh Standard Time)</p>
           `
            document.getElementById('history-container').appendChild(div);
            document.getElementById('my_modal_1').showModal();
        }
    });