export default {
  type: 'document',
  name: 'movie',
  title: 'Film',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Tittel',
      description: 'Fyll inn filmtittel',
    },
    {
      type: 'image',
      name: 'poster',
      title: 'Plakat',
      description: 'Legg plakatbildet inn',
    },
    {
      type: 'array',
      name: 'actor',
      title: 'Skuespiller',
      description: 'Hent skuespillere',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'actor'
            },
          ]
        },
      ],
    },
  ],
}

//Før:
// const movie = {
//     title: 'movie',
//     name: 'movie',
//     type: 'document',
//     fields: [
//     {
//     name: 'myMovie',  
//     title: 'string',
//     actor: 'reference',
//     type: 'movie',
//     current: 'Baywatch'
//     }
//   ]
// }

// export default movie;
