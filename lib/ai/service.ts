export async function generateSolutionDraft(taskTitle:string){
  if(!process.env.OPENAI_API_KEY) return `## KI-Entwurf (Mock)\nLösungsstruktur für: ${taskTitle}`;
  return 'OPENAI integration placeholder';
}
