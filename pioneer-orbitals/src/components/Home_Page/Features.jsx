'use client';

import React from 'react'
import AccordionItem from './AccordionItem'
import Button from '../Button';
import FeaturesImage from '@/images/FeaturesImage.png'
import Image from 'next/image'

export default function Features() {

    const [open, setOpen] = React.useState(false);
    const [isDesktop, setIsDesktop] = React.useState(true);

    const checkWindowSize = () => {
        let windowWidth;
        if(typeof window !== "undefined") {
        windowWidth = window.innerWidth
        }

        if (windowWidth > 1024) {
        setIsDesktop(true)
        } else {
        setIsDesktop(false)
        }
    }

    React.useEffect(() => {
        function handleResize() {
        checkWindowSize();
        }
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    React.useEffect(() => {
        checkWindowSize()
    }, [])

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
        <div className="flex items-center mx-[50px] mb-[100px] justify-center gap-10">
            {isDesktop && <div className="rounded-[50px]">
                <Image 
                    src={FeaturesImage} 
                    alt="Image of Rocket Launch" 
                    className="h-auto object-cover rounded-[70px]"
                />
            </div>}
            <section className="h-full flex flex-col justify-center items-center gap-5">
                <h1 className="text-[40px] lg:text-[80px] text-center">Why Choose Us?</h1>
                <div className="px-[40px] max-w-[800px] mb-5">
                    {accordionData.map((data, index) => {
                        return <AccordionItem key={index} open={index === open} title={data.title} content={data.content} toggle={() => toggle(index)}/>
                    })}
                </div>
                <Button href="/#bookings" variant="outline" className="h-15 w-full max-w-[720px] text-xl text-center mt-5">Reserve your Flight</Button>
            </section>
        </div>
    )
}
