async function fetchData() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();

        
        const user = data.results[0];
        
        console.log('Name:', user.name.first, user.name.last);
        console.log('Gender:', user.gender);
        console.log('City:', user.location.city);
        console.log('Email:', user.email);

        let randomuser = document.getElementById('userinfo')
        let tombol = document.getElementById('tombol');
        tombol.addEventListener('click', function(){
        paragraf.innerHTML = ''
        paragraf.style.color = 'blue'})
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


