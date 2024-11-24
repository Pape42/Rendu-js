
const tabs = document.querySelectorAll('.tab');


const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
       
        tabs.forEach(t => t.classList.remove('tab-active'));

        tab.classList.add('tab-active');

      
        contents.forEach(content => content.classList.remove('active'));

     
        const targetContent = document.querySelector('.' + tab.classList[1]);
        targetContent.classList.add('active');
    });
});
