import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <section className="info">
        <h2>Maktab Haqida</h2>
        <p>41-maktab yuqori darajadagi ta'lim sifati bilan ajralib turadi.</p>
      </section>
      <section className="features">
        <div className="feature">
          <h3>Malakali O'qituvchilar</h3>
          <p>
            Bizning o'qituvchilarimiz o'z sohasida yetakchi mutaxassislardir.
          </p>
        </div>
        <div className="feature">
          <h3>Zamonaviy Texnologiyalar</h3>
          <p>Ta'lim jarayoni innovatsion texnologiyalar bilan ta'minlangan.</p>
        </div>
        <div className="feature">
          <h3>Qulay Muhit</h3>
          <p>
            O'quvchilarimiz uchun eng qulay va xavfsiz ta'lim muhiti yaratildi.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Main;
