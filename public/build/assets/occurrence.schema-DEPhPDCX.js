import { a as string, i as object, n as _instanceof, r as array, t as _enum } from "./schemas-D1AZt847.js";
//#region resources/js/pages/occurrences/schemas/occurrence.schema.ts
var occurrenceSchema = object({
	title: string().min(3, "O título deve ter pelo menos 3 caracteres"),
	description: string().min(10, "A descrição deve ter pelo menos 10 caracteres"),
	occurred_at: string().min(1, "A data é obrigatória"),
	severity: _enum([
		"low",
		"medium",
		"high"
	]),
	images: array(_instanceof(File)).max(10, "Máximo de 10 imagens").default([])
});
//#endregion
export { occurrenceSchema as t };
