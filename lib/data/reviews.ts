export interface GoogleReview {
  name: string;
  initial: string;
  avatarColor: string;
  rating: number;
  timeAgo: string;
  text: string;
}

export const googleReviews: GoogleReview[] = [
  {
    name: "Milena Lupu",
    initial: "M",
    avatarColor: "bg-fuchsia-500",
    rating: 5,
    timeAgo: "acum 2 luni",
    text: "Persoane care știu să își trateze clienți cu multă seriozitate. Respect pentru așa echipa. Recomand acest birou cu mult drag.",
  },
  {
    name: "Cornel Cornel",
    initial: "C",
    avatarColor: "bg-blue-500",
    rating: 5,
    timeAgo: "acum 3 luni",
    text: "Foarte mulțumit. Profesioniști și serioși, m-au îndrumat să obțin toate actele necesare.",
  },
  {
    name: "Marius Tudorache",
    initial: "M",
    avatarColor: "bg-slate-600",
    rating: 5,
    timeAgo: "acum 2 săptămâni",
    text: "Servicii bune, personal amabil și profesionist. Recomand cu încredere.",
  },
  {
    name: "Nicu Condrat",
    initial: "N",
    avatarColor: "bg-indigo-500",
    rating: 5,
    timeAgo: "acum 3 luni",
    text: "Recomand cu drag! Am apelat la serviciile acestei firme și am fost foarte mulțumit.",
  },
  {
    name: "Doinița Doina",
    initial: "D",
    avatarColor: "bg-purple-500",
    rating: 5,
    timeAgo: "acum 4 luni",
    text: "Mulțumesc Cadastru Mangalia, pentru calitatea serviciilor, mult succes în continuare!",
  },
  {
    name: "Gabriel Gheorghe Banu",
    initial: "G",
    avatarColor: "bg-teal-500",
    rating: 5,
    timeAgo: "acum 2 luni",
    text: "Profesionalism și promptitudine. Felicitări!",
  },
  {
    name: "Cocarcea Rodica",
    initial: "C",
    avatarColor: "bg-pink-600",
    rating: 5,
    timeAgo: "acum 4 luni",
    text: "Rapiditate și corectitudine. Mulțumim!",
  },
  {
    name: "Soare Robert",
    initial: "S",
    avatarColor: "bg-amber-600",
    rating: 5,
    timeAgo: "acum 4 ani",
    text: "Echipa tânără și receptivă. Servicii excelente, rapiditate în lucru și atenție sporită la detalii!",
  },
  {
    name: "Mihail Neculai",
    initial: "M",
    avatarColor: "bg-green-600",
    rating: 5,
    timeAgo: "acum 6 ani",
    text: "Locația este genială pentru desfășurarea muncii. Personalul foarte de treabă și a existat o comunicare bună!",
  },
];

export const REVIEWS_META = {
  averageRating: 5.0,
  totalCount: 13,
  profileUrl: "https://share.google/yd542rCNArKaudRLi",
};
