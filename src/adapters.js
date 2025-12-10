import { Sensor } from './contracts.js';

export class ThermalSensorB {
  constructor(position) {
    this.position = position;
    this.name = typeof position === 'string' ? position : position?.name || 'ThermalSensorB';
  }

  scanHeatSignature() {
    return {
      sensor: this.name,
      detection: 'thermal',
      date: new Date().toISOString(),
    };
  }
}

export class ThermalSensorBAdapter extends Sensor {
  constructor(sensorB) {
    const location = sensorB?.name || sensorB?.position || 'Inconnu';
    super(location);
    this.sensorB = sensorB;
  }

  detect() {
    const data = this.sensorB.scanHeatSignature();
    return `ThermalSensorBAdapter: signature thermique detectee a ${this.location} le ${data.date}`;
  }
}
