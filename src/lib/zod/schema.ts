import { z } from 'zod';





export const themes = ['light', 'dark'] as const;
export const languages = ['en', 'es', 'fr'] as const;
export const allergies = ['peanuts', 'dairy', 'gluten', 'soy', 'shellfish'] as const;

export const schema = z.object({
	title: z.string().min(5, 'The title is too short.').max(250, 'The title is too long.'),
	content: z.string().min(20, 'The content is too short.'),
	language: z.string().default('london'),
	
});


export const userRegisterSchema = z.object({
	name: z.string().trim().min(2, 'Your username is too short.').max(250, 'Your username is too long.'),
	meterno: z.string().min(4, 'The meter no is too short').max(8, 'The meter no is too long'),
	address: z.string(),
	january: z.number(),
	february: z.number(),
	march: z.number(),
	april: z.number(),
	may: z.number(),
	june: z.number(),
	july: z.number(),
	august: z.number(),
	september: z.number(),
	october: z.number(),
	november: z.number(),
	december: z.number(),
});

export const userLoginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6, 'Your password is too short.')
});