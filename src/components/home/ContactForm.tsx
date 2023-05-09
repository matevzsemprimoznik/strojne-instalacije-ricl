'use client'
import React, {FC, FormEvent, useState} from "react";
import sendMessage from "@/lib/contact";
import {dictionaryType, localeType} from "@/types";
import {useReCaptcha} from "next-recaptcha-v3";
import Link from "next/link";

interface ContactFormProps {
    dict: dictionaryType
    locale: localeType
}
const ContactForm:FC<ContactFormProps> = ({dict, locale}) => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [accepted, setAccepted] = useState(false);
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { executeRecaptcha } = useReCaptcha();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if(!accepted){
            return setError(dict['contact.form.response.error-privacy'])
        }

        setLoading(true)
        setResponse(null)
        setError(null)
        try{

            if (!executeRecaptcha) {
                setResponse(dict['contact.form.response.error-recaptha'])
                return;
            }
            const token = await executeRecaptcha("contact_form");
            await sendMessage({email, subject, message, token, accepted});
            setResponse(dict['contact.form.response.success'])
            setLoading(false)
            setError(null)
        }
        catch (e: any) {
            const key = 'contact.form.response.' + e?.response?.data?.messageKey || 'error';
            setLoading(false)
            setResponse(null)
            //@ts-ignore
            setError(dict[key])
            return;
        }
    }

    return <form>
        <div className='flex flex-col'>
            <label htmlFor='email' className='font-bold'>{dict['contact.form.email']}</label>
            <input type='email' id='email' className='rounded-lg bg-custom-light-blue p-4 mt-3'
                   placeholder={dict['contact.form.email.placeholder']} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className='flex flex-col mt-7'>
            <label htmlFor='subject' className='font-bold'>{dict['contact.form.subject']}</label>
            <input type='subject' id='subject' className='rounded-lg bg-custom-light-blue p-4 mt-3'
                   placeholder={dict['contact.form.subject.placeholder']} onChange={e => setSubject(e.target.value)}/>
        </div>
        <div className='flex flex-col mt-7'>
            <label htmlFor='message' className='font-bold'>{dict['contact.form.message']}</label>
            <textarea rows={4} className='resize-none rounded-lg bg-custom-light-blue p-4 mt-3'
                      placeholder={dict['contact.form.message.placeholder']} onChange={e => setMessage(e.target.value)}/>
        </div>
        <div className='mt-7 flex flex-row'>
            <input onChange={e => setAccepted(e.target.checked)} type='checkbox' id='gdpr' className='mr-2 mt-0.5 w-5 h-5'/>
            <label htmlFor='gdpr'>{dict['contact.form.gdpr.1']}<Link className='text-custom-blue underline' href={dict['link.privacy.value']}>{dict['contact.form.gdpr.2']}</Link>{dict['contact.form.gdpr.3']}</label>
        </div>

        <div className='flex justify-between items-center flex-row mt-10'>
            {!error && !response && <p></p>}
            {response && <p className='text-custom-blue font-bold mr-4'>{response}</p>}
            {error && <p className='text-yellow-400 font-bold mr-4'>{error}</p>}
            <button type='submit' onClick={handleSubmit} className='w-[100px] min-w-[100px] h-[40px] sm:w-[150px] sm:min-w-[150px] sm:h-[50px] bg-custom-blue text-white text-lg font-bold flex items-center justify-center rounded-xl'>
                {!loading ? dict['contact.form.button'] : <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
            </button>
        </div>
    </form>
}
export default ContactForm;