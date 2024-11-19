'use client';

import React from 'react';
import CookiePolicyContent from '@/components/ui/CookiePolicyContent';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-cormorant mb-12">Privacy & Cookie Policy</h1>
          
          {/* Sezione Privacy Policy */}
          <section className="prose prose-invert max-w-none mb-20">
            <h2>Privacy Policy</h2>
            <p>
              La presente informativa descrive le modalità di gestione del sito web di IO Sì Gioielli 
              in riferimento al trattamento dei dati personali degli utenti che lo consultano.
            </p>

            <h3>1. Titolare del Trattamento</h3>
            <p>
              Il Titolare del trattamento è IO Sì Gioielli, con sede in [INDIRIZZO].
              Email: [EMAIL]
              PEC: [PEC]
              P.IVA: [P.IVA]
            </p>

            <h3>2. Tipologie di Dati raccolti</h3>
            <p>
              Fra i dati personali raccolti da questo sito web, in modo autonomo o tramite terze parti, ci sono:
              - Cookie
              - Dati di utilizzo
              - Email
              - Nome e cognome
              - Numero di telefono
              - Indirizzo
            </p>

            <h3>3. Finalità del Trattamento</h3>
            <p>
              I dati dell'Utente sono raccolti per consentire:
              - La navigazione del sito
              - L'erogazione del servizio richiesto
              - L'adempimento degli obblighi di legge
              - L'invio di comunicazioni commerciali (previo consenso)
              - L'analisi statistica in forma aggregata
            </p>

            <h3>4. Base Giuridica del Trattamento</h3>
            <p>
              Il trattamento dei dati si basa su:
              - Esecuzione di un contratto (Art. 6.1.b GDPR)
              - Consenso dell'interessato (Art. 6.1.a GDPR)
              - Legittimo interesse del titolare (Art. 6.1.f GDPR)
              - Adempimento di obblighi legali (Art. 6.1.c GDPR)
            </p>

            <h3>5. Modalità di Trattamento</h3>
            <p>
              Il trattamento viene effettuato mediante strumenti informatici e/o telematici, 
              con modalità organizzative e logiche strettamente correlate alle finalità indicate.
            </p>

            <h3>6. Periodo di Conservazione</h3>
            <p>
              I dati sono trattati e conservati per il tempo richiesto dalle finalità per le quali 
              sono stati raccolti:
              - Dati di navigazione: massimo 14 mesi
              - Dati per finalità di marketing: fino a revoca del consenso
              - Dati per finalità contrattuali: 10 anni dalla conclusione del contratto
            </p>

            <h3>7. Diritti dell'Utente</h3>
            <p>
              Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati 
              dal Titolare. In particolare, hai il diritto di:
              - Accedere ai tuoi dati personali
              - Ottenere la rettifica o la cancellazione
              - Revocare il consenso in qualsiasi momento
              - Opporti al trattamento dei tuoi dati
              - Ottenere la limitazione del trattamento
              - Ottenere la portabilità dei dati
              - Proporre reclamo all'autorità di controllo
            </p>

            <h3>8. Sicurezza dei Dati</h3>
            <p>
              Adottiamo le opportune misure di sicurezza volte ad impedire l'accesso, la divulgazione, 
              la modifica o la distruzione non autorizzate dei Dati Personali.
            </p>

            <h3>9. Modifiche alla Privacy Policy</h3>
            <p>
              Ci riserviamo il diritto di apportare modifiche alla presente privacy policy in qualunque 
              momento dandone informazione agli Utenti su questa pagina.
            </p>
          </section>

          {/* Sezione Cookie Policy */}
          <section className="prose prose-invert max-w-none">
            <CookiePolicyContent />
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
