(() => {

  let textContainer = document.querySelector('.text-container');
  const changeButton = document.querySelector("button");
  let bioButtons = document.querySelectorAll(".bio-buttons button");
  const dataContainer = ['This', 'is', 'some', 'text'];
  const newContainer = ['This', 'is', 'a', 'join', 'method', 'result'];
  const BillandTed = ['I am Bill S Peterson, Esq', 'And I am Ted Theodore Logan'];

  dataContainer.forEach(data => {
    console.log(data);
    textContainer.textContent += ` ${data}`;
  })

  changeButton.addEventListener('click', function(){
    textContainer.textContent += " I just added this with script!";
    let newString = newContainer.join(' ');
    console.log(newString);
  });

  function showBinInfo(){
    let arrayOndex = this.dataset.arrayref;
    textContainer.textContent = BillandTed[arrayOndex];
  }

  bioButtons.forEach(button => {
    button.addEventListener('click',showBinInfo);
  })

})();
