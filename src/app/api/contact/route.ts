import axios from "axios";
import {ContactMessage} from "@/types";
import {createTransport} from "nodemailer";
import { NextResponse } from 'next/server';

const transporter = createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
})

export async function POST(request: Request) {
    try{
        const data:ContactMessage = await request.json();

        const recaptchaData:any = await axios.post('https://www.google.com/recaptcha/api/siteverify', {secret: process.env.RECAPTCHA_SECRET_KEY, response: data.token }, {headers: {"Content-Type": "application/x-www-form-urlencoded"}})

        if( recaptchaData.data.success == false || recaptchaData.data.score <= 0.5)
            return NextResponse.json({messageKey: 'error-recaptcha'}, {status: 400})

        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)))
            return NextResponse.json({messageKey: 'error-email'}, {status: 400})
        if (data.message == null || data.message.length < 10)
            return NextResponse.json({messageKey: 'error-length'}, {status: 400})
        if(!data.accepted)
            return NextResponse.json({messageKey: 'error-privacy'}, {status: 400})

        const email = {
            to: 'semprimoznik.matevz@gmail.com',
            from: 'semprimoznik.matevz@gmail.com',
            subject: data.subject != null ? data.subject : 'No subject',
            html: `<p><strong>Pošiljatelj: ${data.email}</strong><br/><br/>${data.message}</p>`,
        }

        await transporter.sendMail(email);
        return NextResponse.json({messageKey: 'success'}, {status: 200})
    }
    catch (e){
        console.log(e)
        return NextResponse.json({messageKey: 'error-server'}, {status: 500});
    }
}