'use client'
import Script from 'next/script'

export default function StatCounter() {
  return (
    <>
      <Script strategy="afterInteractive">
        {`
          var sc_project=13087897; 
          var sc_invisible=1; 
          var sc_security="5d107ca6"; 
        `}
      </Script>
      <Script
        strategy="afterInteractive"
        src="https://www.statcounter.com/counter/counter.js"
        async
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
            />
          </a>
        </div>
      </noscript>
    </>
  )
} 