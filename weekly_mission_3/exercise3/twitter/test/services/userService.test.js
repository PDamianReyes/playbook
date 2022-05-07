const UserService = require("./../../app/services/userService");

describe('Unit test suite',() =>{
  test('1) Crear un objeto', () => {
    const userDamian = UserService.create(1, "damianrey", "damian reyes");
    expect(userDamian.id).toBe(1);
    expect(userDamian.username).toBe("damianrey");
    expect(userDamian.name).toBe("damian reyes");
  })
  test('2) Try get Functions', () => {
    const userDamian = UserService.create(1, "damianrey", "damian reyes");
    const userInfo = UserService.getInfo(userDamian);
    expect(userInfo[0]).toBe(1);
    expect(userInfo[1]).toBe("damianrey");
    expect(userInfo[2]).toBe("damian reyes");
    expect(userInfo[3]).toBe("Default");
  })
  test('3) Try UpdateUserUsername function', () =>{
    const userDamian = UserService.create(1, "damianrey", "damian reyes");
    UserService.updateUserUsername(userDamian, "DamianRey");
    expect(userDamian.username).toBe("DamianRey");
  })
  test('4) Try getAllUsernames function', () => {
    const user1 = UserService.create(1, "user1", "Damian1");
    const user2 = UserService.create(2, "user2", "Damian2");
    const user3 = UserService.create(3, "user3", "Damian3");

    const allUsernames = UserService.getAllUsernames([user1, user2, user3]);
    
    expect(allUsernames).toContain("user1");
    expect(allUsernames).toContain("user2");
    expect(allUsernames).toContain("user3");
  })
});