import React from 'react';

// Helper function to calculate vmin value
function vmin(value) {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    return (value / 100) * Math.min(vw, vh);
}

function ScoreBoard({ scoreboard }) {

    function useWindowSize() {
        const [size, setSize] = React.useState({ fontSize: vmin(5) });
        React.useLayoutEffect(() => {
          function updateSize() {
            setSize({ fontSize: vmin(10) / (scoreboard.length + 1) });
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
        }, []);
        if (size.fontSize > 18.05) {
            size.fontSize = 18.05;
        }
        return size;
    }
    
    return (
            <div className="Tilt-inner pa2 scoreboard br2 shadow-1 gradient-border" style={useWindowSize()}>
                <p className='mt0 mb1'>Scoreboard: </p>
                {
                    scoreboard.map((entries, index) => {
                        return <p key={index} className='mb0'>{entries.name}: {entries.count}</p>
                    })
                }
            </div>
    );
}

export default ScoreBoard;