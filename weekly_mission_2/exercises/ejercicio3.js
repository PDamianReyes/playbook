//crear una clase de twitter en
//que se pueda crear una cuenta de twitter
class UserTwitter{
    constructor(username, email,phone,bio){
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.bio = bio;
    }
    getGeneralInfo(){
        return `usuario: ${this.username} email: ${this.email} `;
    }
    status(bio){
        return `${this.username} esta escribiendo ${bio}`;
    }

    }
    //usando herencia
class twitter_post extends UserTwitter{
    constructor(username,email,post,likes){
        super(username,email);

        this.post = post;
        this.likes = likes;
    }
    getstatus(){
        return `${this.username} esta escribiendo ${this.post} cantidad de likes ${this.likes}`;
    }
}
const damian=new UserTwitter('Damian','pedrodamianreyescortez@gmail.com','8211114261');
const damian_post=new twitter_post('Damian','pedrodamianreyescortez@gmail.com','Este es mi post',20);
console.log(damian_post.getstatus());
console.log(damian.getGeneralInfo());
console.log(damian.status('estoy en la casa'));

class topic_twitter{
    constructor(topic,likes,comments){
        this.topic = topic;
        this.likes = likes;
        this.comments = comments;
    }
    getTopic(){
        return `${this.topic}`;
    }
    getLikes(){
        return `${this.likes}`;
    }
}
const topic_1=new topic_twitter('topic_1',20,15);
console.log(topic_1.getTopic());
console.log(topic_1.getLikes());


class user_facebook{
    constructor(nombre,apellido,edad,email,telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }
    getUser(){
        return `nombre: ${this.nombre} apellido:${this.apellido}`;
    }
    getContact(){
        return `contacto: ${this.email} ${this.telefono}`;
    }
}
const user_1=new user_facebook('Eduardo','Guerra','25','edG@gmail.com','8211110433');
console.log(user_1.getUser());
console.log(user_1.getContact());
class uber_profiles{
    constructor(name,conductor,destination,date){
        this.name = name;
        this.conductor = conductor;
        this.destination = destination;
        this.date = date;
    }
    getProfile(){
        return `${this.name} `;
    }
    getInfo_travel(){
        return `${this.conductor} ${this.destination} ${this.date}`;
    }
}
const uber_1=new uber_profiles('uber_1','Ross','calle','10/15/2021');
console.log(uber_1.getProfile());
console.log(uber_1.getInfo_travel());