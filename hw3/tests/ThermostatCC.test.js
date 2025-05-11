const Thermostat = require('../Thermostat');
const { ProgrammedSettings, Period, DayType } = require('../ProgrammedSettings');

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

test("CC1: A=true, B=true → true", () => {
  const settings = new ProgrammedSettings();
  settings.setSetting(Period.MORNING, DayType.WEEKDAY, 70);
  const t = createThermostat(65, 10);
  const result = t.turnHeaterOn(settings);
  expect(result.heaterOn).toBe(true);
});

test("CC2: A=true, B=false → false", () => {
  const settings = new ProgrammedSettings();
  settings.setSetting(Period.MORNING, DayType.WEEKDAY, 70);
  const t = createThermostat(65, 2);
  const result = t.turnHeaterOn(settings);
  expect(result.heaterOn).toBe(false);
});

test("CC3: A=false, B=true → false", () => {
  const settings = new ProgrammedSettings();
  settings.setSetting(Period.MORNING, DayType.WEEKDAY, 70);
  const t = createThermostat(69, 10);
  const result = t.turnHeaterOn(settings);
  expect(result.heaterOn).toBe(false);
});

test("CC4: A=false, B=false → false", () => {
  const settings = new ProgrammedSettings();
  settings.setSetting(Period.MORNING, DayType.WEEKDAY, 70);
  const t = createThermostat(69, 2);
  const result = t.turnHeaterOn(settings);
  expect(result.heaterOn).toBe(false);
});
