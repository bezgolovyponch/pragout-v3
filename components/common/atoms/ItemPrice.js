import React, {useState} from 'react';

export const ItemPrice = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      className="package-button-container"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      <div className="text-package-button-container">
        <div>
          <h2 className="stag-pack">PRAGOUT STAG PACK</h2>

          <div className="hero-package-description">
            <p className="paragraph-hero-package">
              - Apartments <br />
              - Transfer <br />
              - AK47 Shooting <br />
            </p>
            <p className="paragraph-hero-package">
              - Paintball Outdoor <br />
              - Pragout Night Crawl <br />
              - Local Guide <br />
            </p>
          </div>
        </div>
      </div>
      {isShown && (
        <div className="benjamin-button">
          <div className="main-package-price">
            <img className="benjamin-button-image" src="/images/Pack_price-01.svg" />
          </div>
        </div>
      )}
    </div>
  );
};
