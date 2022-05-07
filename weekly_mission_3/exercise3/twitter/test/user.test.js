const User = require("./../app/user.js")


describe("Unit suite para la clase usuario", ()=> {
  const damianUser = new User(1, "damian reyes", "damianrey", "just a normal guy");
  
  test("1) Crear un objeto", ()=>{
    expect(damianUser.id).toBe(1);
    expect(damianUser.name).toBe("damian reyes");
    expect(damianUser.username).toBe("damianrey");
    expect(damianUser.bio).toBe("just a normal guy");
  })

  test("2) Test getUsername funtion", ()=>{
    expect(damianUser.getUsername).toBe("damianrey");  
  })
  
  test("3) Test getBio function", ()=>{
    expect(damianUser.getBio).toBe("just a normal guy");  
  })

  test("4) Test getDateCreated function", ()=>{
    expect(damianUser.getDateCreated).not.toBeUndefined();  
  })
 
  test("5) Test getLastUpdated function", ()=>{
    expect(damianUser.getLastUpdated).not.toBeUndefined();  
  })
  test("6) Test setters function", ()=> {
    damianUser.setUsername = "damian1"
    expect(damianUser.username).toBe("damian1");
    
    damianUser.setBio = "Pudin";
    expect(damianUser.bio).toBe("Pudin");
  })
  
})
