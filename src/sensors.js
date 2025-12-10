import { Sensor } from './contracts.js';

export class CameraA extends Sensor {
  constructor(location) {
    super(location);
  }

  detect() {
    return `CameraA: activite suspecte detectee dans ${this.location}`;
  }
}

export class TemperatureSensorA extends Sensor {
  constructor(location, threshold) {
    super(location);
    this.threshold = threshold;
  }

  detect() {
    return `TemperatureSensorA: seuil ${this.threshold} depasse dans ${this.location}`;
  }
}

export class MotionSensorA extends Sensor {
  constructor(location) {
    super(location);
  }

  detect() {
    return `MotionSensorA: mouvement detecte dans ${this.location}`;
  }
}
