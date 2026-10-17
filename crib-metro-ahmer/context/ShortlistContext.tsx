import React, {createContext, useContext, useMemo, useState} from 'react';

type ShortlistValue = {ids:string[]; toggle:(id:string)=>void; has:(id:string)=>boolean};
const ShortlistContext = createContext<ShortlistValue | undefined>(undefined);

export function ShortlistProvider({children}:{children:React.ReactNode}) {
  const [ids,setIds]=useState<string[]>([]);
  const toggle=(id:string)=>setIds(current=> current.includes(id) ? current.filter(x=>x!==id) : [...current,id]);
  const value=useMemo(()=>({ids,toggle,has:(id:string)=>ids.includes(id)}),[ids]);
  return <ShortlistContext.Provider value={value}>{children}</ShortlistContext.Provider>;
}

export function useShortlist(){
  const context=useContext(ShortlistContext);
  if(!context) throw new Error('useShortlist must be used inside ShortlistProvider');
  return context;
}
