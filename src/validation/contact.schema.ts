import { z } from "zod";

//Regex
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Function sanitize
export function sanitize(input: string) {
  return input
    .trim()
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

//Schema
export const contactSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .regex(nameRegex, "Invalid first name")
    .transform(sanitize),

  lastName: z
    .string()
    .min(1)
    .max(20)
    .regex(nameRegex, "Invalid last name")
    .transform(sanitize),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .regex(emailRegex, "Invalid email adress"),

  message: z
    .string()
    .min(10)
    .max(1000)
    .refine((val) => !val.includes("<") && !val.includes(">"), {
      message: "HTML not allowed",
    }),
});
