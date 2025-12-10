import { Notifier } from './contracts.js';

export class EmailNotifier extends Notifier {
  constructor(config = {}) {
    super(config);
  }

  notify(message, meta = {}) {
    const destinataire = this.config.to || 'destinataire@example.com';
    const sortie = `Email vers ${destinataire}: ${message}`;
    console.log(sortie);
    return sortie;
  }
}

export class LogNotifier extends Notifier {
  constructor(config = {}) {
    super(config);
    this.logs = [];
  }

  notify(message, meta = {}) {
    const entree = `Log: ${message}`;
    this.logs.push({ entree, meta });
    console.log(entree);
    return entree;
  }
}

export class DiscordNotifier extends Notifier {
  constructor(config = {}) {
    super(config);
  }

  notify(message, meta = {}) {
    const canal = this.config.channel || '#general';
    const sortie = `Discord ${canal}: ${message}`;
    console.log(sortie);
    return sortie;
  }
}
