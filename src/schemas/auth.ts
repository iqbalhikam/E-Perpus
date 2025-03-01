import { z } from "zod";

export const nameSchema = z.string({message: "Nama wajib di isi!"}).min(1,{message: "Nama wajib di isi!"});
export const emailSchema = z.string({message: "Email wajib di isi!"}).email({message: "Email tidak valid!"});
export const passwordSchema = z.string({message: "Password wajib di isi!"}).min(8,{message: "Password minimal 8 karakter!"}).regex(/[A-Z]/, {message: "Password harus mengandung huruf besar!"}).regex(/[a-z]/, {message: "Password harus mengandung huruf kecil!"}).regex(/[0-9]/, {message: "Password harus mengandung angka!"});
