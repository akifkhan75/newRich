// sub-menu toggle

let dropdowns = document.querySelectorAll('.dropdown-toggle')
dropdowns.forEach((dd)=>{
    dd.addEventListener('click', function (e) {
        var el = this.nextElementSibling
        console.log(el)
        el.style.display = el.style.display==='block'?'none':'block'
    })
})

// chart
var ctx = document.getElementById('overview');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            data: [550, 1200, 2000, 1600, 2000, 2600],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
         },
         tooltips: {
            enabled: false
         }
    }
});

// accordian
const accSingleTriggers = document.querySelectorAll('.js-acc-trigger');

accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

function toggleAccordion() {
  const items = document.querySelectorAll('.js-acc-item');
  const thisItem = this.parentNode;

  items.forEach(item => {
    if (thisItem == item) {
      thisItem.classList.toggle('is-open');
      return;
    }
    item.classList.remove('is-open');
  });
}

// HERO ANIMATION
var chat1 = document.querySelector('#chat-1');
var chat2 = document.querySelector('#chat-2');
var tag = document.querySelector('#saasTag');
var supportTag = document.querySelector('#supportTag');

var layer = document.querySelector('#main');

layer.addEventListener('mousemove', function(e){
  var ivalueX= (e.pageX * -1 / 30);
  var ivalueY= (e.pageY * -1 / 30);
  var cvalueX= (e.pageX * -1 / 40);
  var cvalueY= (e.pageY * -1 / 60);
  var jvalueX= (e.pageX * -1 / 40);
  var jvalueY= (e.pageY * -1 / 40);
  var dvalueX= (e.pageX * -1 / 50);
  var dvalueY= (e.pageY * -1 / 70);
  console.log('ok');
  chat1.style.transform = 'translate3d('+ivalueX+'px,'+ivalueY+'px, 0)';
  chat2.style.transform = 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)';
  tag.style.transform = 'translate3d('+jvalueX+'px,'+jvalueY+'px, 0)';
  supportTag.style.transform = 'translate3d('+dvalueX+'px,'+dvalueY+'px, 0)';
});