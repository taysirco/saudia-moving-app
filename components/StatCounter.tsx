'use client'
import Script from 'next/script'

export default function StatCounter() {
  return (
    <>
      <Script strategy="lazyOnload" id="statcounter-config">
        {`
          var sc_project=13087897; 
          var sc_invisible=1; 
          var sc_security="5d107ca6"; 
        `}
      </Script>
      <Script
        strategy="lazyOnload"
        src="https://www.statcounter.com/counter/counter.js"
        async
        id="statcounter-script"
      />
      <noscript>
        <div className="statcounter">
          <a
            title="Web Analytics"
            href="https://statcounter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="statcounter"
              src="https://c.statcounter.com/13087897/0/5d107ca6/1/"
              alt="Web Analytics"
              referrerPolicy="no-referrer-when-downgrade"
              loading="lazy"
            />
          </a>
        </div>
      </noscript>
    </>
  )
} 