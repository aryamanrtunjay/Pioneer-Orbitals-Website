'use client';

import React from 'react'
import AccordionItem from './AccordionItem'

export default function Features() {

    const [open, setOpen] = React.useState(false);

    const toggle = (index) => {
        if(open === index) {
            return setOpen(null);
        }

        setOpen(index);
    }

    const accordionData = [
        {
            id: 1,
            title: "Affordable Launch Solutions",
            content: "We understand the budget constraints many companies and researchers face when accessing space. That’s why Pioneer Orbitals focuses on offering competitively priced launch solutions, ensuring that even small-scale missions have the opportunity to reach orbit without breaking the bank."
        },
        {
            id: 2,
            title: "Reliable and Flexible Service",
            content: "Pioneer Orbitals is dedicated to providing dependable and flexible launch services. Whether you need a precise launch schedule or the ability to adapt to changing payload needs, we work with you to ensure your mission launches smoothly and successfully."
        },
        {
            id: 3,
            title: "Innovation and Reusability",
            content: "Our focus on reusability and cutting-edge technology sets us apart in the industry. By developing rockets that can be reused multiple times, we reduce costs and environmental impact while pushing the boundaries of what’s possible in space exploration."
        }
    ]

    return (
        <section className="h-screen grid place-items-center">
            <div className="px-[40px] max-w-[800px]">
                {accordionData.map((data, index) => {
                    return <AccordionItem key={index} open={index === open} title={data.title} content={data.content} toggle={() => toggle(index)}/>
                })}
            </div>
        </section>
    )
}
