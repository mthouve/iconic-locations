import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  posts: DS.hasMany('post')
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Travel',
      posts: [1,2,3,4,5]
    },
    {
      id: 2,
      name: 'Surfing',
      posts: [1]
    },
    {
      id: 3,
      name: 'Budget',
      posts: [1]
    },
    {
      id: 4,
      name: 'Beaches',
      posts: [1]
    },
    {
      id: 5,
      name: 'Gold Coast',
      posts: [1]
    },
    {
      id: 6,
      name: 'Australia',
      posts: [1]
    },
    {
      id: 7,
      name: 'Food',
      posts: [2]
    },
    {
      id: 8,
      name: 'Small Towns',
      posts: [4]
    }
  ]
});
