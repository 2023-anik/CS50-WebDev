class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        let para = document.createElement("p");
        para.innerText = `Name: ${this.name}\nEmail: ${this.email}`;
        document.querySelector("div").prepend(para);
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        let data="some new value";
        return data;
    }
}

// Example usage:
let user = new User("John Doe", "john.doe@example.com");
console.log(user.viewData());
let user2 = new User("John", "john.doe@example.com");
console.log(user2.viewData());
let admin1=new Admin("Anik", "anik@gmail.com");
console.log(admin1.editData());