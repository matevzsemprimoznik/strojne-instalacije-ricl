'use client'
import React, {FormEvent, useCallback, useState} from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import sendMessage from "@/lib/contact";
import {AxiosResponse} from "axios";
import i18nStore from "@/store/i18n.store";

const ContactForm = () => {
    const dict = i18nStore.getState().dictionary;
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { executeRecaptcha } = useGoogleReCaptcha();


    const handleSubmit = async (e: FormEvent) => {
        setLoading(true)
        setResponse(null)
        setError(null)
        e.preventDefault();
        try{
            if (!executeRecaptcha) {
                setResponse('Napaka pri preverjanju reCAPTCHA. Poskusite znova.')
                return;
            }
            const token = await executeRecaptcha("contact_form");
            const response:AxiosResponse = await sendMessage({email, subject, message, token});
            setResponse(response.data)
            setLoading(false)
            setError(null)
        }
        catch (e) {
            setLoading(false)
            setResponse(null)
            setError('Napaka pri pošiljanju sporočila. Poskusite znova.')
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

        <div className='flex justify-between items-center flex-row mt-10'>
            {!error && !response && <p></p>}
            {response && <p className='text-custom-blue font-bold mr-4'>{response}</p>}
            {error && <p className='text-yellow-500 font-bold mr-4'>{error}</p>}
            <button type='submit' onClick={handleSubmit} className='w-[150px] min-w-[150px] h-[50px] bg-custom-blue text-white text-lg font-bold flex items-center justify-center rounded-xl'>
                {!loading ? dict['contact.form.button'] : <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
            </button>
        </div>
    </form>
}
export default ContactForm;