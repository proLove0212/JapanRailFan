// Script for database

const lines = {
    1: {
        name: "Yamanote Line",
        japaneseName: "山手線",
        shortName: "JY",
        description: "The Yamanote Line (Japanese: 山手線, Yamanote-sen) is the loop service in Tokyo, Japan, operated by East Japan Railway Company (JR East). It is one of Tokyo's busiest and most important lines, connecting most of Tokyo's major stations and urban centres, including Marunouchi, the Yurakucho/Ginza area, Shinagawa, Shibuya, Shinjuku, Ikebukuro, and Ueno, with all but two of its 30 stations connecting to other railway or underground (subway) lines. ",
        color: "9acd32",
        images: [
            "./imgs/yamanoteLine-1.jpg",
            "./imgs/yamanoteLine-2.jpg",
            "./imgs/yamanoteLine-3.jpg",
            "./imgs/yamanoteLine-4.jpg",
            "./imgs/yamanoteLine-5.jpg",
        ],
        operator: 1,
        open: 1885,
        speed: 90,
        track: 1067,
        length: 34.5
    },
    2: {
        name: "Chuo-Sobu Line",
        japaneseName: "中央・総武緩行線",
        shortName: "JB",
        description: "The Chuo-Sobu Line (Japanese: 中央・総武緩行線, Hepburn: Chuo-Sobu-kanko-sen) is a railway line that runs through Tokyo and Chiba Prefecture, Japan. Part of the East Japan Railway Company (JR East) network, the line operates on separate tracks along the right-of-way of the Chuo Main Line (Chuo Line (Rapid)) and Sobu Main Line (Sobu Line (Rapid)), providing service between Mitaka Station in the cities of Mitaka and Musashino and Chiba Station in Chiba.",
        color: "FFD400",
        images: [
            "./imgs/sobuLine-1.jpg",
            "./imgs/sobuLine-2.jpg",
            "./imgs/sobuLine-3.jpg",
            "./imgs/sobuLine-4.jpg",
            "./imgs/sobuLine-5.jpg",
        ],
        operator: 1,
        open: 1932,
        speed: 90,
        track: 1067,
        length: 60.2
    }
}

const operators = {
    1: {
        name: "JR East",
        japaneseName: "山手線東日本旅客鉄道株式会社",
        description: "JR East is a Japanese train company that operates trains in the Kanto, Koshinetsu and Tohoku regions. It also operates all of the Shinkansen services north of Tokyo (Except for Hokkaido).",
        open: 1987
    }
}

const trains = {
    1: {
        name: "E235 Series",
        description: "The E235 Series is a high-capacity train that operates on the Yamanote Line. The train consists of 11 cars and has a capacity of up to 1628 passengers. Cars no. 7 and 10 are configured with 6 doors on each side for quicker boarding and alighting.",
        built: "2015 - 2019",
        images: [
            "./imgs/e235-1.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Yamanote_Line_E235_Ikebukuro_20150326.JPG/1280px-Yamanote_Line_E235_Ikebukuro_20150326.JPG",
        ],
        line: ["1"],
        cars: 11,
        capacity: 1628
    },
    2: {
        name: "E231 Series",
        description: "The E231 Series is a high-capacity train that operates on the Chou-Sobu Line and formerly the Yamanote Line. The train consists of 10 cars (Chuo-Sobu Line) or 11 cars (Yamanote Line). Cars no. 7 and 10 are configured with 6 doors on each side for quicker boarding and alighting. (Only for Yamanote Line)",
        built: "2002 - 2005",
        images: [
            "./imgs/e231-1.jpg",
            "./imgs/e231-2.jpg",
            "./imgs/e231-3.jpg",
            "./imgs/e231-4.jpg",
        ],
        line: ["1", "2"],
        cars: 11,
        capacity: 1628
    }
}