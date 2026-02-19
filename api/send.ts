import { Resend } from "resend";
import { contactSchema } from "../validation/contact.schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  //1.Restriction de la méthode
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    //2. Validation avec Zod
    const parsed = contactSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid form data" });
    }
    //3. Extraction des données validées et nettoyées
    const { firstName, lastName, email, message } = parsed.data;

    //4. Envoi de l'email via Resend
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "neal.henri.dev@gmail.com",
      subject: `New message from ${firstName} ${lastName}`,
      replyTo: email,
      html: `
            <h3> New contact message </h3>
            <p> <strong> Name:</strong> ${firstName} ${lastName} </p>
            <p> <strong> Email:</strong> ${email} </p>
            <p> <strong> Message:</strong> ${message} </p>
            `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Email sending failed" });
  }
}
