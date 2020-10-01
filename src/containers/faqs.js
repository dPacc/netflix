import React from 'react';
import faqsData from '../fixtures/faqs';
import { Accordion, OptForm } from '../components';

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map((item) => ( 
                <Accordion.Item>
                    <Accordion.Header key={item.id}>{item.header}</Accordion.Header>
                    <Accordion.Body key={item.id}>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <Accordion.Item />

            <OptForm>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
                <OptForm.Break />
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>GET STARTED</OptForm.Button>
            </OptForm>
        </Accordion>
    );
}