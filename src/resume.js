import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Resume = () => {
    return (

        <>
            <div>
                <h4>Experience</h4>
                <h5><a href='#' download>Download Resume</a></h5>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Guaranteed Rate, Associate Underwriter - Remote</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h4>May 2021 - Feburary 2022</h4>
                        <Typography>
                            Performed analysis of 2-3 loans per day for completeness and accuracy, analyzing credit, mortgage applications, income documents, title, payoff, and appraisal. Responsible for underwriting Conventional Loans. Balanced the need for loan-volume growth with the equally important necessity of optimum underwriting quality to measure risk while maximizing profitability. Leveraged knowledge of loan products to help restructure turned-down loans for subsequent approvals
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Ole Miss Athletics, Oxford Ms - Communications Intern</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h4>August 2017 - March 2019</h4>
                        <Typography>
                            Maintain and manage media lists and update as necessary. Transcribe press conferences. Assist with fulfillment and distribution of media credentials/parking passes - Assist in set up of press box. Operate Media Will Call. Assist with postgame press conference
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>

    );
}
export default Resume;