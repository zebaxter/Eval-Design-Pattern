
export class Sensor {
  constructor(location) {
    this.location = location;
  }

  detect() {
    throw new Error('Sensor.detect() must be implemented by subclasses');
  }
}

export class Notifier {
  constructor(config = {}) {
    this.config = config;
  }

  notify(message, meta = {}) {
    throw new Error('Notifier.notify() must be implemented by subclasses');
  }
}

export function buildMeta(sensorName, location) {
  return {
    sensor: sensorName,
    location,
    date: new Date().toISOString(),
  };
}
