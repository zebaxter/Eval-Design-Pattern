import { buildMeta } from './contracts.js';

export class Room {
  constructor(nom) {
    this.nom = nom;
    this.capteurs = [];
    this.notifs = [];
  }

  ajouterCapteur(capteur) {
    this.capteurs.push(capteur);
    return this;
  }

  ajouterNotifier(notifier) {
    this.notifs.push(notifier);
    return this;
  }

  declencherCapteur(capteur) {
    const message = capteur.detect();
    const meta = { ...buildMeta(capteur.constructor.name, capteur.location || this.nom), piece: this.nom };
    this.notifs.forEach((notifier) => notifier.notify(message, meta));
    return { message, meta };
  }

  declencherTous() {
    return this.capteurs.map((capteur) => this.declencherCapteur(capteur));
  }
}
