let paragraf = document.getElementById('paragraf');
let tombol = document.getElementById('tombol');

tombol.addEventListener('click', function(){
    paragraf.innerHTML = 'Paragraf Telah Dirubah'
    paragraf.style.color = 'blue'
})

class UserApp {
    constructor(gender, name, city, email){
        this.name = name;
        this.gender = gender;
        this.city = city;
        this.email = email;
    }

    profil(){
        return `https://randomuser.me/api/?gender=${this.gender}&name=${this.name}&city=${this.city}&email=${this.email}`;
    }
}

const app = UserApp()