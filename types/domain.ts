export type SubjectArea = 'theoretical_cs'|'databases_software'|'didactics';
export type TaskStatus = 'new'|'in_progress'|'attempted'|'partially_understood'|'understood'|'exam_ready'|'needs_review';
export type Difficulty = 'easy'|'medium'|'hard'|'unknown';
export type SolutionType='user_solution'|'model_solution'|'ai_draft'|'rubric'|'checklist';
export interface Task { id:string; title:string; statement:string; subject_area:SubjectArea; topic:string; exam_year?:number; exam_season?:'spring'|'autumn'; points?:number; difficulty:Difficulty; status:TaskStatus; tags:string[]; }
export interface TheoryPage { id:string; slug:string; title:string; summary:string; content_markdown:string; topic:string; tags:string[]; }
export interface ReviewSchedule { id:string; task_id:string; confidence:number; interval_days:number; next_review_at:string; last_reviewed_at:string; mistake_categories:string[]; notes:string; }
export interface VideoResource { id:string; title:string; channel:string; url:string; duration:string; search_query:string; rating?:'gut'|'mittel'|'schlecht'; notes?:string; thumbnail_url?:string; }
export interface PdfDocument { id:string; title:string; subject_area:SubjectArea; exam_year:number; exam_season:'spring'|'autumn'; exam_number:string; file_url:string; }
