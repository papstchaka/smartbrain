import React from 'react';
import { vmin } from 'react-native-expo-viewport-units'

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
        return size;
    }
    
    return (
            <div className="Tilt-inner pa2 scoreboard br2 shadow-1 gradient-border" style={useWindowSize()}>
                <p className='mt0 mb1 myp'>Scoreboard: </p>
                {
                    scoreboard.map((entries) => {
                        return <p className='mb0 myp'>{entries.name}: {entries.count}</p>
                    })
                }
            </div>
    );
}

export default ScoreBoard;