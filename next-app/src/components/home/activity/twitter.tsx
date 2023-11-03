import React, { useEffect, useRef } from 'react';



type Props = {
    id: string;
}

export default function Twitter(props: Props){
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.charset = 'utf-8';
        document.body.appendChild(script);

        return () => {
        document.body.removeChild(script);
        };
    }, []);
    return (
        <a 
            className="twitter-timeline" 
            href="https://twitter.com/PHARMA_W0RKS?ref_src=twsrc%5Etfw" 
            target="_blank" rel="noopener noreferrer" 
            > 
            Tweets by PHARMA_W0RKS 
        </a>
    );
};




const generateEmbedHtml = ((props: Props) =>{
    if (!/^\d+$/u.test(props.id)) {
        throw new Error(`Invalid tweet ID: ${props.id}`);
    }
    
    return `<blockquote class="twitter-tweet"><a href="https://twitter.com/i/status/${props.id}"></a></blockquote>`;
});
// import React, { useEffect } from 'react';

// export default function Twitter() {
//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = 'https://platform.twitter.com/widgets.js';
//         script.async = true;
//         script.charset = 'utf-8';
//         document.body.appendChild(script);
    
//         return () => {
//           document.body.removeChild(script);
//         };
//       }, []);
    
//       return (
//        <a 
//          className="twitter-timeline" 
//          href="https://twitter.com/PHARMA_W0RKS?ref_src=twsrc%5Etfw" 
//          target="_blank" rel="noopener noreferrer" 
//         > 
//         Tweets by PHARMA_W0RKS 
//        </a>
//       );
// }
