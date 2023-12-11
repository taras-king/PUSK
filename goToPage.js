function goToPage(page) {
    window.location.href = page;
}
let MethodButton = document.getElementById('MethodsButton');
let MethodsDiv = document.getElementById('MethodsDiv')

MethodButton.addEventListener('click', function(){
    if(MethodsDiv.style.display === 'none' || MethodsDiv.style.display === ''){
        MethodsDiv.style.display = 'block';
    }else{
        MethodsDiv.style.display = 'none';
    }
});
MethodsDiv.addEventListener('mouseleave', function () {
    MethodsDiv.style.display = 'none';
});