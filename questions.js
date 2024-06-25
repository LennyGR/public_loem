var commonQuestions = [
  {
    letter: "L",
    isMultiple: true,
    options: [
      {
        subscript: "0",
        label:
          "No intervention is performed on the anterior and posterior ethmoid structures. This may occur when no intentional intervention on bones is required (e.g., simple polypectomy).",
      },
      {
        subscript: "1",
        label:
          "The first lamella involves the removal of the uncinate process and the agger nasi cell, along with other anterior ethmoidal cells that are superior to the agger nasi if present.",
      },
      {
        subscript: "2",
        label:
          "The second lamella refers to the removal of the ethmoid bulla, as well as any suprabullar and retrobullar cells and recesses that may be present.",
      },
      {
        subscript: "3",
        label:
          "The third lamella includes the opening of the vertical plate of the basal lamella of the middle turbinate (MT) and the removal of any bony septa of the posterior ethmoidal cells.",
      },
    ],
  },
  {
    letter: "O",
    isMultiple: true,
    options: [
      {
        subscript: "0",
        label:
          "No intervention is performed on any of the sinus ostia. This category includes cases that have a permeable ostium, or cases in which the ostium/opening was intentionally left untouched.",
      },
      {
        subscript: "m",
        label: "Enlargement of the maxillary sinus ostium.",
      },
      {
        subscript: "f",
        label:
          "Draf I and IIa frontal sinus surgery or Grades 0 to 4 of the Classification of the Extent of Endoscopic Frontal Sinus Surgery (EFSS).",
      },
      {
        subscript: "s",
        label:
          "Enlargement techniques performed on the sphenoid sinus ostium, regardless of the specific surgical approach used (modified type I sinusotomy, not extending upward to the skull base).",
      },
    ],
  },
  {
    letter: "E",
    isMultiple: true,
    options: [
      {
        subscript: "0",
        label:
          "No extended intervention is performed on the walls of any sinus.",
      },
      {
        subscript: "m",
        label:
          "Widening of the medial wall of the maxillary sinus beyond middle meatal antrostomy, including partial or total resection of the fontanelle (transnasal endoscopic partial maxillectomy type 1(34)).",
      },
      {
        subscript: "f",
        label:
          "Significant opening of the frontal sinus floor through Draf IIb or Draf III or grades 5 – 6 of EFSS classification.",
      },
      {
        subscript: "s",
        label:
          "Enlargement of the anterior wall of the sphenoid sinus, including bone removal around the ostium (type II and III sinusotomies).",
      },
      {
        subscript: "t",
        label: "Partial removal, trimming or ablation of the MT.",
      },
    ],
  },
  {
    letter: "M",
    isMultiple: false,
    options: [
      {
        subscript: "0",
        label:
          "Cases with no mucosal removal, except for the enlargement of the sinus ostia/openings.",
      },
      {
        subscript: "f",
        label:
          "The main objective is to preserve mucociliary function and ventilation of the paranasal sinuses, regardless of the performance on the bone. It also aims to facilitate the installation of topical treatments. This category encompasses the original criterion of functional ESS aimed at removing only macroscopically irreversibly diseased mucosa.",
      },
      {
        subscript: "r",
        label:
          "The objective is to replace all sinus mucosa with healthy local mucosa, regardless of the intervention on the bone. This procedure is considered a reboot approach following a complete mucosal removal.",
      },
      {
        subscript: "m",
        label:
          "The objective is to create neomucosa from freely grafted healthy mucosa covering a significant part of the excised mucosal area in addition to radical ESS. This type of surgery is classified as mucoplasty regenerative surgery.",
      },
    ],
  },
];

var revisionQuestions = [
  {
    letter: "L",
    isMultiple: true,
    options: [
      {
        subscript: "1a",
        label:
          "Completely absent of the uncinate process and the agger nasi cell, along with other anterior ethmoidal cells that are superior to the agger nasi if present.",
      },
      {
        subscript: "2a",
        label:
          "Completely absent of ethmoid bulla, as well as any suprabullar and retrobullar cells and recesses that might be present.",
      },
      {
        subscript: "3a",
        label:
          "Completely absent of vertical plate of the basal lamella of the MT and the removal of any bony septa of the posterior ethmoidal cells.",
      }
    ],
  },
  {
    letter: "O",
    isMultiple: true,
    options: [
      {
        subscript: "ma",
        label: "Previously enlarged/ opened maxillary ostium.",
      },
      {
        subscript: "fa",
        label:
          "Previously enlarged/ opened frontal sinus (Draf IIa or Grade 4 of the EFSS).",
      },
      {
        subscript: "sa",
        label:
          "Previously enlarged / opened sphenoid ostium (partial resection of sphenoid rostrum, not extending upward to the skull base).",
      },
    ],
  },
  {
    letter: "E",
    isMultiple: true,
    options: [
      {
        subscript: "am",
        label:
          "Previously widening of the medial wall of the maxillary sinus beyond middle meatal antrostomy, including partial or total resection of the fontanelle (transnasal endoscopic partial maxillectomy type 1).",
      },
      {
        subscript: "af",
        label:
          "Previously significant opening of the frontal sinus (Draf III or grades 5 – 6 of EFSS classification)",
      },
      {
        subscript: "as",
        label:
          "Previously enlargement of the anterior wall of the sphenoid sinus, including bone removal around the ostium (type II and III sinusotomies).",
      },
      {
        subscript: "at",
        label: "Completely previous ablation of the MT.",
      },
    ],
  }
];

var labels = {
  isMultiple: "Multiple Choice",
  noMultiple: "Single Choice",
  P_ESS: "Primary endoscopic sinus surgery",
  R_ESS: "Revision endoscopic sinus surgery",
};

var screens = [
  {
    id: "L",
    title: "Lamella",
  },
  {
    id: "O",
    title: "Ostium",
  },
  {
    id: "E",
    title: "Extent",
  },
  {
    id: "M",
    title: "Mucosa",
  },
];
