console.log("Twitter");
const User_twitter= {
    user:'Dare',
    username:'@damiansaurusrex',
    followers:12,
    bio:'Soy un aprendiz de programacion de 25 años',
    location:'Monterrey, Nuevo Leon, Mexico',
    website:'https://twitter.com/damiansaurusrex',
    email:'pedrodamianreyescortez@gmail.com',
    phone:'821-111-4261',
    getGeneralInfo: function(){
        return `${this.user} (${this.username}) tiene ${this.followers} seguidores, su biografía es: ${this.bio}`;
    }
}
const trendin_topic_twitt={
    topic:'#trending',
    likes:20,
    comments:3,
    retwittear_comments:4,
    getinfo:function(){
        return `El tópico ${this.topic} tiene ${this.likes} likes, ${this.comments} comentarios y ${this.retwittear_comments} retwittear_comments`;
    }
}
const hashtag={
    hashtag:'#trending',
    likes:10,    
    gethashtags:function(){
        return  `el hashtag ${this.hashtag} tiene ${this.likes} likes`;
    }
}
console.log("facebook");
const user_facebook={
    nombre:'Damian',
    apellido:'Reyes',
    edad:25,
    email:'pedrodamianreyescortez@gmail.com',
    telefono:'821-111-4261',
    getGeneralInfo:function(){
        return `nombre es ${this.nombre} apellido es ${this.apellido} edad es ${this.edad} email es ${this.email} telefono es ${this.telefono}`; 
    }
}
const post_facebook = {
    user:'DamianReyes',
    likes:15,
    comments:10,
    reactions:15,
    getUserinfo:function(){
        return `El usuario ${this.user} tiene ${this.likes} likes, ${this.comments} comentarios y ${this.reactions} reactions`;
    }
}
const biagraphy={
    user:'DamianReyes',
    number_friendships:15,
    number_posts:10,
    number_comments:15,
    getUserbiography:function(){
        return `el usuario ${this.user} tiene ${this.number_friendships} amigos, ${this.number_posts} posts y ${this.number_comments} comentarios`;
    }
}
console.log("Uber");
const uber_profiles={
    name:'Damian',
    last_name:'Reyes',
    email:'pedrodamianreyescortez@gmail.com',
    phone:'821-111-4261',
    location:'Monterrey, Nuevo Leon, Mexico',
    getGeneralInfo:function(){
        return `${this.name} ${this.last_name} tiene ${this.email} y ${this.phone}`;
    }
}
const Uber_travel={
    name_user:'Mauricio',
    conductor:'Calzada',
    destination:'Monterrey, Nuevo Leon, Mexico',
    date:'10/15/2021',
    time:'20:00',
    price:400,
    seats:3,
    get_travel_info:function(){
        return `${this.name_user} ${this.conductor} viaja a ${this.destination} el día ${this.date} a las ${this.time} y el precio es ${this.price} y hay ${this.seats} asientos disponibles`;
    }
}
console.log("Twitter:"+User_twitter.getGeneralInfo());
console.log("Facebook:"+user_facebook.getGeneralInfo());
console.log("Uber:"+uber_profiles.getGeneralInfo());
console.log("Uber:"+Uber_travel.get_travel_info());