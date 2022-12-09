import React from 'react';
import { Redirect } from '@docusaurus/router';

export default function Home(): JSX.Element {
  return (
    <div>
      <Redirect to="docs/start"></Redirect>
      <p>Redirecting...</p>
      <p>If you're stuck on this page, your web browser is probably not supported. You can get to the main page with <a href='docs/start'>this link</a>.</p>
    </div>
  );
}
