//base de dados

let dados = [
    {
        "name": "Arqueiras",
        "rarity": "Comum",
        "type": "Tropa",
        "hitpoint": "120",
        "damage": "41",
        "hitspeed": "1.2 seg",
        "image": "./img-cards/26000001.webp",
    },
    {
        "name": "Bebê Dragão",
        "rarity": "Épico",
        "type": "Tropa",
        "hitpoint": "800",
        "damage": "100",
        "hitspeed": "1.6 seg",
        "image": "./img-cards/26000015.webp"
    },
    {
        "name": "Balão",
        "rarity": "Épico",
        "type": "Tropa",
        "hitpoint": "1050",
        "damage": "600",
        "hitspeed": "3 seg",
        "image": "./img-cards/26000006.webp"
    },
    {
        "name": "Bárbaros",
        "rarity": "Comum",
        "type": "Tropa",
        "hitpoint": "300",
        "damage": "75",
        "hitspeed": "1.5 seg",
        "image": "./img-cards/26000008.webp"
    },
    {
        "name": "Bombardeiro",
        "rarity": "Comum",
        "type": "Tropa",
        "hitpoint": "147",
        "damage": "128",
        "hitspeed": "1.9 seg",
        "image": "./img-cards/26000013.webp"
    },
    {
        "name": "Lançador",
        "rarity": "Épico",
        "type": "Tropa",
        "hitpoint": "1200",
        "damage": "180",
        "hitspeed": "2.5 seg",
        "image": "./img-cards/26000034.webp"
    },
    {
        "name": "Príncipe das Trevas",
        "rarity": "Épico",
        "type": "Tropa",
        "hitpoint": "735",
        "damage": "200",
        "hitspeed": "1.5 seg",
        "image": "./img-cards/26000027.webp"
    },
    {
        "name": "Mago Elétrico",
        "rarity": "Lendário",
        "type": "Tropa",
        "hitpoint": "600",
        "damage": "200",
        "hitspeed": "1.7 seg",
        "image": "./img-cards/26000042.webp"
    },
    {
        "name": "Bárbaros de Elite",
        "rarity": "Comum",
        "type": "Tropa",
        "hitpoint": "478",
        "damage": "120",
        "hitspeed": "1.5 seg",
        "image": "./img-cards/26000043.webp"
    },
    {
        "name": "Espírito de Fogo",
        "rarity": "Comum",
        "type": "Tropa",
        "hitpoint": "43",
        "damage": "80",
        "hitspeed": "-",
        "image": "./img-cards/26000031.webp"
    },
    {
        "name": "Gigante",
        "rarity": "Raro",
        "type": "Tropa",
        "hitpoint": "1900",
        "damage": "120",
        "hitspeed": "1.5 seg",
        "image": "./img-cards/26000003.webp"
    },
    {
        "name": "Esqueleto Gigante",
        "rarity": "Épico",
        "type": "Tropa",
        "hitpoint": "2000",
        "damage": "130",
        "hitspeed": "1.5 seg",
        "image": "./img-cards/26000020.webp"
    },
    {
        "name": "Goblins",
        "rarity": "Comum",
        "type": "Tropa",
        "hitpoint": "80",
        "damage": "50",
        "hitspeed": "1.1 seg",
        "image": "./img-cards/26000002.webp"
    },
    {
        "name": "Golem",
        "rarity": "Épico",
        "type": "Tropa",
        "hitpoint": "3200",
        "damage": "195",
        "hitspeed": "2.5 seg",
        "image": "./img-cards/26000009.webp"
    },
    {
        "name": "Guardas",
        "rarity": "Épico",
        "type": "Tropa",
        "hitpoint": "65",
        "damage": "150",
        "hitspeed": "1.2 seg",
        "image": "./img-cards/26000025.webp"
    },
    {
        "name": "Corredor",
        "rarity": "Raro",
        "type": "Tropa",
        "hitpoint": "800",
        "damage": "150",
        "hitspeed": "1.5 seg",
        "image": "./img-cards/26000021.webp"
    },
    {
        "name": "Golem de Gelo",
        "rarity": "Raro",
        "type": "Tropa",
        "hitpoint": "595",
        "damage": "40",
        "hitspeed": "2.5 seg",
        "image": "./img-cards/26000038.webp"
    },
    {
        "name": "Espírito de Gelo",
        "rarity": "Comum",
        "type": "Tropa",
        "hitpoint": "90",
        "damage": "45",
        "hitspeed": "-",
        "image": "./img-cards/26000030.webp"
    },
    {
        "name": "Mago de Gelo",
        "rarity": "Lendário",
        "type": "Tropa",
        "hitpoint": "665",
        "damage": "63",
        "hitspeed": "1.5 seg",
        "image": "./img-cards/26000023.webp"
    },
    {
        "name": "Dragão Infernal",
        "rarity": "Lendário",
        "type": "Tropa",
        "hitpoint": "1000",
        "damage": "30-350",
        "hitspeed": "0.4 seg",
        "image": "./img-cards/26000037.webp"
    },
    {
        "name": "Cavaleiro",
        "rarity": "Comum",
        "type": "Tropa",
        "hitpoint": "660",
        "damage": "75",
        "hitspeed": "1.1 seg",
        "image": "./img-cards/26000000.webp"
    },
    {
        "name": "Lava Hound",
        "rarity": "Lendário",
        "type": "Tropa",
        "hitpoint": "3000",
        "damage": "45",
        "hitspeed": "1.3 seg",
        "image": "./img-cards/26000029.webp"
    },
    {
        "name": "Lenhador",
        "rarity": "Lendário",
        "type": "Tropa",
        "hitpoint": "950",
        "damage": "200",
        "hitspeed": "0.7 seg",
        "image": "./img-cards/26000035.webp"
    },
    {
        "name": "Megasservo",
        "rarity": "Raro",
        "type": "Tropa",
        "hitpoint": "395",
        "damage": "147",
        "hitspeed": "1.5 seg",
        "image": "./img-cards/26000039.webp"
    },
    {
        "name": "Mineirador",
        "rarity": "Lendário",
        "type": "Tropa",
        "hitpoint": "1000",
        "damage": "160",
        "hitspeed": "1.2 seg",
        "image": "./img-cards/26000032.webp"
    },
    {
        "name": "Mini P.E.K.K.A.",
        "rarity": "Raro",
        "type": "Tropa",
        "hitpoint": "600",
        "damage": "325",
        "hitspeed": "1.8 seg",
        "image": "./img-cards/26000018.webp"
    },
    {
        "name": "Horda de Servos",
        "rarity": "Comum",
        "type": "Tropa",
        "hitpoint": "90",
        "damage": "40",
        "hitspeed": "1 seg",
        "image": "./img-cards/26000022.webp"
    },
    {
        "name": "Servos",
        "rarity": "Comum",
        "type": "Tropa",
        "hitpoint": "90",
        "damage": "40",
        "hitspeed": "1 seg",
        "image": "./img-cards/26000005.webp"
    },
    {
        "name": "Mosqueteira",
        "rarity": "Raro",
        "type": "Tropa",
        "hitpoint": "340",
        "damage": "100",
        "hitspeed": "1.1 seg",
        "image": "./img-cards/26000014.webp"
    },
    {
        "name": "P.E.K.K.A.",
        "rarity": "Épico",
        "type": "Tropa",
        "hitpoint": "2600",
        "damage": "510",
        "hitspeed": "1.8 seg",
        "image": "./img-cards/26000004.webp"
    },
    {
        "name": "Príncipe",
        "rarity": "Épico",
        "type": "Tropa",
        "hitpoint": "1100",
        "damage": "245",
        "hitspeed": "1.5 seg",
        "image": "./img-cards/26000016.webp"
    },
    {
        "name": "Princesa",
        "rarity": "Lendário",
        "type": "Tropa",
        "hitpoint": "216",
        "damage": "140",
        "hitspeed": "3 seg",
        "image": "./img-cards/26000026.webp"
    },
    {
        "name": "Gigante Real",
        "rarity": "Comum",
        "type": "Tropa",
        "hitpoint": "1200",
        "damage": "75",
        "hitspeed": "1.7 seg",
        "image": "./img-cards/26000024.webp"
    },
    {
        "name": "Exército de Esqueletos",
        "rarity": "Épico",
        "type": "Tropa",
        "hitpoint": "51",
        "damage": "51",
        "hitspeed": "1 seg",
        "image": "./img-cards/26000012.webp"
    },
    {
        "name": "Esqueletos",
        "rarity": "Comum",
        "type": "Tropa",
        "hitpoint": "32",
        "damage": "32",
        "hitspeed": "1 seg",
        "image": "./img-cards/26000010.webp"
    },
    {
        "name": "Sparky",
        "rarity": "Lendário",
        "type": "Tropa",
        "hitpoint": "1200",
        "damage": "1300",
        "hitspeed": "5 seg",
        "image": "./img-cards/26000033.webp"
    },
    {
        "name": "Goblins Lanceiros",
        "rarity": "Comum",
        "type": "Tropa",
        "hitpoint": "52",
        "damage": "24",
        "hitspeed": "1.3 seg",
        "image": "./img-cards/26000019.webp"
    },
    {
        "name": "Três Mosqueteiras",
        "rarity": "Raro",
        "type": "Tropa",
        "hitpoint": "340",
        "damage": "100",
        "hitspeed": "1.1 seg",
        "image": "./img-cards/26000028.webp"
    },
    {
        "name": "Valquíria",
        "rarity": "Raro",
        "type": "Tropa",
        "hitpoint": "880",
        "damage": "120",
        "hitspeed": "1.5 seg",
        "image": "./img-cards/26000011.webp"
    },
    {
        "name": "Bruxa",
        "rarity": "Épico",
        "type": "Tropa",
        "hitpoint": "500",
        "damage": "52",
        "hitspeed": "0.7 seg",
        "image": "./img-cards/26000007.webp"
    },
    {
        "name": "Mago",
        "rarity": "Raro",
        "type": "Tropa",
        "hitpoint": "340",
        "damage": "130",
        "hitspeed": "1.4 seg",
        "image": "./img-cards/26000017.webp"
    },
    {
        "name": "Cabana de Bárbaros",
        "rarity": "Raro",
        "type": "Construção",
        "hitpoint": "1100",
        "damage": "3",
        "hitspeed": "14 seg",
        "image": "./img-cards/27000005.webp"
    },
    {
        "name": "Torre de Bombas",
        "rarity": "Raro",
        "type": "Construção",
        "hitpoint": "950",
        "damage": "100",
        "hitspeed": "1.6 seg",
        "image": "./img-cards/27000004.webp"
    },
    {
        "name": "Canhão",
        "rarity": "Comum",
        "type": "Construção",
        "hitpoint": "350",
        "damage": "60",
        "hitspeed": "0.8 seg",
        "image": "./img-cards/27000000.webp"
    },
    {
        "name": "Coletor de Elixir",
        "rarity": "Raro",
        "type": "Construção",
        "hitpoint": "580",
        "damage": "0",
        "hitspeed": "8.5 seg",
        "image": "./img-cards/27000007.webp"
    },
    {
        "name": "Fornalha",
        "rarity": "Raro",
        "type": "Construção",
        "hitpoint": "600",
        "damage": "3",
        "hitspeed": "10 seg",
        "image": "./img-cards/27000010.webp"
    },
    {
        "name": "Cabana de Goblins",
        "rarity": "Raro",
        "type": "Construção",
        "hitpoint": "700",
        "damage": "3",
        "hitspeed": "4.9 seg",
        "image": "./img-cards/27000001.webp"
    },
    {
        "name": "Torre Inferno",
        "rarity": "Raro",
        "type": "Construção",
        "hitpoint": "800",
        "damage": "20-400",
        "hitspeed": "0.4 seg",
        "image": "./img-cards/27000003.webp"
    },
    {
        "name": "Morteiro",
        "rarity": "Comum",
        "type": "Construção",
        "hitpoint": "600",
        "damage": "108",
        "hitspeed": "5 seg",
        "image": "./img-cards/27000002.webp"
    },
    {
        "name": "Tesla",
        "rarity": "Comum",
        "type": "Construção",
        "hitpoint": "450",
        "damage": "64",
        "hitspeed": "0.8 seg",
        "image": "./img-cards/27000006.webp"
    },
    {
        "name": "Lápide",
        "rarity": "Raro",
        "type": "Construção",
        "hitpoint": "240",
        "damage": "3",
        "hitspeed": "2.9 seg",
        "image": "./img-cards/27000009.webp"
    },
    {
        "name": "X-Besta",
        "rarity": "Épico",
        "type": "Construção",
        "hitpoint": "1000",
        "damage": "20",
        "hitspeed": "0.25 seg",
        "image": "./img-cards/27000008.webp"
    }
]