import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataSources = [
    "AtomicCards.json",
    "AllPrintings.json"
]

/*
const xAxisOptions = {
    "AtomicCards.json": [
        "Mana Value",
        "Legality",
        "Power",
        "Toughness",
        "Loyalty",
        "Supertype",
        "Color Identity",
        "Color"
    ]
}
*/

function Plot(props) {
    return (
        <LineChart
            width={800}
            height={400}
            data={loadData(this.props.data)}
        >
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
            <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
    )
}

function SeriesSettings(props) {
    return (
        <div className="series-setting-container">
            <p className="series-setting-title">Series1</p>
            <p>Choice1</p>
            <p>Choice2</p>
        </div>
    )
}

function DataSourcePicker(props) {
    return (
        <div class="data-source-picker-container">
            <label for="data-source-dropdown">Data Source:</label>
            <select name="data-source-dropdown" id ="data-source-picker">
                {
                    dataSources.map((item, i) => <option key={i} value={item}>{item}</option>)
                }
            </select>
        </div>
    )
}

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="header">
                    <h1>MTG Plotter</h1>
                </div>
                <div className="plot-container">
                    <div className="plot-panel">
                        <Plot />
                    </div>
                    <div className="plot-settings-panel">
                        <SeriesSettings />
                    </div>
                </div>
                <div className="configuration-container">
                    <DataSourcePicker />
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
<App />,
document.getElementById('root')
);

//TODO generatePlotData()