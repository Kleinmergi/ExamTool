export interface ParsedPdf { text:string; pageCount:number }
export async function parsePdf(_file:File):Promise<ParsedPdf>{ return {text:'Mock parsed text',pageCount:1}; }
export function extractTasks(parsed:ParsedPdf){ return [{title:'Extrahierte Aufgabe',statement:parsed.text.slice(0,120)}]; }
export function classifyTask(){ return {tags:['mock'],topic:'Unklassifiziert',difficulty:'unknown'}; }
