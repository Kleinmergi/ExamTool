const map: Record<number, number> = {1:1,2:2,3:4,4:7,5:14};
export function nextInterval(rating:number, hadMistakes:boolean){ const base=map[Math.max(1,Math.min(5,rating))] ?? 4; return hadMistakes?Math.max(1,Math.floor(base/2)):base; }
