// tests/ThermostatCACC.test.js

const Thermostat = require('../Thermostat');
const { ProgrammedSettings, Period, DayType } = require('../ProgrammedSettings');

// 工廠函數建立 Thermostat 並設定溫度與時間
function createThermostat(curTemp, timeSinceLastRun) {
  const t = new Thermostat();
  t.setCurrentTemp(curTemp);
  t.thresholdDiff = 2;
  t.timeSinceLastRun = timeSinceLastRun;
  t.minLag = 5;
  t.period = Period.MORNING;
  t.day = DayType.WEEKDAY;
  return t;
}

test("CACC A controls predicate (TC1 vs TC2)", () => {
  const settings = new ProgrammedSettings();
  settings.setSetting(Period.MORNING, DayType.WEEKDAY, 70);

  // TC1: A=T, B=T → predicate = T
  const tc1 = createThermostat(65, 10);
  expect(tc1.turnHeaterOn(settings).heaterOn).toBe(true);

  // TC2: A=F, B=T → predicate = F
  const tc2 = createThermostat(69, 10);
  expect(tc2.turnHeaterOn(settings).heaterOn).toBe(false);
});

test("CACC B controls predicate (TC3 vs TC4)", () => {
  const settings = new ProgrammedSettings();
  settings.setSetting(Period.MORNING, DayType.WEEKDAY, 70);

  // TC3: A=T, B=T → predicate = T
  const tc3 = createThermostat(65, 10);
  expect(tc3.turnHeaterOn(settings).heaterOn).toBe(true);

  // TC4: A=T, B=F → predicate = F
  const tc4 = createThermostat(65, 2);
  expect(tc4.turnHeaterOn(settings).heaterOn).toBe(false);
});
