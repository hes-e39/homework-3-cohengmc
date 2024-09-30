import colors from './colors.json';

function ColorObject({ colorInfo }) {
    return (
        <div
            style={{
                color: `#${colorInfo.hex}`,
            }}
        >
            {colorInfo.name}
        </div>
    );
}

function ColorObjectWithComp({ colorInfo }) {
    return (
        <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ width: '128px' }}>
                <ColorObject colorInfo={colorInfo} />
            </div>
            <div>Complimentary: </div>
            <div style={{ display: 'flex', gap: '12px' }}>
                {colorInfo.comp.map(i => {
                    return (
                        <div key={i.hex}>
                            <ColorObject colorInfo={i} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const App = () => {
    return (
        <div>
            {colors.map(i => {
                return (
                    <div key={i.hex}>
                        <ColorObjectWithComp colorInfo={i} />
                    </div>
                );
            })}
        </div>
    );
};

export default App;
