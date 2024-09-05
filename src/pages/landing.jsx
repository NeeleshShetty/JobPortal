import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import companies from '../data/companies.json'
import faqs from '../data/faq.json'
import Autoplay from 'embla-carousel-autoplay'
const LandingPage = () => {
  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
      <section className='text-center '>
      <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            and get
            <img
              src="/logo.png"
              className="h-14 sm:h-24 lg:h-32"
              alt="Hirrd Logo"
            />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className='flex gap-6 justify-center'>
       <Link to={'/jobs'}>
       <Button variant="blue" size="xl">Find Jobs</Button>
       </Link>
       <Link to={'/post-job'}>
       <Button variant="destructive"  size="xl">Post a Job</Button>
       </Link>
      </div>

       {/* carousel */}
       <Carousel  plugins={[Autoplay({
          delay: 2000,
        }),]} className="w-full py-10">
      <CarouselContent className="flex gap-5 sm:gap-20 items-center">
        {companies.map(({name,id,path})=>{
          return (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
              <img src={path} alt={name} className='h-9 sm:h-14 object-contain'/>
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>

    
        <img src="/banner.jpeg" alt="banner " />

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      
        <Card>
  <CardHeader>
    <CardTitle>For Job Seekers</CardTitle>
    <CardDescription>Search and apply for jobs, track application  and more</CardDescription>
  </CardHeader>
  
</Card>

<Card>
  <CardHeader>
    <CardTitle>For Employers</CardTitle>
    <CardDescription>Post jobs,manage applications and find the best candidates</CardDescription>
  </CardHeader>
  
</Card>
      </section>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map(({question,answer},index)=>(
          <AccordionItem value={`item1-${index+1}`} key={index}>
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent>
          {answer}
        </AccordionContent>
      </AccordionItem>
        ))}
    </Accordion>

    </main>
  )
}

export default LandingPage