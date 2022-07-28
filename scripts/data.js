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
    },
    3: {
        name: "Joban Line",
        japaneseName: "常磐線",
        shortName: "JJ",
        description: "The Joban Line (Japanese: 常磐線, Japanese pronunciation: [Joban-sen]) is a railway line in Japan operated by the East Japan Railway Company (JR East). The line officially begins at Nippori Station in Arakawa, Tokyo before the line officially ends at Iwanuma Station in Iwanuma, Miyagi. However, following the opening of the Ueno–Tokyo Line, Joban Line train services originate at Shinagawa or Ueno; likewise, Joban Line trains continue past Iwanuma onto the Tohoku Main Line tracks to Sendai. The line approximately parallels the Pacific coasts of Chiba, Ibaraki, and Fukushima Prefectures.",
        color: "3CB371",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/6/69/Series-E531-K418.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/4/45/JREast-Joban-line-JJ08-Abiko-station-sign-20171228-061227.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/b/be/JR_J%C5%8Dban_Line_Ry%C5%ABgasakishi_Station_Platform.jpg",
            "https://live.staticflickr.com/2445/3839148360_9d47dc12d2_b.jpg",
        ],
        operator: 1,
        open: 1905,
        speed: 90,
        track: 1067,
        length: 368.0
    },
    4: {
        name: "Tozai Line",
        japaneseName: "東京メトロ千代田線",
        shortName: "T",
        description: "The Tokyo Metro Tozai Line (東京メトロ東西線, Tokyo Metoro Tozai-sen) is a rapid transit line in Tokyo and Chiba Prefecture, Japan, owned and operated by Tokyo Metro. Its name literally means East-West Line. The line runs between Nakano Station in Nakano, Tokyo and Nishi-Funabashi Station in Funabashi, Chiba. The Tozai Line was referred to as Line 5 during the planning stages, thus the seldom-used official name is Line 5 Tozai Line (5号線東西線, Go-go-sen Tozai-sen). On average, the line carries 1,642,378 passengers daily (2017), the highest of all lines in the Tokyo Metro network. On maps, diagrams and signboards, the Tozai Line is shown using the color 'sky blue' (T), and its stations are given numbers using the letter 'T'. ",
        color: "00b2dd",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/3/30/Tokyo-Metro_Series15000-15013.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/1c/Iidabashi_Station_platform_Tozai_Line_Feb_06_2020_02-50PM.jpeg",
            "https://upload.wikimedia.org/wikipedia/commons/8/80/Tokyometro05_-inside12th.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/11/JR_Chuo-Main-Line%E3%83%BBTokyo_Metro_Tozai-Line_Nakano_Station_Platform_3%E3%83%BB4.jpg",
        ],
        operator: 2,
        open: 1964,
        speed: 100,
        track: 1067,
        length: 30.8
    },
    5: {
        name: "Chiyoda Line",
        japaneseName: "常磐線",
        shortName: "C",
        description: "The Tokyo Metro Chiyoda Line (東京メトロ千代田線, Tokyo Metoro Chiyoda-sen) is a subway line owned and operated by Tokyo Metro in Tokyo, Japan. On average, the line carries 1,447,730 passengers daily (2017), the second highest of the Tokyo Metro network, behind the Tozai Line (1,642,378). The line was named after the Chiyoda ward, under which it passes. On maps, diagrams and signboards, the line is shown using the color green (C), and its stations are given numbers using the letter 'C'. ",
        color: "009944",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/c/cb/%E6%9D%B1%E4%BA%AC%E3%83%A1%E3%83%88%E3%83%AD16000%E7%B3%BB16021%E7%B7%A8%E6%88%90.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/7b/Tokyo_Metro_05-013F_Chiyoda_line_Kita-Ayase_branch_line_for_test_run.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tokyo_Metro_Chiyoda-Line_Kita-Senju_Station_Platform.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/e1/TokyoMetro-C19-Ayase-station-platform-20200403-135757.jpg",
        ],
        operator: 2,
        open: 1964,
        speed: 100,
        track: 1067,
        length: 24.0
    },
    6: {
        name: "Odakyu Odawara Line",
        japaneseName: "小田急小田原線",
        shortName: "OH",
        description: "The Odakyu Odawara Line (小田急小田原線, Odakyu-Odawara-sen) is the main line of Japanese private railway operator Odakyu Electric Railway. It extends 82.5 km from Shinjuku in central Tokyo through the southwest suburbs to the city of Odawara, the gateway to Hakone in Kanagawa Prefecture. It is a busy commuter line and is also known for its 'Romancecar' limited express services. From Yoyogi-Uehara Station some trains continue onto the Tokyo Metro Chiyoda Line and beyond to the East Japan Railway Company Joban Line.",
        color: "00bfff",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Odakyu.type50000.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/17/Odakyu-electric-railway-Odawara-line-Ebina-station-platform-20130726-161802.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/13/Odakyu-electric-railway-Odawara-line-Kyodo-station-sign-20130517-150050.jpg",
        ],
        operator: 3,
        open: 1927,
        speed: 110,
        track: 1067,
        length: 82.5
    },
}

