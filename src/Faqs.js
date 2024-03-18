import React from "react";
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Faqs = () => {
    return (
        <>
            <div className="main_inner_pages">
                <img src="/img/breadcrumb.webp" alt="breadcrumb-image" />
                <div className="container">
                    <div className="row">
                        <div className="inner">
                            <ul>
                                <li><Link to="/">home</Link></li>
                                <li><span>Faq's</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq_main" data-aos="zoom-in">
                <div className="container">
                    <div className="inner">
                        <div className="faq_title">
                            <h2>Faq's</h2>
                        </div>
                    </div>

                    <div>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography>Q1. What is lorem ipsum? </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel2a-content"
                                id="panel2a-header">
                                <Typography>Q2.Why do we use it?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel2a-content"
                                id="panel2a-header">
                                <Typography>Q3. Where does it come from?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel2a-content"
                                id="panel2a-header">
                                <Typography>Q4. Where can I get some?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel2a-content"
                                id="panel2a-header">
                                <Typography>Q5. What is lorem Ipsum?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel2a-content"
                                id="panel2a-header">
                                <Typography>Q6. Where can i get some?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel2a-content"
                                id="panel2a-header">
                                <Typography>Q7. Where does it come from?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Faqs;