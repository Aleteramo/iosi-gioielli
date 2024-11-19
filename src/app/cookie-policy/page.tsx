'use client';

import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="font-cormorant text-4xl mb-8">Cookie Policy</h1>
        
        <section className="mb-8">
          <h2 className="font-cormorant text-2xl mb-4">Cosa sono i cookie?</h2>
          <p>
            I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, 
            dove vengono memorizzati per essere ritrasmessi agli stessi siti in occasione di visite successive. 
            I cookie sono utilizzati per diverse finalità, hanno caratteristiche diverse, e possono essere utilizzati 
            sia dal titolare del sito che si sta visitando, sia da terze parti.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-cormorant text-2xl mb-4">Tipologie di cookie utilizzati</h2>
          
          <h3 className="text-xl mb-3">Cookie tecnici necessari</h3>
          <p>
            Questi cookie sono essenziali per il corretto funzionamento del sito web. Permettono la navigazione 
            e l'utilizzo delle funzioni basilari. Non raccolgono informazioni personali utilizzabili a scopo di marketing. 
            La loro disattivazione compromette l'utilizzo dei servizi accessibili da login.
          </p>

          <h3 className="text-xl mb-3 mt-6">Cookie analitici</h3>
          <p>
            Utilizzati per raccogliere informazioni sull'utilizzo del sito. Il titolare usa queste informazioni 
            per analisi statistiche, per migliorare il sito e semplificarne l'utilizzo, oltre che per monitorarne 
            il corretto funzionamento. Questi cookie raccolgono informazioni in forma aggregata e anonima 
            sull'attività degli utenti nel sito.
          </p>

          <h3 className="text-xl mb-3 mt-6">Cookie di marketing</h3>
          <p>
            Questi cookie sono utilizzati per tracciare i visitatori attraverso i siti web. L'intento è quello 
            di visualizzare annunci pertinenti e coinvolgenti per il singolo utente e quindi di maggior valore 
            per editori e inserzionisti terzi.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-cormorant text-2xl mb-4">Come gestire i cookie</h2>
          <p>
            L'utente può decidere se accettare o meno i cookie utilizzando le impostazioni del proprio browser. 
            Attenzione: la disabilitazione totale o parziale dei cookie tecnici può compromettere l'utilizzo 
            delle funzionalità del sito. Al contrario, la fruibilità dei contenuti pubblici è possibile anche 
            disabilitando completamente i cookie.
          </p>
          <p className="mt-4">
            La disabilitazione dei cookie "terze parti" non pregiudica in alcun modo la navigabilità del sito.
            L'impostazione può essere definita in modo specifico per i diversi siti e applicazioni web. I migliori 
            browser consentono infatti di definire impostazioni diverse per i cookie "proprietari" e per quelli 
            di "terze parti".
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-cormorant text-2xl mb-4">Base giuridica del trattamento</h2>
          <p>
            L'utilizzo di cookie tecnici è un trattamento effettuato nel legittimo interesse del Titolare; 
            l'utilizzo di cookie analitici e di profilazione viene effettuato sulla base del consenso dell'interessato.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-cormorant text-2xl mb-4">Diritti dell'utente</h2>
          <p>
            In ogni momento, l'utente può revocare il consenso precedentemente prestato, opponendosi al trattamento. 
            I diritti degli interessati, di cui agli artt. 15-22 del GDPR 2016/679, sono esercitabili contattando 
            il Titolare del trattamento.
          </p>
        </section>

        <section>
          <h2 className="font-cormorant text-2xl mb-4">Aggiornamenti</h2>
          <p>
            La presente Cookie Policy può subire modifiche nel tempo – anche connesse all'eventuale entrata in 
            vigore di nuove normative di settore, all'aggiornamento o erogazione di nuovi servizi ovvero ad 
            intervenute innovazioni tecnologiche.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
