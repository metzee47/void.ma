import { CiCloud } from "react-icons/ci"
import { FaBasketballBall, FaUsers } from "react-icons/fa"
import { IoFileTrayFullOutline } from "react-icons/io5"
import { MdOutlineQrCode2 } from "react-icons/md"

export const FORMULAS = [
    {
        type: "Starter",
        description: "Description de la formule 1",
        name: "Name 1",
        isPopular: false,
        services: [
            "Jusqu'à 100 utilisateurs",
            "Hébergement Cloud sécurisé",
            "Jusqu'à 1K QR codes",
            "Support standard",
            "Jusqu'à 1 000 utilisateurs",
            "Hébergement Cloud sécurisé",
            "Jusqu'à 10K QR codes",
            "Support prioritaire",
        ]
    },
    {
        type: "Scale",
        description: "Description de la formule 2",
        name: "Name 2",
        isPopular: true,
        services: [
            "Jusqu'à 1 000 utilisateurs",
            "Hébergement Cloud sécurisé",
            "Jusqu'à 10K QR codes",
            "Support prioritaire",
            "Album complet (toutes les équipes)",
            "Gestion des matchs et événements",
            "Statistiques avancées",
            "API d'intégration",
            "Personnalisation avancée"
        ]
    },
    {
        type: "Enterprise",
        description: "Description de la formule 3",
        name: "Name 3",
        isPopular: false,
        services: [
            "Utilisateurs illimités",
            "Hébergement Cloud sécurisé",
            "QR codes illimités",
            "Support prioritaire",
            "Backoffice avancé avec analytics",
            "Personnalisation complète",
            "Support dédié 24/7",
            "Formation personnalisée",
            "Intégration API avancée",
            "Solutions sur mesure",
        ]
    },
   
]


export const FORMULAS_SERVICE = [
    {
        icon: FaUsers,
        title: "Utilisateurs",
        description: "Description de la formule 1"
    },
    {
        icon: MdOutlineQrCode2,
        title: "QR codes",
        description: "Description de la formule 2"
    },
    {
        icon: FaBasketballBall,
        title: "Équipes",
        description: "Description de la formule 3"
    },
    {
        icon: IoFileTrayFullOutline,
        title: "Albums",
        description: "Description de la formule 4"
    },
    {
        icon: CiCloud,
        title: "Cloud Storage",
        description: "Description de la formule 5"
    },
   
]