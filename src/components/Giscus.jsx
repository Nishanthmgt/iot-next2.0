import React, { useEffect, useRef } from 'react';

const Giscus = ({ theme }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Clean up previous giscus instance if any
        const existingScript = document.getElementById('giscus-script');
        if (existingScript) existingScript.remove();

        const iframe = document.querySelector('iframe.giscus-frame');
        if (iframe) iframe.remove();

        const script = document.createElement('script');
        script.id = 'giscus-script';
        script.src = 'https://giscus.app/client.js';

        // These attributes should be replaced with the user's specific IDs
        script.setAttribute('data-repo', 'Nishanthmgt/iot-next2.0');
        script.setAttribute('data-repo-id', 'R_kgDOQtCpgw');
        script.setAttribute('data-category', 'General');
        script.setAttribute('data-category-id', 'DIC_kwDOQtCpg84C0Qxy');

        script.setAttribute('data-mapping', 'pathname');
        script.setAttribute('data-strict', '0');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-input-position', 'bottom');
        script.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
        script.setAttribute('data-lang', 'en');
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;

        containerRef.current.appendChild(script);
    }, [theme]);

    return (
        <div style={{
            marginTop: '4rem',
            padding: '2rem',
            background: 'rgba(var(--primary-rgb), 0.02)',
            borderRadius: '2rem',
            border: '1px solid var(--border)'
        }}>
            <div ref={containerRef} className="giscus" />
        </div>
    );
};

export default Giscus;
