'use client';

import React from 'react';

const CookiePolicyContent: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-none space-y-6 overflow-y-auto">
      <h2>Cookie Policy di IO Sì Gioielli</h2>

      <section>
        <h3>Titolare del trattamento</h3>
        <p>
          Il Titolare del trattamento dei dati personali è IO Sì Gioielli, con sede in [INDIRIZZO].
          Email: [EMAIL], PEC: [PEC], P.IVA: [P.IVA].
        </p>
      </section>

      <section>
        <h3>Cosa sono i cookie?</h3>
        <p>
          I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, 
          dove vengono memorizzati per essere ritrasmessi agli stessi siti in occasione di visite successive. 
          I cookie sono utilizzati per diverse finalità, hanno caratteristiche diverse, e possono essere utilizzati 
          sia dal titolare del sito che si sta visitando, sia da terze parti.
        </p>
      </section>

      <section>
        <h3>Tipologie di cookie utilizzati</h3>
        
        <h4>1. Cookie tecnici necessari (sempre attivi)</h4>
        <p>
          Questi cookie sono essenziali per il corretto funzionamento del sito web e sono gli unici necessari per la fruizione dei servizi richiesti.
          Vengono utilizzati per:
          - Gestire la sessione di navigazione
          - Ricordare le preferenze di visualizzazione
          - Garantire la sicurezza della navigazione
          
          Base giuridica: legittimo interesse del titolare (Art. 6.1.f GDPR)
          Durata: sessione/6 mesi
          Origine: prima parte
        </p>

        <h4>2. Cookie analitici (opzionali)</h4>
        <p>
          Utilizziamo Google Analytics 4 in modalità anonimizzata per raccogliere informazioni statistiche in forma aggregata.
          Questi cookie ci permettono di:
          - Analizzare il traffico del sito
          - Capire come gli utenti interagiscono con il sito
          - Migliorare l'esperienza utente
          
          Base giuridica: consenso dell'interessato (Art. 6.1.a GDPR)
          Durata: 14 mesi
          Origine: terza parte (Google)
          Privacy Policy: [link alla privacy policy di Google Analytics]
        </p>

        <h4>3. Cookie di marketing (opzionali)</h4>
        <p>
          Questi cookie sono utilizzati per:
          - Mostrare pubblicità personalizzata
          - Misurare l'efficacia delle campagne pubblicitarie
          - Analizzare le preferenze degli utenti
          
          Base giuridica: consenso dell'interessato (Art. 6.1.a GDPR)
          Durata: 12 mesi
          Origine: terza parte (specificare i fornitori)
          Privacy Policy: [link alle privacy policy dei fornitori]
        </p>
      </section>

      <section>
        <h3>I tuoi diritti e scelte</h3>
        <p>
          In conformità con il GDPR (Artt. 15-22), hai il diritto di:
          - Accedere ai tuoi dati personali
          - Rettificare o cancellare i tuoi dati
          - Limitare il trattamento
          - Opporti al trattamento
          - Revocare il consenso in qualsiasi momento
          - Presentare un reclamo all'autorità di controllo (Garante Privacy)
        </p>
        <p>
          Puoi esercitare questi diritti contattandoci a:
          Email: [EMAIL]
          PEC: [PEC]
          Indirizzo: [INDIRIZZO]
        </p>
      </section>

      <section>
        <h3>Come gestire i cookie</h3>
        <p>
          Oltre alle opzioni fornite nel banner dei cookie, puoi gestire le preferenze dei cookie anche attraverso il tuo browser:
          - Chrome: chrome://settings/cookies
          - Firefox: about:preferences#privacy
          - Safari: Preferenze &gt; Privacy
          - Edge: edge://settings/privacy
        </p>
        <p>
          La disabilitazione dei cookie tecnici necessari può limitare la tua capacità di utilizzare il sito e impedire di fruire dei servizi richiesti.
          La disabilitazione dei cookie di terze parti non pregiudica in alcun modo la navigabilità.
        </p>
      </section>

      <section>
        <h3>Trasferimento dati extra-UE</h3>
        <p>
          I dati raccolti tramite i cookie di terze parti potrebbero essere trasferiti in paesi non appartenenti all'Unione Europea.
          In questi casi, garantiamo che il trasferimento avvenga in conformità agli artt. 44-49 del GDPR.
        </p>
      </section>

      <section>
        <h3>Aggiornamenti della Cookie Policy</h3>
        <p>
          Questa Cookie Policy è stata aggiornata il [DATA]. Ci riserviamo il diritto di modificare questa policy in qualsiasi momento.
          Ogni modifica verrà pubblicata su questa pagina e, ove opportuno, notificata via email.
        </p>
      </section>
    </div>
  );
};

export default CookiePolicyContent;
