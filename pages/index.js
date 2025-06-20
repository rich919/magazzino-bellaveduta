import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Magazzino Online Bellaveduta</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a202c" />
      </Head>
      <main style={{ fontFamily: 'sans-serif', padding: 20 }}>
        <h1>Magazzino Online Bellaveduta</h1>
        <p>Benvenuto. Accedi con le credenziali fornite per visualizzare i materiali.</p>
        <p><strong>Cliente</strong><br />Username: <code>bellavedutaospite</code><br />Password: <code>marmiepietre</code></p>
        <a
          href="https://wa.me/393462482556?text=Ciao!%20Sto%20visitando%20il%20Magazzino%20online%20Bellaveduta%20e%20vorrei%20informazioni."
          target="_blank"
          style={{
            display: 'inline-block',
            marginTop: 20,
            padding: 10,
            backgroundColor: '#25D366',
            color: 'white',
            textDecoration: 'none',
            borderRadius: 5
          }}
        >
          📲 Contattaci su WhatsApp
        </a>
      </main>
    </>
  );
}