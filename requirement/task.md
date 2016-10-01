What we are looking for:
- Attention to visual detail.
- Clean, concise and understandable code.


Task specifications:
- Create a page that searches when you type in the search field.
- Search list is populated with items that match site name or category name.
- Use whatever external libraries make your job easier.
- Feel free to use images sliced from the attached psd/ai files.
- Complete the task using any preferred javascript MVC framework and/or jQuery.
- Sample data is at the end of this email.

Workflow
1. Focus on the search input field.
2. Search will fire when you start typing (maybe put a debounce in, but not required) which will show the list of sites matching.
3. Commas will separate terms to search for. e.g. "Dogs and Cats, Frogs" will return sites that have a name or category containing the term 'Dogs and Cats' or 'Frogs'.




Structure of data:
sites = [
  {
    "id": 1,
    "siteName": "SurferMag",
    "siteUrl": "www.surfermag.com",
    "description": "This is the description for SurferMag",
    "categoryIds": [
      2
    ]
  },
  {
    "id": 2,
    "siteName": "Ebay",
    "siteUrl": "www.ebay.com.au",
    "description": "This is the description for ebay",
    "categoryIds": [
      1
    ]
  },
  {
    "id": 3,
    "siteName": "Robs UI Tips",
    "siteUrl": "www.awesomeui.com.au",
    "description": "This is the description for the best site in the world. It is the best:)",
    "categoryIds": [
      4, 3
    ]
  },
  {
    "id": 4,
    "siteName": "Table Tennis Tips - How to not come runners up",
    "siteUrl": "www.ttt.com",
    "description": "This is the description for Table Tennis Tips",
    "categoryIds": [
      1, 2, 3, 4
     ]
  }
]


categories = [
  {
    id: 1,
    description: "Arts & Entertainment"
  },
  {
    id: 2,
    description: "Automotive"
  },
  {
    id: 3,
    description: "Business"
  },
  {
    id: 4,
    description: "Careers"
  }
]