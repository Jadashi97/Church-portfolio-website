// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// import the other schemas
import author from './author';
import post from './post';
import blockContent from './blockContent';
import project from './project';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([

    // the following are document types which will appear 
  // in the studio
  post,
  author,
  project,
  // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  blockContent,
  ]),

})
