const MissionCommander = require("./../app/missionCommander");

describe("Esto es una suite de pruebas", ()=>{
  test("1) Crear un objeto de la clase MissionCommander",() => {
    const MyMissionCommander = new MissionCommander("Woopa");
    expect(MyMissionCommander.name).toBe("Woopa");
  })
})