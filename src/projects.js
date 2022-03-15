import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Selfie from './imgs/IMG_2039.jpeg'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Projects() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>

            <h4>Projects</h4>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 700 }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="Meal List" {...a11yProps(0)} />
                    <Tab label="Billboard Scraper" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <img className="project-picture" src={Selfie} alt="selfie" />
                    <p>Used Bootstrap, Mongoose, and Express to create a full-stack app with authentication.
                        “Meal List” is an app that lets users keep track of the restaurants they go to and what they get to eat/drink.</p>
                    <a href='#'>Launch Project</a>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <img className="project-picture" src={Selfie} alt="selfie" />
                    <p>Used Python to build an web scraper that scrapes Billboard's music chart.</p>
                    <a href='#'>Launch Project</a>
                </TabPanel>
            </Box>
        </>
    );
}

