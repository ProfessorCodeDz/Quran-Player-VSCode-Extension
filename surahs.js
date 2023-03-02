const surahs = [
  {
      "id": 1,
      "name": "Al-Fatihah "
  },
  {
      "id": 2,
      "name": "Al-Baqarah "
  },
  {
      "id": 3,
      "name": "Al-Imran "
  },
  {
      "id": 4,
      "name": "An-Nisa' "
  },
  {
      "id": 5,
      "name": "Al-Ma'idah "
  },
  {
      "id": 6,
      "name": "Al-An'am "
  },
  {
      "id": 7,
      "name": "Al-A'raf "
  },
  {
      "id": 8,
      "name": "Al-Anfal "
  },
  {
      "id": 9,
      "name": "At-Taubah "
  },
  {
      "id": 10,
      "name": "Yunus "
  },
  {
      "id": 11,
      "name": "Hood "
  },
  {
      "id": 12,
      "name": "Yusuf "
  },
  {
      "id": 13,
      "name": "Ar-Ra'd "
  },
  {
      "id": 14,
      "name": "Ibrahim "
  },
  {
      "id": 15,
      "name": "Al-Hijr "
  },
  {
      "id": 16,
      "name": "An-Nahl "
  },
  {
      "id": 17,
      "name": "Al-Isra "
  },
  {
      "id": 18,
      "name": "Al-Kahf "
  },
  {
      "id": 19,
      "name": "Maryam "
  },
  {
      "id": 20,
      "name": "Ta­Ha "
  },
  {
      "id": 21,
      "name": "Al-Anbiya' "
  },
  {
      "id": 22,
      "name": "Al-Hajj "
  },
  {
      "id": 23,
      "name": "Al-Mu'minun "
  },
  {
      "id": 24,
      "name": "An-Nur "
  },
  {
      "id": 25,
      "name": "Al-Furqan "
  },
  {
      "id": 26,
      "name": "Ash-Shu'ara' "
  },
  {
      "id": 27,
      "name": "An-Naml "
  },
  {
      "id": 28,
      "name": "Al-Qasas "
  },
  {
      "id": 29,
      "name": "Al-'Ankabut "
  },
  {
      "id": 30,
      "name": "Ar­Room"
  },
  {
      "id": 31,
      "name": "Luqman "
  },
  {
      "id": 32,
      "name": "As­Sajdah "
  },
  {
      "id": 33,
      "name": "Al­Ahzab "
  },
  {
      "id": 34,
      "name": "Saba' "
  },
  {
      "id": 35,
      "name": "Fatir "
  },
  {
      "id": 36,
      "name": "Ya­Sin "
  },
  {
      "id": 37,
      "name": "As-Saffat "
  },
  {
      "id": 38,
      "name": "Sad "
  },
  {
      "id": 39,
      "name": "Az-Zumar "
  },
  {
      "id": 40,
      "name": "Ghafir "
  },
  {
      "id": 41,
      "name": "Fussilat "
  },
  {
      "id": 42,
      "name": "Ash-Shura "
  },
  {
      "id": 43,
      "name": "Az-Zukhruf "
  },
  {
      "id": 44,
      "name": "Ad-Dukhan "
  },
  {
      "id": 45,
      "name": "Al-Jathiya "
  },
  {
      "id": 46,
      "name": "Al-Ahqaf "
  },
  {
      "id": 47,
      "name": "Muhammad "
  },
  {
      "id": 48,
      "name": "Al-Fath "
  },
  {
      "id": 49,
      "name": "Al-Hujurat "
  },
  {
      "id": 50,
      "name": "Qaf "
  },
  {
      "id": 51,
      "name": "Az-Zariyat "
  },
  {
      "id": 52,
      "name": "At-Tur "
  },
  {
      "id": 53,
      "name": "An-Najm "
  },
  {
      "id": 54,
      "name": "Al-Qamar "
  },
  {
      "id": 55,
      "name": "Ar-Rahman "
  },
  {
      "id": 56,
      "name": "Al-Waqi'ah "
  },
  {
      "id": 57,
      "name": "Al-Hadid "
  },
  {
      "id": 58,
      "name": "Al-Mujadilah "
  },
  {
      "id": 59,
      "name": "Al-Hashr "
  },
  {
      "id": 60,
      "name": "Al-Mumtahinah "
  },
  {
      "id": 61,
      "name": "As-Saff "
  },
  {
      "id": 62,
      "name": "Al-Jumu'ah "
  },
  {
      "id": 63,
      "name": "Al-Munafiqun "
  },
  {
      "id": 64,
      "name": "At-Taghabun "
  },
  {
      "id": 65,
      "name": "At-Talaq "
  },
  {
      "id": 66,
      "name": "At-Tahrim "
  },
  {
      "id": 67,
      "name": "Al-Mulk "
  },
  {
      "id": 68,
      "name": "Al-Qalam "
  },
  {
      "id": 69,
      "name": "Al-Haqqah "
  },
  {
      "id": 70,
      "name": "Al-Ma'arij "
  },
  {
      "id": 71,
      "name": "Nooh "
  },
  {
      "id": 72,
      "name": "Al-Jinn "
  },
  {
      "id": 73,
      "name": "Al-Muzzammil "
  },
  {
      "id": 74,
      "name": "Al-Muddaththir "
  },
  {
      "id": 75,
      "name": "Al-Qiyamah "
  },
  {
      "id": 76,
      "name": "Al-Insan "
  },
  {
      "id": 77,
      "name": "Al-Mursalat "
  },
  {
      "id": 78,
      "name": "An-Naba' "
  },
  {
      "id": 79,
      "name": "An-Nazi'at "
  },
  {
      "id": 80,
      "name": "Quran,Audio,Library,MP3,Quran,Muftah,Alsaltany"
  },
  {
      "id": 81,
      "name": "At-Takwir "
  },
  {
      "id": 82,
      "name": "Al-Infitar "
  },
  {
      "id": 83,
      "name": "Al-Mutaffifin "
  },
  {
      "id": 84,
      "name": "Al-Inshiqaq "
  },
  {
      "id": 85,
      "name": "Al-Buruj "
  },
  {
      "id": 86,
      "name": "At-Tariq "
  },
  {
      "id": 87,
      "name": "Al-A'la "
  },
  {
      "id": 88,
      "name": "Al-Ghashiyah "
  },
  {
      "id": 89,
      "name": "Al-Fajr "
  },
  {
      "id": 90,
      "name": "Al-Balad "
  },
  {
      "id": 91,
      "name": "Ash-Shams "
  },
  {
      "id": 92,
      "name": "Al-Lail "
  },
  {
      "id": 93,
      "name": "Ad-Duha "
  },
  {
      "id": 94,
      "name": "Ash-Sharh "
  },
  {
      "id": 95,
      "name": "At-Tin "
  },
  {
      "id": 96,
      "name": "Al-'Alaq "
  },
  {
      "id": 97,
      "name": "Al-Qadr "
  },
  {
      "id": 98,
      "name": "Al-Baiyinah "
  },
  {
      "id": 99,
      "name": "Az-Zalzalah "
  },
  {
      "id": 100,
      "name": "Al-'Adiyat "
  },
  {
      "id": 101,
      "name": "Al-Qari'ah "
  },
  {
      "id": 102,
      "name": "At-Takathur "
  },
  {
      "id": 103,
      "name": "Al-'Asr "
  },
  {
      "id": 104,
      "name": "Al-Humazah "
  },
  {
      "id": 105,
      "name": "Al-Fil "
  },
  {
      "id": 106,
      "name": "Quraish "
  },
  {
      "id": 107,
      "name": "Al-Ma'un "
  },
  {
      "id": 108,
      "name": "Al-Kauthar "
  },
  {
      "id": 109,
      "name": "Al-Kafirun "
  },
  {
      "id": 110,
      "name": "An-Nasr "
  },
  {
      "id": 111,
      "name": "Al-Masad "
  },
  {
      "id": 112,
      "name": "Al-Ikhlas "
  },
  {
      "id": 113,
      "name": "Al-Falaq "
  },
  {
      "id": 114,
      "name": "An-Nas"
  }
]

exports.surahs = surahs ;