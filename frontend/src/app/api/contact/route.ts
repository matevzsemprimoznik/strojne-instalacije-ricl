import sgMail from "@sendgrid/mail";
import {NextResponse} from "next/server";
import axios from "axios";
import {ContactMessage} from "@/types";

sgMail.setApiKey(process.env.SANDGRID_TOKEN || '')

export async function POST(request: Request) {
    try{
        const data:ContactMessage = await request.json();
        console.log(data)

        const recaptchaData:any = await axios.post('https://www.google.com/recaptcha/api/siteverify', `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${data.token}`, {headers: {"Content-Type": "application/x-www-form-urlencoded"}})

        console.log(recaptchaData.score)
        if(recaptchaData.score <= 0.5)
            return new Response('Prišlo je do napake pri izpolnjevanju obrazca. Prosimo poskusite kasneje ali pa nas kontaktirajte na drug način.', {status: 400});

        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)))
            return new Response('Napačen elektronski naslov.', {status:400});
        if (data.message == null || data.message.length < 10)
            return new Response('Sporočilo je prekratko.', {status: 400});

        const email = {
            to: 'semprimoznik.matevz@gmail.com', // Change to your recipient
            from: 'matevz.semprimoznik@student.um.si', // Change to your verified sender
            subject: data.subject != null ? data.subject : 'No subject',
            html: `<p><strong>Pošiljatelj: ${data.email}</strong><br/><br/>${data.message}</p>`,
        }

       await sgMail.send(email)
       return new Response('Uspešno poslano. Odgovorili vam bomo v najkrajšem možnem času.', {status: 200})
    }
    catch (e){
        return new Response('Prišlo je do napake na strežniku. Prosimo poskusite kasneje ali pa nas kontaktirajte na drug način.', {status: 500});
    }
}