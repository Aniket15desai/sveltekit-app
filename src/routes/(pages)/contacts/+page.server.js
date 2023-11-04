import { z } from "zod";
import { GOOGLE_FORM } from "$env/static/private";

const FormSchema = z.object({
    Fname: z
        .string({ required_error: "First Name is required" })
        .min(1, { message: "Name is required" })
        .max(64, { message: "Name must be less than 64 characters" })
        .trim(),
    Lname: z.string().trim(),
    email: z
        .string({ required_error: "Email is required" })
        .min(1, { message: "Email is required" })
        .max(64, { message: "Email must be less than 64 characters" })
        .trim(),
    comments: z
        .string({ required_error: "Name is required" })
        .min(1, { message: "Message is required" })
        .max(200, { message: "Message must be less than 200 characters" })
        .trim(),
});

export const actions = {
    default: async ({ request }) => {
        const formData = Object.fromEntries(await request.formData());
        console.log(formData);

        try {
            const result = await FormSchema.parse(formData);
            console.log("Success");
            console.log(result);
            if (result.Fname && result.email && result.comments) {
                const preFilledLink = `${GOOGLE_FORM}?usp=pp_url&entry.652637537=${result.Fname}+${result.Lname}&entry.84345763=${result.email}&entry.337229561=${result.comments}&submit=Submit`;
                const res = await fetch(preFilledLink);
                if (res) {
                    return {
                        success: true,
                        message: "Form is submitted",
                    };
                }
            }
        } catch (err) {
            const { fieldErrors: errors } = err.flatten();
            const { ...rest } = formData;
            console.log(err)
            return {
                data: rest,
                errors,
            };
        }
    },
};
