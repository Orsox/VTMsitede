var app = angular.module("site");

app.service("ClanService", function(){

  this.filterClans = filterClans;

  this.clanFilters =
  [
    "Alle", "Die Dreizehn", "Camarilla", "Sabbat", "Die Unabhängigen", "Alle Clans",
    "Alle Blutlinien", "Camarilla (angehörige Clans)", "Sabbat (angehörige Clans)",
    "Dunkles Zeitalter", "Hohe Clans", "Niedere Clans"
  ];

  this.clanList = [{
      id: 0, name: "Ahrimanes",
      filters: ["Sabbat", "Alle Blutlinien", "Dunkles Zeitalter"],
      disciplines: ["Tierhaftigkeit", "Stärke", "Spiritus"]
    },
    {
      id: 1, name: "Anda",
      filters: ["Die Unabhängigen", "Alle Blutlinien", "Dunkles Zeitalter"],
      disciplines: ["Tierhaftigkeit", "Seelenstärke", "Gestaltwandel"]
    },
    {
      id: 2, name: "Assamite",
      filters: ["Die Dreizehn", "Die Unabhängigen", "Alle Clans",
        "Niedere Clans", "Dunkles Zeitalter"
      ],
      disciplines: ["Geschwindigkeit", "Verdunkelung", "Quietus"]
    },
    {
      id: 3, name: "Baali",
      filters: ["Die Unabhängigen", "Alle Blutlinien", "Dunkles Zeitalter"],
      disciplines: ["Daimonion", "Verdunkelung", "Präsenz"]
    },
    {
      id: 4, name: "Blood Brothers",
      filters: ["Sabbat", "Alle Blutlinien"],
      disciplines: ["Seelenstärke", "Stärke", "Sanguinus"]
    },
    {
      id: 5, name: "Brujah",
      filters: ["Die Dreizehn", "Camarilla", "Alle Clans",
                "Camarilla (angehörige Clans)", "Hohe Clans", "Dunkles Zeitalter"],
      disciplines: ["Geschwindigkeit", "Stärke", "Präsenz"]
    },
    {
      id: 6, name: "Caitiff",
      filters: ["Alle Clans", "Dunkles Zeitalter"],
      disciplines: []
    }, {
      id: 7, name: "Cappadocian",
      filters: ["Alle Clans", "Dunkles Zeitalter", "Hohe Clans"],
      disciplines: ["Auspex", "Seelenstärke", "Nekromantie"]
    },
    {
      id: 8, name: "Children of Osiris",
      filters: ["Alle Blutlinien", "Dunkles Zeitalter"],
      disciplines: ["Bardo", "2 other disciplines learned from original clan"]
    },
    {
      id: 9, name: "Daughters of Cacophony",
      filters: ["Alle Blutlinien"],
      disciplines: ["Seelenstärke", "Melpominee", "Präsenz"]
    },
    {
      id: 10, name: "Followers of Set",
      filters: ["Die Dreizehn", "Die Unabhängigen", "Alle Clans", "Dunkles Zeitalter",
                "Niedere Clans"],
      disciplines: ["Verdunkelung", "Präsenz", "Serpentis"]
    },
    {
      id: 11, name: "Gargoyles",
      filters: ["Alle Blutlinien"],
      disciplines: ["Flight", "Seelenstärke", "Stärke", "Visceratika"]
    },
    {
      id: 12, name: "Gangrel",
      filters: ["Die Dreizehn", "Die Unabhängigen", "Alle Clans", "Niedere Clans",
                "Dunkles Zeitalter"],
      disciplines: ["Tierhaftigkeit", "Seelenstärke", "Gestaltwandel"]
    },
    {
      id: 13, name: "Giovanni",
      filters: ["Die Dreizehn", "Die Unabhängigen", "Alle Clans", "Dunkles Zeitalter"],
      disciplines: ["Beherrschung", "Nekromantie", "Stärke"]
    },
    {
      id: 14, name: "Harbingers of Skulls",
      filters: ["Sabbat", "Alle Blutlinien"],
      disciplines: ["Auspex", "Seelenstärke", "Nekromantie"]
    },
    {
      id: 15, name: "Kiasyd",
      filters: ["Alle Blutlinien", "Dunkles Zeitalter"],
      disciplines: ["Beherrschung", "Schattenspiele", "Mytherceria"]
    },
    {
      id: 16, name: "Lamia",
      filters: ["Alle Blutlinien", "Dunkles Zeitalter"],
      disciplines: ["Seelenstärke", "Nekromantie", "Stärke"]
    },
    {
      id: 17, name: "Lasombra",
      filters: ["Die Dreizehn", "Sabbat", "Alle Clans", "Sabbat (angehörige Clans)",
                "Dunkles Zeitalter", "Hohe Clans"],
      disciplines: ["Beherrschung", "Schattenspiele", "Stärke"]
    },
    {
      id: 18, name: "Lhiannan",
      filters: ["Die Unabhängigen", "Alle Blutlinien", "Dunkles Zeitalter"],
      disciplines: ["Tierhaftigkeit", "Ogham", "Präsenz"]
    },
    {
      id: 19, name: "Malkavian",
      filters: ["Die Dreizehn", "Camarilla", "Alle Clans",
                "Camarilla (angehörige Clans)", "Dunkles Zeitalter", "Niedere Clans"],
      disciplines: ["Auspex", "Irrsinn", "Verdunkelung"]
    },
    {
      id: 20, name: "Nagaraja",
      filters: ["Alle Blutlinien", "Dunkles Zeitalter"],
      disciplines: ["Auspex", "Beherrschung", "Nekromantie"]
    },
    {
      id: 21, name: "Noiad",
      filters: ["Alle Blutlinien", "Dunkles Zeitalter"],
      disciplines: ["Tierhaftigkeit", "Auspex", "Gestaltwandel"]
    },
    {
      id: 22, name: "Nosferatu",
      filters: ["Die Dreizehn", "Camarilla", "Alle Clans",
                "Camarilla (angehörige Clans)", "Dunkles Zeitalter", "Niedere Clans"],
      disciplines: ["Tierhaftigkeit", "Verdunkelung", "Stärke"]
    },
    {
      id: 23, name: "Old Clan Tzimisce",
      filters: ["Dunkles Zeitalter, Hohe Clans"],
      disciplines: ["Tierhaftigkeit", "Auspex", "Beherrschung"]
    },
    {
      id: 24, name: "Ravnos",
      filters: ["Die Dreizehn", "Die Unabhängigen", "Alle Clans", "Dunkles Zeitalter",
                "Niedere Clans"],
      disciplines: ["Tierhaftigkeit", "Schimären", "Seelenstärke"]
    },
    {
      id: 25, name: "Salubri",
      filters: ["Die Unabhängigen", "Alle Clans", "Dunkles Zeitalter"],
      disciplines: ["Auspex", "Seelenstärke", "Obeah", "Valeren"]
    },
    {
      id: 26, name: "Samedi",
      filters: ["Alle Blutlinien"],
      disciplines: ["Seelenstärke", "Verdunkelung", "Thanatosis"]
    },
    {
      id: 27, name: "Toreador",
      filters: ["Die Dreizehn", "Camarilla", "Alle Clans",
                "Camarilla (angehörige Clans)", "Dunkles Zeitalter", "Hohe Clans"],
      disciplines: ["Auspex", "Geschwindigkeit", "Präsenz"]
    },
    {
      id: 28, name: "Tremere",
      filters: ["Die Dreizehn", "Camarilla", "Alle Clans",
                "Camarilla (angehörige Clans)", "Dunkles Zeitalter", "Niedere Clans"],
      disciplines: ["Auspex", "Beherrschung", "Thaumaturgie"]
    },
    {
      id: 29, name: "True Brujah",
      filters: ["Alle Blutlinien", "Die Unabhängigen", "Dunkles Zeitalter"],
      disciplines: ["Stärke", "Präsenz", "Temporis"]
    },
    {
      id: 30, name: "Tzimisce",
      filters: ["Die Dreizehn", "Sabbat", "Alle Clans", "Sabbat (angehörige Clans)",
                "Dunkles Zeitalter", "Hohe Clans"],
      disciplines: ["Tierhaftigkeit", "Auspex", "Fleischformen"]
    },
    {
      id: 31, name: "Ventrue",
      filters: ["Die Dreizehn", "Camarilla", "Alle Clans",
                "Camarilla (angehörige Clans)", "Dunkles Zeitalter", "Hohe Clans"],
      disciplines: ["Beherrschung", "Seelenstärke", "Präsenz"]
    }
  ];

  this.filteredClanList = this.clanList;
  this.selectedClan = this.filteredClanList[0];
  this.selectedClanFilter = this.clanFilters[0];

  function filterClans(filter) {
    this.filteredClanList = [];
    if (filter === 'All') {
      this.filteredClanList = this.clanList;
      return this.filteredClanList;
    }
    for(var i = 0; i<this.clanList.length; i++){
      if(this.clanList[i].filters.includes(filter)){
        this.filteredClanList.push(this.clanList[i]);
      }
    }
    return this.filteredClanList;
  };

});
