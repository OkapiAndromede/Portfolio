import { Resend } from "resend";
import { contactSchema } from "./contact.schema.js";

export default async function handler(req: any, res: any) {
  const resend = new Resend(process.env.RESEND_API_KEY);
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
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "neal.henri.muller@gmail.com",
      subject: `New message from ${firstName} ${lastName}`,
      replyTo: email,
      html: `
            <h3> New contact message </h3>
            <p> <strong> Name:</strong> ${firstName} ${lastName} </p>
            <p> <strong> Email:</strong> ${email} </p>
            <p> <strong> Message:</strong> ${message} </p>
            `,
    });
    if (error) {
      console.error("Resend Error:", error);
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: "Email sending failed" });
  }
}
