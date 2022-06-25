import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Вам потрібне індивідуальне замовлення</h2>
              <form className="form-section">
                <input placeholder="Ваш Email..." name="email" type="email" />
                <input value="Так. Я хочу!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
