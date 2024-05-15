import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="social-medias">
        <img src="/images/fb.png" alt="facebook" />
        <img src="/images/tw.png" alt="twitter" />
        <img src="/images/ig.png" alt="instagram" />
      </div>
      <img className="logo" src="/images/logo.png" alt="logo" />
      <h6>Desenvoldido por driano.css</h6>
    </footer>
  );
};

export default Rodape;
