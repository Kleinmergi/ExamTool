import { videos } from '@/lib/mock-data';
export async function searchVideos(query:string){
  if(!process.env.YOUTUBE_API_KEY) return videos.map(v=>({...v,search_query:query}));
  return videos;
}
