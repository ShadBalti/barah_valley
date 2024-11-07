// app/about/page.js
import React from 'react';

const content = `
  ## About Barah Valley
  Barah Valley, located in the beautiful Gilgit-Baltistan region, is known for its rich history and vibrant culture.
  
  The valley has been home to various civilizations, each leaving its mark through language, art, and traditions. 
  Explore the cultural heritage of Barah Valley, where ancient customs blend with natural beauty to create a unique experience.
`;

export default function AboutPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About Barah Valley</h1>
      <section dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

