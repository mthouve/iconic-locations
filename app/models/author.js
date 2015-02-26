import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  emailAddress: DS.attr('string'),
  profileImageUrl: DS.attr('string'),
  posts: DS.hasMany('post')
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Brian Barrett',
      emailAddress: 'BrainSBarrett@jourrapide.com',
      profileImageUrl: 'http://s3.amazonaws.com/uifaces/faces/twitter/cacique/73.jpg',
      posts: [1]
    },
    {
      id: 2,
      name: 'Janice Collins',
      emailAddress: 'JaniceRCollins@dayrep.com',
      profileImageUrl: 'http://s3.amazonaws.com/uifaces/faces/twitter/visionarty/73.jpg',
      posts: [2]
    },
    {
      id: 3,
      name: 'Emma Klein',
      emailAddress: 'EmmaSKlein@teleworm.us',
      profileImageUrl: 'http://s3.amazonaws.com/uifaces/faces/twitter/thisisvandie/73.jpg',
      posts: [3]
    },
    {
      id: 4,
      name: 'Scott West',
      emailAddress: 'ScottBWest@rhyta.com',
      profileImageUrl: 'http://s3.amazonaws.com/uifaces/faces/twitter/lukekndy/73.jpg',
      posts: [4]
    },
    {
      id: 5,
      name: 'Lisa Davis',
      emailAddress: 'LisaBDavis@jourrapide.com',
      profileImageUrl: 'http://s3.amazonaws.com/uifaces/faces/twitter/samihah/73.jpg',
      posts: [5]
    }
  ]
});
