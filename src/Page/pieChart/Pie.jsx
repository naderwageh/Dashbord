
import { Box, useTheme } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';
import PropTypes from 'prop-types';
const data = [
    {
        id: "haskell",
        label: "haskell",
        value: 250,
        color: "hsl(42, 70%, 50%)"
    },
    {
        id: "erlang",
        label: "erlang",
        value: 250,
        color: "hsl(308, 70%, 50%)"
    },
    {
        id: "php",
        label: "php",
        value: 250,
        color: "hsl(87, 70%, 50%)"
    },
    {
        id: "css",
        label: "css",
        value: 250,
        color: "hsl(221, 70%, 50%)"
    },
    {
        id: "React",
        label: "React",
        value: 250,
        color: "hsl(333, 70%, 50%)"
    }
];

const Pie = ({ isDahbord = false }) => {
    const theme = useTheme();

    return (
        <Box sx={{ height: isDahbord ? "220px" : "75vh" }}>
       
            <ResponsivePie
                data={data}
                margin={isDahbord?{ top: 10, right: 0, bottom: 10, left: 0 }:{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={ isDahbord?0.8:0.5}
                padAngle={0.7}
                cornerRadius={3}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor={theme.palette.text.primary}
                arcLabelsSkipAngle={10}
                enableArcLabels={ isDahbord?false:true}
                enableArcLinkLabels={ isDahbord?false:true}
                arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: theme.palette.text.primary,
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: theme.palette.text.primary,
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={

                    isDahbord ? [] :

                        [
                            {
                                anchor: 'bottom',
                                direction: 'row',
                                justify: false,
                                translateX: 0,
                                translateY: 56,
                                itemsSpacing: 0,
                                itemWidth: 100,
                                itemHeight: 18,
                                itemTextColor: '#999',
                                itemDirection: 'left-to-right',
                                itemOpacity: 1,
                                symbolSize: 18,
                                symbolShape: 'circle',
                                effects: [{
                                    on: 'hover',
                                    style: {
                                        itemTextColor: theme.palette.text.primary
                                    }
                                }]
                            }
                        ]}
            />
        </Box>
    );
};

Pie.propTypes = {
    isDahbord: PropTypes.bool,
};

export default Pie;