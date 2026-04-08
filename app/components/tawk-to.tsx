import Script from "next/script";

const TAWK_PROPERTY_ID = "678653253a842732606e9512";
const TAWK_WIDGET_ID = "1ihib9j17";
const TAWK_EMBED_URL = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;

export function TawkToScript() {
  return (
    <Script id="tawkto-embed" strategy="lazyOnload">
      {`
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src="${TAWK_EMBED_URL}";
          s1.charset="UTF-8";
          s1.setAttribute("crossorigin","*");
          s0.parentNode.insertBefore(s1,s0);
        })();
      `}
    </Script>
  );
}
