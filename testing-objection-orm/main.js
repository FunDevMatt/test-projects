const { Model } = require('objection');
const Knex = require('knex');

const knex = Knex({
    client: 'mysql',
    connection: {
        host: 'yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'mlm6nolkgcruji2l',
        password: 'exlz1i3wqj8bugli',
        database: 'if14coz56hvngny0'
    }
});


Model.knex(knex);



class Person extends Model {
    static get tableName() {
        return 'people';
    }
}


async function createSchema() {
    if (await knex.schema.hasTable('people')) {
        return;
    }

    await knex.schema.createTable('people', table => {
        table.increments('id').primary();
        table.string('firstName');
    });
}

let populatePeople = async () => {
    await Person
        .query()
        .insert({ firstName: "Matt" })
    await Person
        .query()
        .insert({ firstName: "Greg" })
    await Person
        .query()
        .insert({ firstName: "Charles" })


}

let runStartUp = async () => {
    try {
        await createSchema();
        await populatePeople();
        knex.destroy();
    } catch (e) {
        console.log(e)
    }
}

runStartUp()


