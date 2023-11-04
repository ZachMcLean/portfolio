"use server";
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	console.log("running on server");
	// console.log(formData.get("senderEmail"));
	// console.log(formData.get("senderMessage"));
	const senderEmail = formData.get("senderEmail");
	const senderMessage = formData.get("senderMessage");

	// when writing the email.send, typescript got upset bc the message could be null
	// it also thought the message could be a file. this condition ensures an error is thrown if
	// those conditions are met. Typescript can tell we did this and no longer gives warning
	// all of this despite us adding 'required' to the html form input and text-area lol
	if (!validateString(senderEmail, 500)) {
		return {
			error: "Invalid sender email",
		};
	}
	if (!validateString(senderMessage, 5000)) {
		return {
			error: "Invalid sender email",
		};
	}
	let data;
	try {
		data = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: "zmclean11@gmail.com",
			subject: "Message from contact form",
			reply_to: senderEmail as string,
			// text: senderMessage as string,
			react: React.createElement(ContactFormEmail, {
				senderMessage: senderMessage as string,
				senderEmail: senderEmail as string,
			}),
		});
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		};
	}

	return {
		data,
	};
};
