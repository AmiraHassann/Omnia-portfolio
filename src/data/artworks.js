// All artworks (English + Arabic).
// To add a new one: copy an item, put its image in public/images, and edit the text.

const artworks = [
  {
    "id": 1,
    "category": "paintings",
    "image": "artwork-01.jpg",
    "title": {
      "en": "How We Produce When We Bloom",
      "ar": "كيف ننتج عندما نزهر"
    },
    "medium": {
      "en": "Oil on canvas, with prints from real leaves | 70 × 50 cm | 2024",
      "ar": "ألوان زيتية على قماش كانفاس، مع بصمات من أوراق نباتية حقيقية | 70 × 50 سم | 2024"
    },
    "description": {
      "en": "A conceptual portrait in which the upper half of a woman’s face dissolves among leaves, while a dark, solid black form anchors the composition. Prints taken from real leaves and painted butterflies surround the figure, pointing to the link between the self and nature. The work reflects on what people can produce when they bloom: production, at its core, is a response to blooming.",
      "ar": "بورتريه مفاهيمي يذوب فيه النصف العلوي من وجه امرأة وسط الأوراق، بينما يثبّت التكوين جسم أسود داكن مصمت. تحيط بالشخصية بصمات مأخوذة من أوراق حقيقية وفراشات مرسومة، في إشارة إلى الصلة بين الذات والطبيعة. يتأمل العمل قدرة الإنسان على إنتاج كل ما بوسعه عندما يزهر، فالإنتاج في جوهره رد فعل للازدهار."
    },
    "alt": "Woman’s face half-hidden by real leaves and butterflies, with leaf prints around her",
    "width": 582,
    "height": 826
  },
  {
    "id": 2,
    "category": "paintings",
    "image": "artwork-02.jpg",
    "title": {
      "en": "Architectural Identity of the Self",
      "ar": "الهوية المعمارية للذات"
    },
    "medium": {
      "en": "Oil on canvas | 70 × 50 cm | 2025",
      "ar": "ألوان زيتية على قماش كانفاس | 70 × 50 سم | 2025"
    },
    "description": {
      "en": "A surreal portrait that takes up the idea of identity. The work shows my skill in painting figures, in imaginative composition, and in balancing finely detailed architecture with the calm space around it.",
      "ar": "بورتريه سريالي يتناول فكرة الهوية. ويظهر العمل مهارتي في رسم الشخصيات، والتكوين التخيلي، والموازنة بين تفاصيل العمارة الدقيقة والمساحة الهادئة حولها."
    },
    "alt": "Woman with closed eyes and a city of towers and domes growing from her hair",
    "width": 817,
    "height": 1100
  },
  {
    "id": 3,
    "category": "paintings",
    "image": "artwork-03.jpg",
    "title": {
      "en": "Rooted",
      "ar": "جذور"
    },
    "medium": {
      "en": "Oil on canvas, yarn, and real accessories | 70 × 50 cm | 2025",
      "ar": "ألوان زيتية على قماش كانفاس، مع خيوط وإكسسوارات حقيقية | 70 × 50 سم | 2025"
    },
    "description": {
      "en": "A portrait of an African woman, inspired by roots and African identity. Painted in oil on canvas, with braids made of yarn and real accessories fixed onto the painting, combining painting with real texture.",
      "ar": "بورتريه لامرأة أفريقية، مستوحى من الجذور والهوية الأفريقية. رسم بالزيت على قماش، مع ضفائر مصنوعة من الخيوط وإكسسوارات حقيقية مثبتة على اللوحة، لتجمع بين الرسم والملمس الواقعي."
    },
    "alt": "Portrait of a woman with braided yarn hair against a red background with bare trees and flowers",
    "width": 748,
    "height": 1024
  },
  {
    "id": 4,
    "category": "paintings",
    "image": "artwork-04.jpg",
    "title": {
      "en": "Master copy of “Portrait of a Woman” by Eugenio Carmi",
      "ar": "نسخة دراسية من لوحة «بورتريه امرأة»"
    },
    "medium": {
      "en": "Oil on canvas | 80 × 60 cm | 2024",
      "ar": "ألوان زيتية على قماش كانفاس | 80 × 60 سم | 2024"
    },
    "description": {
      "en": "Painted from scratch to study composition and color theory.",
      "ar": "رُسمت من الصفر لدراسة التكوين ونظرية الألوان."
    },
    "alt": "Seated woman painted in bold green, yellow, red and blue with thick black outlines",
    "width": 847,
    "height": 1100
  },
  {
    "id": 5,
    "category": "paintings",
    "image": "artwork-05.jpg",
    "title": {
      "en": "Tanoura",
      "ar": "تنورة"
    },
    "medium": {
      "en": "Oil on canvas | 80 × 60 cm | 2026",
      "ar": "ألوان زيتية على قماش كانفاس | 80 × 60 سم | 2026"
    },
    "description": {
      "en": "A painting of a Tanoura dancer in the middle of a spin. Words in Arabic calligraphy flow along the hem of the skirt, linking the whirling to Sufi heritage and Arab identity, and turning the hem into a written story that spins with the dancer.",
      "ar": "لوحة تصوّر راقص التنورة في لحظة دوران، تنساب على أطراف التنورة كلمات بالخط العربي، ليرتبط الدوران بالموروث الصوفي والهوية العربية، وتجعل الحاشية حكاية مكتوبة تدور مع الراقص."
    },
    "alt": "Whirling dervish in a white skirt against a brushy blue background",
    "width": 802,
    "height": 1100
  },
  {
    "id": 6,
    "category": "paintings",
    "image": "artwork-06.jpg",
    "title": {
      "en": "Memory of Colors",
      "ar": "ذاكرة الألوان"
    },
    "medium": {
      "en": "Oil on canvas | 90 × 120 cm | 2026",
      "ar": "ألوان زيتية على قماش كانفاس | 90 × 120 سم | 2026"
    },
    "description": {
      "en": "An expressive abstraction in which colors move across the surface of the canvas in free, dense brushstrokes, like memories piling up layer upon layer.",
      "ar": "تجريد تعبيري تتحرك فيه الألوان على سطح اللوحة بضربات فرشاة حرة وكثيفة، كأنها ذكريات تتراكم طبقة فوق أخرى."
    },
    "alt": "Abstract painting with swirls of blue, yellow, red and white and gold drips",
    "width": 622,
    "height": 850
  },
  {
    "id": 7,
    "category": "drawing",
    "image": "artwork-07.jpg",
    "title": {
      "en": "Pencil portrait study on paper",
      "ar": "دراسة بورتريه بالقلم الرصاص على ورق"
    },
    "medium": {
      "en": "Pencil on Canson paper, 300 gsm | A4 (21 × 29.7 cm) | 2026",
      "ar": "ورق كانسون 300 جم، مقاس A4 | 21 × 29.7 سم | 2026"
    },
    "description": {
      "en": "",
      "ar": ""
    },
    "alt": "Pencil portrait study of a woman’s face with winged eyeliner and dark lips",
    "width": 644,
    "height": 806
  },
  {
    "id": 8,
    "category": "drawing",
    "image": "artwork-08.jpg",
    "title": {
      "en": "Ballerina",
      "ar": "باليرينا"
    },
    "medium": {
      "en": "White charcoal on black Canson paper | A4 (21 × 29.7 cm) | 2026",
      "ar": "رسم بقلم الفحم الأبيض على ورق كانسون أسود | A4 (21 × 29.7 سم) | 2026"
    },
    "description": {
      "en": "",
      "ar": ""
    },
    "alt": "White charcoal drawing of a ballet pointe shoe on black paper",
    "width": 567,
    "height": 808
  },
  {
    "id": 9,
    "category": "paintings",
    "image": "artwork-09.jpg",
    "title": {
      "en": "Mona Lisa",
      "ar": "موناليزا"
    },
    "medium": {
      "en": "Acrylic on canvas, with black thread | 20 × 20 cm | 2025",
      "ar": "أكريليك على قماش كانفاس، مع خيط أسود | 20 × 20 سم | 2025"
    },
    "description": {
      "en": "",
      "ar": ""
    },
    "alt": "Line drawing of a seated figure stitched in black thread over blocks of yellow, tan and pink",
    "width": 570,
    "height": 584
  },
  {
    "id": 10,
    "category": "islamic",
    "image": "artwork-10.jpg",
    "title": {
      "en": "Geometric Illusion",
      "ar": "تكوين هندسي"
    },
    "medium": {
      "en": "Wood veneer marquetry | 30 × 30 cm | 2023",
      "ar": "تطعيم هندسي بقشرة الخشب | 30 × 30 سم | 2023"
    },
    "description": {
      "en": "A geometric panel made with the art of marquetry (geometric inlay), crafted from wood veneer.",
      "ar": "لوحة هندسية بتقنية فن التطعيم / التعشيق الهندسي، مصنوعة من قشورة الخشب."
    },
    "alt": "Wood marquetry panel with a geometric pattern in light and dark veneers",
    "width": 736,
    "height": 781
  },
  {
    "id": 11,
    "category": "islamic",
    "image": "artwork-11.jpg",
    "title": {
      "en": "Islamic Architecture",
      "ar": "عمارة إسلامية"
    },
    "medium": {
      "en": "Hand-cut mixed materials in a wooden frame | 30 × 40 cm | 2023",
      "ar": "تفريغ يدوي وخامات متعددة داخل إطار خشبي | 30 × 40 سم | 2023"
    },
    "description": {
      "en": "A sculptural artwork inspired by the beauty of Islamic architecture and the details of domes and minarets, using hand-cut fretwork for the geometric ornament and combining contrasting materials: shades of gold, glossy silver foils, and touches of royal blue.",
      "ar": "عمل فني مجسم يستلهم جماليات العمارة الإسلامية وتفاصيل القباب والمآذن بتقنية التفريغ اليدوي للزخارف الهندسية، مع دمج خامات متباينة تجمع بين الدرجات الذهبية، والرقائق الفضية اللامعة، ولمسات اللون الأزرق الملكي."
    },
    "alt": "Framed paper and metal cutout of a mosque with domes and minarets",
    "width": 1053,
    "height": 796
  },
  {
    "id": 12,
    "category": "islamic",
    "image": "artwork-12.jpg",
    "title": {
      "en": "Floral Fretwork",
      "ar": "زخرفة نباتية مفرغة"
    },
    "medium": {
      "en": "Hand-pierced natural wood, cut with a fretsaw | 15 × 15 cm | 2026",
      "ar": "تفريغ يدوي على الخشب الطبيعي باستخدام منشار الأركت | 15 × 15 سم | 2026"
    },
    "description": {
      "en": "An ornamental unit inspired by Islamic art, with a refined geometric and floral symmetry, made entirely by hand with precise fretwork (arquette) to bring out the beauty of the wood’s natural grain and the interplay of void and mass.",
      "ar": "وحدة زخرفية مستلهمة من الفن الإسلامي بتناظر هندسي ونباتي متقن، منفذة يدوياً بالكامل بتقنية النشر الدقيق (الأركت) لإبراز جماليات العروق الطبيعية للخشب وتفاصيل الفراغ والكتلة."
    },
    "alt": "Wooden panel with a pierced geometric pattern beside a coping saw",
    "width": 1100,
    "height": 672
  },
  {
    "id": 13,
    "category": "islamic",
    "image": "artwork-13.jpg",
    "title": {
      "en": "Floral Motif",
      "ar": "وحدة زخرفية نباتية"
    },
    "medium": {
      "en": "Hand-pierced brass | 15 × 15 cm | 2026",
      "ar": "تفريغ يدوي على النحاس الأصفر | 15 × 15 سم | 2026"
    },
    "description": {
      "en": "A square ornamental unit inspired by Islamic art, with a refined floral and geometric symmetry, made by hand using precise fretwork (arquette) on a brass plate to bring out the visual balance between metal mass and void.",
      "ar": "وحدة زخرفية مربعة مستلهمة من الفن الإسلامي بتناظر نباتي وهندسي متقن، منفذة يدوياً بتقنية النشر الدقيق (الأركت) على صفيحة من النحاس الأصفر لإبراز التوازن البصري بين الكتلة المعدنية والفراغ."
    },
    "alt": "Square brass plate with pierced floral ornament",
    "width": 826,
    "height": 844
  },
  {
    "id": 14,
    "category": "islamic",
    "image": "artwork-14.jpg",
    "title": {
      "en": "Minaret & Mashrabiya",
      "ar": "مئذنة ومشربية"
    },
    "medium": {
      "en": "Hand-shaped and pierced metals on natural wood (brass, hammered red copper, wood) | 25 × 40 cm | 2023",
      "ar": "تشكيل يدوي وتفريغ معادن على خشب طبيعي (نحاس أصفر، نحاس أحمر مطروق، وخشب) | 25 × 40 سم | 2023"
    },
    "description": {
      "en": "A wall-mounted architectural piece inspired by the beauty of Islamic and old Cairene architecture. It combines the precision of hand-cut fretwork (arquette) in brass and wood with the art of hammering red copper, to bring out the details of the balconies and Islamic arches.",
      "ar": "مجسم معماري جداري مستوحى من جماليات العمارة الإسلامية والقاهرية القديمة، يدمج بين دقة التفريغ اليدوي (الأركت) في النحاس الأصفر والخشب، وفن الطرق على النحاس الأحمر لإبراز تفاصيل الشرفات والعقود الإسلامية."
    },
    "alt": "Wall piece in wood, copper and brass with a balcony and pierced arabesque panels",
    "width": 630,
    "height": 1014
  },
  {
    "id": 15,
    "category": "islamic",
    "image": "artwork-15.jpg",
    "title": {
      "en": "Side Profile Portrait",
      "ar": "بورتريه جانبي"
    },
    "medium": {
      "en": "Relief carving in white plaster | 25 × 35 cm | 2024",
      "ar": "نحت بارز على الجبس الأبيض | 25 × 35 سم | 2024"
    },
    "description": {
      "en": "A sculptural wall piece, a side-profile portrait with calm features and simplified, flowing lines. It relies on the purity of white and soft gradations of light and shadow to bring out the depth of the composition and the details of the face.",
      "ar": "جدارية نحتية لبورتريه جانبي بملامح هادئة وخطوط انسيابية مبسطة، تعتمد على نقاء اللون الأبيض وتدرجات الضوء والظل الناعمة لإبراز عمق التكوين وتفاصيل الوجه."
    },
    "alt": "White plaster relief of a woman’s profile wearing a headscarf",
    "width": 708,
    "height": 968
  }
]

export default artworks