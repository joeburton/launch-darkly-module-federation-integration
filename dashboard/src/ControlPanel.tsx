import React from 'react';
import { useFlags, useLDClient } from 'launchdarkly-react-client-sdk';

const item = {
  border: '1px solid green',
  borderRadius: '4px',
  padding: '0.5rem',
  margin: '10px',
  listStyle: 'none',
};

const uiContainer = {
  border: '1px solid green',
  color: '#000',
  borderRadius: '4px',
  padding: '2rem',
  margin: '10px',
  listStyle: 'none',
};

const bgGreen = {
  display: 'inline-block',
  backgroundColor: 'green',
  padding: '0.5rem',
  color: 'white',
};

const bgRed = {
  display: 'inline-block',
  backgroundColor: 'red',
  padding: '0.5rem',
  color: 'white',
};

const Feature = ({ feature, flag }: { feature: string; flag: boolean }) => {
  return (
    <div style={item}>
      Feature: {feature} -
      {flag ? (
        <span style={{ color: 'green' }}> [Enabled]</span>
      ) : (
        <span style={{ color: 'red' }}> [Disabled]</span>
      )}
    </div>
  );
};

const ControlPanel = () => {
  const {
    miniBasket,
    silverDealBanner,
    newCarousel,
    enableNewHeader,
    rollingOffer,
    winterLaunch,
  } = useFlags();

  const flags = useFlags();
  const ldClient = useLDClient();

  console.log(flags);
  console.log('rollingOffer: ', rollingOffer);
  console.log('winterLaunch: ', winterLaunch);

  const updateContext = (locale: string) => {
    if (ldClient) {
      ldClient.identify({
        kind: 'user',
        key: '456456',
        name: 'Holger Crank',
        email: 'holgercrank@gmail.com',
        locale: locale,
      });
    }
  };

  return (
    <>
      <div style={uiContainer}>
        <h3>Standard boolean flags on/ off for all locale's</h3>
        <Feature feature="Silver Deal" flag={silverDealBanner} />
        <Feature feature="New Carousel" flag={newCarousel} />
        <Feature feature="Enable Header" flag={enableNewHeader} />
      </div>
      <div style={uiContainer}>
        <h3>Mini Basket - (boolean flag on/ off)</h3>
        {miniBasket ? (
          <div style={bgGreen}>Mini Basket: Active</div>
        ) : (
          <div style={bgRed}>Mini Basket: Inactive</div>
        )}
      </div>
      <div style={uiContainer}>
        <h3>
          Market specific - (boolean flag on for the UK only)/ rollingOffer
        </h3>
        {rollingOffer ? (
          <div style={bgGreen}>Active for the UK</div>
        ) : (
          <div style={bgRed}>Inactive for DE and FR</div>
        )}
      </div>
      <div style={uiContainer}>
        {winterLaunch && (
          <>
            <h3>Winter Launch - (Custom/ Multivariate flag)</h3>
            {winterLaunch.locale && winterLaunch.active ? (
              <span style={bgGreen}>Enabled - {winterLaunch.locale}</span>
            ) : (
              <span style={bgRed}>Disabled - {winterLaunch.locale}</span>
            )}
          </>
        )}
        <hr style={{ margin: '20px 0 0 0' }} />
        <h3>
          Custom/ Multivariate flags with different rules for for UK, DE and FR.
        </h3>
        <button
          onClick={() => updateContext('DE')}
          style={{ padding: '10px', marginRight: '10px' }}
        >
          Update locale to [DE]
        </button>
        <button
          onClick={() => updateContext('FR')}
          style={{ padding: '10px', marginRight: '10px' }}
        >
          Update locale to [FR]
        </button>
        <button onClick={() => updateContext('UK')} style={{ padding: '10px' }}>
          Update locale to [UK]
        </button>
      </div>
    </>
  );
};

export default ControlPanel;
