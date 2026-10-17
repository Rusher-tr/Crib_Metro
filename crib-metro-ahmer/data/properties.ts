export type Property = {
  id: string;
  title: string;
  area: string;
  city: string;
  category: 'Apartment' | 'House' | 'Studio';
  priceM: number;
  beds: number;
  baths: number;
  sqft: number;
  accent: string;
  tag: string;
  description: string;
};

// Demonstration-only listings and asking prices; not real property offers.
export const properties: Property[] = [
  {id:'m1',title:'Alvigah Apartments Complex',area:'Gulshan-e-Iqbal',city:'Karachi',category:'Apartment',priceM:18.5,beds:2,baths:2,sqft:1120,accent:'#5F488D',tag:'City favorite',description:'A bright apartment layout with open living space and quick access to nearby shops.'},
  {id:'m2',title:'Anwar Jalaluddin Housing Society',area:'DHA Phase 6',city:'Lahore',category:'House',priceM:56,beds:4,baths:4,sqft:2850,accent:'#C96C56',tag:'Family space',description:'An imaginary family home with a generous lounge, four bedrooms and a private outdoor corner.'},
  {id:'m3',title:'Burger Complex',area:'F-10',city:'Islamabad',category:'Studio',priceM:13.8,beds:1,baths:1,sqft:590,accent:'#2E7792',tag:'Compact living',description:'A compact modern studio designed for someone who prefers easy city access.'},
  {id:'m4',title:'Sarah Enclave Flat',area:'North Nazimabad',city:'Karachi',category:'Apartment',priceM:24.5,beds:3,baths:2,sqft:1450,accent:'#327969',tag:'Popular choice',description:'A practical three-bedroom apartment with a comfortable dining area and natural light.'},
  {id:'m5',title:'Abdullah & sons Cottage',area:'Bahria Town',city:'Rawalpindi',category:'House',priceM:39,beds:3,baths:3,sqft:1950,accent:'#A2704D',tag:'Quiet neighborhood',description:'A fictional cottage-inspired house with simple interiors and a family-friendly plan.'},
  {id:'m6',title:'P.Diddy Studio',area:'Cantt',city:'Multan',category:'Studio',priceM:10.9,beds:1,baths:1,sqft:540,accent:'#A45280',tag:'Budget pick',description:'A minimal studio apartment concept with an efficient floor plan.'},
  {id:'m7',title:'Continental Apartment',area:'Johar Town',city:'Lahore',category:'Apartment',priceM:21,beds:2,baths:2,sqft:1240,accent:'#4C679F',tag:'Modern layout',description:'An urban apartment concept with two bedrooms and an open kitchen design.'},
];
export function formatPrice(priceM: number): string {
  return `PKR ${priceM.toLocaleString('en-US')} million`;
}
