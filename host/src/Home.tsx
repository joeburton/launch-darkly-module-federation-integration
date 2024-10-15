import React from 'react';

const item = {
  border: '1px solid green',
  borderRadius: '4px',
  padding: '0.5rem',
  margin: '10px',
  listStyle: 'none',
};

export function Home() {
  return (
    <div style={item}>
      <h3>POC</h3>
      <ul>
        <li>Two Micro Frontends, Host and Dashboard</li>
        <li>Launch Darkly initialised in the Host MFE</li>
        <li>Shared instance of LD between Host and Dashboard MFE</li>
        <li>Feature flags retrieved from LD in the Dashboard MFE</li>
        <li>Configuration of LD shared between MFE's using LDProvider</li>
      </ul>
    </div>
  );
}
