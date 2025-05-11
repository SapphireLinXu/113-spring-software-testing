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

test("CACC1: A controls predicate (T1 vs T3)", () => {
  const settings = new ProgrammedSettings();
  settings.setSetting(Period.MORNING, DayType.WEEKDAY, 70);

  const t1 = createThermostat(65, 10); // A=true, B=true → true
  expect(t1.turnHeaterOn(settings).heaterOn).toBe(true);

  const t3 = createThermostat(69, 10); // A=false, B=true → false
  expect(t3.turnHeaterOn(settings).heaterOn).toBe(false);
});

test("CACC2: B controls predicate (T1 vs T2)", () => {
  const settings = new ProgrammedSettings();
  settings.setSetting(Period.MORNING, DayType.WEEKDAY, 70);

  const t1 = createThermostat(65, 10); // A=true, B=true → true
  expect(t1.turnHeaterOn(settings).heaterOn).toBe(true);

  const t2 = createThermostat(65, 2); // A=true, B=false → false
  expect(t2.turnHeaterOn(settings).heaterOn).toBe(false);
});
