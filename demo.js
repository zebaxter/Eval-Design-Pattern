import {
  CameraA,
  TemperatureSensorA,
  MotionSensorA,
  ThermalSensorB,
  ThermalSensorBAdapter,
  EmailNotifier,
  LogNotifier,
  DiscordNotifier,
  Room,
} from './src/index.js';

const salon = new Room('Salon');
const serveur = new Room('Salle serveurs');

salon
  .ajouterCapteur(new CameraA('Salon'))
  .ajouterCapteur(new MotionSensorA('Salon'));

const capteurB = new ThermalSensorB('Salle serveurs');
serveur
  .ajouterCapteur(new TemperatureSensorA('Salle serveurs', 35))
  .ajouterCapteur(new ThermalSensorBAdapter(capteurB));

const email = new EmailNotifier({ to: 'securite@batiment.fr' });
const log = new LogNotifier();
const discord = new DiscordNotifier({ channel: '#alertes' });

[salon, serveur].forEach((piece) => {
  piece.ajouterNotifier(email).ajouterNotifier(log).ajouterNotifier(discord);
});

console.log('Salon :');
salon.declencherTous();

console.log('Salle serveurs :');
serveur.declencherTous();
