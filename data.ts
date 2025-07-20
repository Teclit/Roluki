// Définition d'un type explicite pour les liens de profil
type SocialLinks = {
  youtube_MesobHixanat: string;
  github: string;
  cvdesignr: string;
};

// Add this with the other constants
const STARTING_YEAR = 2024;

const COMPANY_NAME = 'GEEZ...';
const SOCIAL_LINKS: SocialLinks = {
  youtube_MesobHixanat: 'https://www.youtube.com/@MesobHixanat',
  github: "",
  cvdesignr: ""
};

// Exportation centralisée pour faciliter l'importation ailleurs
export {COMPANY_NAME, SOCIAL_LINKS, STARTING_YEAR};


// data.ts
export interface SkillImage {
  name: string;
  url: string;
  alt: string;
}

const imgDirectory: string = "assets/logos/";

// List of skill images
