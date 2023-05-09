
import { TfiPencilAlt } from "react-icons/tfi";
import  {RiMailSettingsLine, RiCalendarCheckLine} from "react-icons/ri";
import  {GiOpenTreasureChest, GiProcessor, GiTakeMyMoney} from "react-icons/gi";
import  {IoAlertCircleOutline} from "react-icons/io5";


export const SOLUTIONS = [
  {
    title: "GoToSign",
    Icon: <TfiPencilAlt  className="IconService"/>,   
    Question : "Voulez-vous passer à la signature électronique en toute sécurité ?",
    Reponse : "Notre solution de signature électronique vous permet d’adresser vos documents aux destinataires désignés, de les valider à travers un échange maîtrisé et d’y apposer une signature électronique sécurisée. Intelsign assure la traçabilité du document et des différents intervenants dans son parcours."
  },
  {
    title: "E-courrier",
    Icon: <RiMailSettingsLine  className="IconService"/>,   
    Question : "Voulez-vous moderniser et accélérer la gestion de votre courrier ?",
    Reponse : "Notre solution de gestion du courrier vous donne une totale flexibilité pour un traitement pertinent et le suivi de votre courrier quel qu’en soit le format (email, fax, appel, etc.). E-courrier est intuitif, responsive, et élimine le bureau d’ordre physique pour de meilleures performances."
  },
  {
    title: "E-Coffre Fort",
    Icon: <GiOpenTreasureChest  className="IconService"/>,   
    Question : "Avez-vous besoin de mieux gérer l’échange de documents ?",
    Reponse : "Ce logiciel de pointe pour la gestion électronique de données GED offre un service de stockage et de partage de documents en toute sécurité. Il intègre les fonctions de signature, d’horodatage et de suivi de l’accusé de réception à la lecture/réception."
  },
  {
    title: "E-process",
    Icon: <GiProcessor  className="IconService"/>,   
    Question : "Comment suivre le parcours des documents au sein de l’entreprise ?",
    Reponse : "Notre solution E-process fluidifie le parcours des documents au sein des grandes structures à travers un processus dématérialisé, rapide et efficace. Avec un workflow prédéfini et une gestion centralisée des documents, elle améliore le travail collaboratif dans les structures."
  },
  {
    title: "Portail Achats",
    Icon: <GiTakeMyMoney  className="IconService"/>,   
    Question : "Besoin d’une solution complète de gestion de vos appels d’offres ?",
    Reponse : "L’outil de gestion des appels d’offres par excellence vous permet de dématérialiser et de piloter vos appels d’offres, de la préparation au dépouillement. Portail Achats sécurise toutes les étapes de l’appel d’offres avec des accès paramétrés pour garantir la viabilité du processus."
  },
  {
    title: "Prise de rendez-vous",
    Icon: <RiCalendarCheckLine  className="IconService"/>,   
    Question : "Vous recherchez une gestion efficace de votre agenda ?",
    Reponse : "L’outil organise et synchronise vos agendas lors d’une prise de rendez-vous avec vos partenaires ou vos clients. Grâce à un suivi pertinent et à une visualisation de tout l’agenda, Prise de rendez-vous facilite la gestion et la maîtrise de vos capacités d’accueil."
  },
  {
    title: "E-Réclamation",
    Icon: <IoAlertCircleOutline  className="IconService"/>,   
    Question : "Pour une meilleure prise en charge des réclamations ?",
    Reponse : "E-Réclamation vous permet une gestion 100% informatisée des réclamations de vos clients, quels que soient les canaux d’introduction -papier, email, formulaire web-. En sécurisant la traçabilité des échanges, la solution facilite et accélère les réponses aux réclamations."
  },
 
];
