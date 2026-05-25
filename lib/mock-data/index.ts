import { addDays, formatISO } from 'date-fns';
import type { PdfDocument, ReviewSchedule, Task, TheoryPage, VideoResource } from '@/types/domain';

export const tasks: Task[] = [
  {id:'t1',title:'Laufzeitanalyse verschachtelter Algorithmus',statement:'Analysieren Sie die Laufzeit...',subject_area:'theoretical_cs',topic:'O-Notation',exam_year:2022,exam_season:'spring',points:8,difficulty:'medium',status:'needs_review',tags:['Big-O','Analyse']},
  {id:'t2',title:'Dijkstra auf Graph',statement:'Führen Sie Dijkstra auf dem gegebenen Graphen aus...',subject_area:'theoretical_cs',topic:'Graphalgorithmen',exam_year:2023,exam_season:'autumn',points:12,difficulty:'hard',status:'in_progress',tags:['Dijkstra','Kürzeste Wege']},
  {id:'t3',title:'SQL GROUP BY HAVING',statement:'Formulieren Sie SQL-Abfragen...',subject_area:'databases_software',topic:'SQL',exam_year:2021,exam_season:'spring',difficulty:'medium',status:'new',tags:['SQL']},
  {id:'t4',title:'ER-Modellierung Klinik',statement:'Erstellen Sie ein ER-Modell...',subject_area:'databases_software',topic:'ER',exam_year:2020,exam_season:'autumn',difficulty:'medium',status:'attempted',tags:['ER','Kardinalität']},
  {id:'t5',title:'Unterrichtsplanung Datenbanken',statement:'Planen Sie eine Unterrichtsstunde...',subject_area:'didactics',topic:'Unterrichtsplanung',exam_year:2024,exam_season:'spring',difficulty:'hard',status:'partially_understood',tags:['Didaktik']},
  {id:'t6',title:'Hefteintrag Datenkapselung',statement:'Formulieren Sie einen Hefteintrag...',subject_area:'didactics',topic:'Hefteintrag',difficulty:'easy',status:'understood',tags:['Datenkapselung']},
  ...Array.from({length:6}).map((_,i)=>({id:`t${i+7}`,title:`Demo Aufgabe ${i+7}`,statement:'Weitere Beispielaufgabe',subject_area:'theoretical_cs' as const,topic:'Sortierverfahren',difficulty:'unknown' as const,status:'new' as const,tags:['Demo']}))
];
export const theoryPages: TheoryPage[] = ['O-Notation','Laufzeitanalyse','Dijkstra','Mergesort','SQL GROUP BY HAVING','ER-Modellierung','Unterrichtsplanung','Datenkapselung'].map((t,i)=>({id:`th${i+1}`,slug:t.toLowerCase().replaceAll(' ','-'),title:t,summary:`Kurzdefinition zu ${t}`,content_markdown:`# ${t}\n\nAusführliche Erklärung, typische Prüfungsfragen, Mini-Beispiele und häufige Fehler.`,topic:t,tags:[t]}));
export const videos: VideoResource[] = Array.from({length:5}).map((_,i)=>({id:`v${i+1}`,title:`Informatik Lernvideo ${i+1}`,channel:'Exam Channel',url:'https://youtube.com/watch?v=demo',duration:'12:34',search_query:'dijkstra algorithmus deutsch'}));
export const pdfs: PdfDocument[] = [1,2,3].map(i=>({id:`p${i}`,title:`Staatsexamen ${2021+i} Frühjahr`,subject_area:'theoretical_cs',exam_year:2021+i,exam_season:'spring',exam_number:`EPN-${i}`,file_url:'#'}));
export const schedules: ReviewSchedule[] = tasks.slice(0,5).map((t,i)=>({id:`r${i+1}`,task_id:t.id,confidence:(i%5)+1,interval_days:[1,2,4,7,14][i%5],last_reviewed_at:formatISO(new Date()),next_review_at:formatISO(addDays(new Date(),i+1)),mistake_categories:['Konzept nicht verstanden'],notes:'Demo'}));
