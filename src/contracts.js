
export class Sensor {
  constructor(location) {
    this.location = location;
  }

  detect() {
    throw new Error('Sensor.detect() doit etre implemente par une sous-classe');
  }
}

export class Notifier {
  constructor(config = {}) {
    this.config = config;
  }

  notify(message, meta = {}) {
    throw new Error('Notifier.notify() doit etre implemente par une sous-classe');
  }
}

export function buildMeta(sensorName, location) {
  return {
    sensor: sensorName,
    location,
    date: new Date().toISOString(),
  };
}
