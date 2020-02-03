const para1 = [
    {
        quote: 'Avec'
    },
    {
        quote: 'Si vous voulez mon avis concernant'
    },
    {
        quote: 'Dans le but de pallier à'
    },
    {
        quote: 'Afin de circonvenir à'
    },
    {
        quote: 'Pour réagir face à'
    },
    {
        quote: 'Malgré'
    },
    {
        quote: 'Compte tenu de'
    },
    {
        quote: 'Nonobstant'
    },
    {
        quote: 'Quoi quon dise concernant'
    },
    {
        quote: 'Tant que durera'
    },
    {
        quote: 'Du fait de'
    },
    {
        quote: 'Quelle que soit'
    },
    {
        quote: 'Dans le cas particulier de'
    },
    {
        quote: 'En ce qui concerne'
    },
    {
        quote: 'Eu égard à Vu'
    },
    {
        quote: 'Où que nous mène'
    },
    {
        quote: 'Considérant'
    },
];
const para2 = [
    {
        quote: 'la morosité',
    },
    {
        quote: 'la situation',
    },
    {
        quote: 'l\'ambiance',
    },
    {
        quote: 'la politique',
    },
    {
        quote: 'la fragilité',
    },
    {
        quote: 'complexité',
    },
    {
        quote: 'l\'inconstance',
    },
    {
        quote: 'cette inflexion'
    }
];
const para3 = [
    {
        quote: 'présente,',
    },
    {
        quote: 'actuelle,',
    },
    {
        quote: 'générale,',
    },
    {
        quote: 'induite,',
    },
    {
        quote: 'conjoncturelle,',
    },
    {
        quote: 'observée,',
    },
    {
        quote: 'contextuelle,',
    },
    {
        quote: 'de ces derniers temps,',

    },
    {
        quote: 'de l\'époque actuelle',

    },
    {
        quote: 'intrinsèque que nous constatons '

    },

];
const para4 = [
    {
        quote: 'il ne faut pas s\'interdire d&',
    },
    {
        quote: 'nous sommes contraints d&',
    },
    {
        quote: ' il ne faut pas s\'interdire d&',
    },
    {
        quote: 'je suggère fortement d&',
    },
    {
        quote: 'je n\'exclus pas d&',
    },
    {
        quote: 'je vous demande d&',
    },

];
const para5 = [
    {
        quote: 'gérer',
    },
    {
        quote: 'fédérer',
    },
    {
        quote: 'comprendre',
    },
    {
        quote: 'analyser',
    },
    {
        quote: 'appréhender',
    },
    {
        quote: 'expérimenter',
    },
    {
        quote: 'essayer',
    },
    {
        quote: 'caractériser',
    },
    {
        quote: 'façonner',
    },
    {
        quote: 'revoir',
    },
    {
        quote: 'prendre en compte',
    },
    {
        quote: 'arrêter de stigmatiser',
    },
    {
        quote: 'considérer',
    },
    {
        quote: 'réorganiser',
    },
    {
        quote: 'inventorier ',
    }
];
const para6 = [
    {
        quote: 'la plus grande partie des',
    },
    {
        quote: 'les principales',
    },
    {
        quote: 'systématiquement les',
    },
    {
        quote: 'précisément les'
    }
];
const para7 = [
    {
        quote: 'décisions',
    },
    {
        quote: 'modalités',
    },
    {
        quote: 'hypothèses',
    },
    {
        quote: 'stratégies',
    }
];
const para8 = [
    {
        quote: 'optimales,',
    },
    {
        quote: 'opportunes,',
    },
    {
        quote: 'emblématiques,',
    },
    {
        quote: 'draconiennes,'
    },
];
const para9 = [
    {
        quote: 'depuis longtemps',
    },
    {
        quote: 'de toute urgence même'
    },
    {
        quote: 'avec toute la prudence requise',
    },
    {
        quote: 'dans une perspective correcte',
    },
    {
        quote: 'pour le futur',
    },
    {
        quote: 'rapidement',
    },
    {
        quote: 'à court terme',
    },
    {
        quote: 'à long terme',
    },
    {
        quote: 'à l\'avenir',
    },
    {
        quote: 'pour longtemps',
    },

];

/**
 * @var {Array} Tableau des mots pour former une citation
 */
const Quotes = [para1,para2,para3,para4, para5, para6, para7, para8, para9];

/**
 * Vérifie si un mot débute par une voyelle
 * @param {String} str mot à vérifier
 * @return {boolean}
 */
const startWith = str => ['a', 'e', 'o', 'i', 'u', 'y'].includes(str);

/**
 * Génère une citation complète à partir du tableau de citations
 * @param {String} sentencesArray Tableau de citations
 * @returns {String} Une chaine ou phrase representant une citation
 */
const generateQuoteSentence = sentencesArray => Array.prototype.map.call(sentencesArray, sentences =>
         sentences[Math.floor(Math.random() * Math.floor(sentences.length))].quote
    ).join(' ').trim().replace('  ', '').concat('.');

/**
 * Nétoie la ponctuation de la citation réçu en paramètre
 * @param {String} str
 * @returns {String} la citation nétoyée avec les bonnes ponctuations
 */
const sanitize = str => startWith(str.charAt(str.indexOf('d&')+3)) ? str.replace('d&','d\'') : str.replace('d&','de');

/**
 * Génère le nombre de citation correspondant à l'entier nb
 * @param {Number} nb le nombre de citation à génèrer
 * @returns {Array} tableau de citations correpondants à l'entier nb
 */
const generateBy = nb => {
    if (nb === undefined || isNaN(nb) || Number(nb) <= 0) {
        alert('Vous devez spécifier un nombre valide');
        return;
    }
    const quotes = [];
    for (let i = 0; i < nb; i++) {
        quotes.push(sanitize(generateQuoteSentence(Quotes)))
    }

    return quotes;
};
/**
 * Affiche le menu permettant de générer les quotes
 * @returns {Number} le choix de l'utilisateur
 */
const menu = () => {
    console.log("=========Welcome to Quotes Generator==========\n1- Current Quote\n2- Radom [1..5] quotes\n0- Exit");
    return Number(prompt('Your choice: '));
};
/**
 * Récupère le nombre de quotes à génèrer
 * @returns {Number} Le nombre de quotes à génerer
 */
const submenu = () => Number(prompt('Enter a number between 1 & 5 : '));

/**
 * Affiche le génèrateur de citation
 */
const play = () => {
    let choice = 0;
    do {
        choice = menu();
        switch (choice) {
            case 1:
                console.log(sanitize(generateQuoteSentence(Quotes)));
                break;
            case 2:
                let nb = NaN;
                do {
                    nb = submenu();
                } while (isNaN(nb) || nb > 5 || nb < 1);
                generateBy(nb).forEach(q => console.log(q));
                break;
            case 0:
                console.log('Bye')
        }
    } while (choice !== 0 || isNaN(choice))
};
/**
 * Demarre le génèrateur
 */
play();
