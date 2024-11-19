'use client';

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="font-cormorant text-4xl mb-8">Privacy Policy</h1>
        
        <section className="mb-8">
          <p>
            La presente informativa descrive le modalità di gestione del sito web in riferimento al trattamento 
            dei dati personali degli utenti che lo consultano, ai sensi del Regolamento (UE) 2016/679 (GDPR) e 
            del D.Lgs. 196/2003 (Codice Privacy).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-cormorant text-2xl mb-4">Titolare del Trattamento</h2>
          <p>
            Il Titolare del trattamento è IO Sì Gioielli, con sede in [INDIRIZZO].
            Email: [EMAIL]
            Tel: [TELEFONO]
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-cormorant text-2xl mb-4">Tipologia di Dati Trattati</h2>
          
          <h3 className="text-xl mb-3">Dati di navigazione</h3>
          <p>
            I sistemi informatici e le procedure software preposte al funzionamento di questo sito web acquisiscono, 
            nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso 
            dei protocolli di comunicazione di Internet. Si tratta di informazioni che non sono raccolte per essere 
            associate a interessati identificati, ma che per loro stessa natura potrebbero, attraverso elaborazioni 
            ed associazioni con dati detenuti da terzi, permettere di identificare gli utenti.
          </p>

          <h3 className="text-xl mb-3 mt-6">Dati forniti volontariamente dall'utente</h3>
          <p>
            L'invio facoltativo, esplicito e volontario di posta elettronica agli indirizzi indicati su questo sito 
            comporta la successiva acquisizione dell'indirizzo del mittente, necessario per rispondere alle richieste, 
            nonché degli eventuali altri dati personali inseriti nella missiva.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-cormorant text-2xl mb-4">Finalità del Trattamento</h2>
          <ul>
            <li>Permettere la navigazione del sito web</li>
            <li>Rispondere alle richieste degli utenti</li>
            <li>Adempiere ad obblighi di legge</li>
            <li>Analizzare l'utilizzo del sito per migliorarne le funzionalità</li>
            <li>Marketing e profilazione (solo previo consenso esplicito)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-cormorant text-2xl mb-4">Base Giuridica del Trattamento</h2>
          <p>
            Il trattamento dei dati personali si fonda su:
          </p>
          <ul>
            <li>Consenso dell'interessato</li>
            <li>Adempimento di obblighi contrattuali</li>
            <li>Legittimo interesse del titolare</li>
            <li>Adempimento di obblighi di legge</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-cormorant text-2xl mb-4">Modalità del Trattamento</h2>
          <p>
            I dati personali sono trattati con strumenti automatizzati per il tempo strettamente necessario a 
            conseguire gli scopi per cui sono stati raccolti. Specifiche misure di sicurezza sono osservate per 
            prevenire la perdita dei dati, usi illeciti o non corretti ed accessi non autorizzati.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-cormorant text-2xl mb-4">Diritti degli Interessati</h2>
          <p>
            Gli interessati hanno il diritto di:
          </p>
          <ul>
            <li>Accedere ai propri dati personali</li>
            <li>Chiederne la rettifica</li>
            <li>Chiederne la cancellazione</li>
            <li>Chiedere la limitazione del trattamento</li>
            <li>Opporsi al trattamento</li>
            <li>Chiedere la portabilità dei dati</li>
          </ul>
          <p className="mt-4">
            Le richieste vanno rivolte al Titolare del trattamento utilizzando i contatti sopra indicati.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-cormorant text-2xl mb-4">Trasferimento dei Dati</h2>
          <p>
            I dati personali sono trattati principalmente all'interno dell'Unione Europea. Qualora si rendesse 
            necessario il trasferimento dei dati verso Paesi terzi, questo avverrà nel rispetto delle garanzie 
            appropriate e opportune ai sensi degli articoli 44 e seguenti del GDPR.
          </p>
        </section>

        <section>
          <h2 className="font-cormorant text-2xl mb-4">Modifiche alla Privacy Policy</h2>
          <p>
            Il Titolare si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque 
            momento dandone informazione agli utenti su questa pagina. Si prega dunque di consultare regolarmente 
            questa pagina.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