const operators = {
    1: {
        name: "JR East",
        japaneseName: "山手線東日本旅客鉄道株式会社",
        logo: "./imgs/JR-East-logo.svg",
        description: "JR East is a Japanese train company that operates trains in the Kanto, Koshinetsu and Tohoku regions. It also operates all of the Shinkansen services north of Tokyo (Except for Hokkaido).",
        open: 1987
    },
    2: {
        name: "Tokyo Metro",
        japaneseName: "東京メトロ",
        logo: "./imgs/Tokyo-Metro-logo.svg",
        description: "The Tokyo Metro (東京メトロ, Tokyo Metoro) is a major rapid transit system in Tokyo, Japan, operated by the Tokyo Metro Co. While it is not the only rapid transit system operating in Tokyo, it has the higher ridership among the two subway operators: in 2014, the Tokyo Metro had an average daily ridership of 6.84 million passengers, while the other system, the Toei Subway, had 2.85 million average daily rides.",
        open: 1927
    },
    3: {
        name: "Odakyu Electric Railway",
        japaneseName: "小田急電鉄株式会社",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/OdakyuGroup_logo.svg",
        description: "The Odakyu Electric Railway Company, Ltd. (小田急電鉄株式会社, Odakyū Dentetsu kabushiki gaisha), commonly known as Odakyū, is a major railway company based in Tokyo, Japan, best known for its Romancecar series of limited express trains from Tokyo to Odawara, Enoshima, Tama New Town, and Hakone.",
        open: 1948
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
        capacity: 1628,
        operator: 1
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
        line: ["1", "2", "3", "4"],
        cars: 11,
        capacity: 1628,
        operator: 1
    },
    3: {
        name: "Tokyo Metro 05 series",
        description: "The Tokyo Metro 05 series (東京メトロ05系, Tokyo Metoro 05-kei) is an electric multiple unit (EMU) train type operated on the Tokyo Metro Tozai Line and Tokyo Metro Chiyoda Line Ayase Branch in Japan by the subway operator Tokyo Metro. Some sets have also been shipped to Indonesia, where they operate on the KRL Commuterline system in Jakarta.",
        built: "1988 - 2004",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/b/b4/Tokyo_Metro_05_Series_No.21_Gyotoku_Sta.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/e/e9/Tokyo_Metro_05_series_05-142f_20200623.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c9/05-109F_Jabodetabek_KCJ_05_Series_EMU.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c7/Tokyometro05-inside1.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/8/80/Tokyometro05_-inside12th.jpg",
        ],
        line: ["4", "2", "5"],
        cars: 10,
        capacity: 1628,
        operator: 2
    },
    4: {
        name: "Tokyo Metro 16000 series",
        description: "The Tokyo Metro 16000 series (東京メトロ16000系, Tokyo Metoro 16000-kei) is an electric multiple unit (EMU) train type operated by the Tokyo subway operator Tokyo Metro on the Tokyo Metro Chiyoda Line in Tokyo, Japan, since November 2010.",
        built: "2010 - 2017",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/c/cb/%E6%9D%B1%E4%BA%AC%E3%83%A1%E3%83%88%E3%83%AD16000%E7%B3%BB16021%E7%B7%A8%E6%88%90.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/65/Tokyo_Metro_Chiyoda_Line_16000_cab_interior_Ayase_Depot_20101128.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/0/0c/Tokyo_Metro_Chiyoda_Line_16203_interior_Ayase_Depot_20101128.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/7/70/Tokyo_Metro_Chiyoda_Line_16000_TVIS_LCD_display_Ayase_Depot_20101128.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/3/35/TokyoMetro_series16000_houkoumakuLED_at_Abiko_station.jpg",
        ],
        line: ["3", "5"],
        cars: 10,
        capacity: 1628,
        operator: 2
    },
    5: {
        name: "Odakyu 5000 series",
        description: "The Odakyu 5000 series (小田急5000形, Odakyu 5000-gata) is a commuter electric multiple unit (EMU) train type operated by the private railway operator Odakyu Electric Railway in Japan since 26 March 2020.",
        built: "2019 - present",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/4/41/OER-Series5000-5451.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/f/f1/OER-Series5000_Inside.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/7/78/OER-Series5000_Inside_Free-space.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/0/03/OER-Series5000_Inside_LCD.jpg",
        ],
        line: ["6"],
        cars: 10,
        capacity: 1628,
        operator: 3
    },
    6: {
        name: "Odakyu 50000 series",
        description: "The Odakyu 50000 series (小田急50000形, Odakyu 50000-gata) or VSE (Vault Super Express) is an electric multiple unit (EMU) train operated by Odakyu Electric Railway on Romancecar services in Japan. Two 10-car articulated sets were introduced in March 2005, manufactured by Nippon Sharyo.",
        built: "2005 - present",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Odakyu.type50000.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/c/c8/OER_50000_inside_Ladder_2.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/39/Observation_Seat_of_Odakyu_RomanceCar_VSE_-Summer-.JPG",
        ],
        line: ["6"],
        cars: 10,
        capacity: 358,
        operator: 3
    }
}

const tickets = {
    1: {
        name: "Japan Rail Pass",
        description: "The Japan Rail Pass (also commonly called JR Pass) is a very cost effective rail pass for long distance train travel in Japan. The pass can be used only by foreign tourists and offers unlimited rides on JR trains for one, two or three weeks at a cost that residents of Japan can only dream of. It comes in two types: ordinary and green car. The latter is valid on green cars (first class cars) that offer more spacious seats than ordinary cars.",
        valid: [7, 14, 21],
        cost: [29650, 47250, 60450],
        vaildConsecutive: true,
        operators: [1]
    }
}