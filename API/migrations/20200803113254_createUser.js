
exports.up = function(knex) {
  return knex.schema.createTable('users', t => {
    t.increments('id').primary() 
    t.timestamps(true, true)
    t.string('username', 50).unique() 
    t.string('password_digest') 
    t.string('name')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
