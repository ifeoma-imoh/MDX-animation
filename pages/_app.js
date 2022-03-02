import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{padding:'2% 10%'}}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
