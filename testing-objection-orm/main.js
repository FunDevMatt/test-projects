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

    static get relationMappings() {
        return {
            pets: {
                relation: Model.HasManyRelation,
                modelClass: Pet,
                join: {
                    from: 'people.id',
                    to: 'pets.ownerId'
                }
            }
        };
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





class Pet extends Model {
    static get tableName() {
        return 'pets';
    }

    static get relationMappings() {
        return {
            owner: {
                relation: Model.BelongsToOneRelation,
                modelClass: Person,
                join: {
                    from: 'pets.ownerId',
                    to: 'peeople.id'
                }
            }
        };
    }
}

async function createPetsTable() {
    if (await knex.schema.hasTable('pets')) {
        return;
    }

    await knex.schema.createTable('pets', table => {
        table.increments('id').primary();
        table.bigInteger('ownerId').notNullable
        table.string('name');
    });
}



let runStartUp = async () => {
    try {
        await createSchema();
        await createPetsTable()
        knex.destroy();
    } catch (e) {
        console.log(e)
    }
}

let testQueries = async () => {
    const person = await Person.query().findById(1);


    const people = await Person.query()
        .eager('pets')
        .modifyEager('pets', builder => {
            builder.where('name', '=', 'Toby').select('ownerId', 'name')
        });


    console.log(people[0].pets)

}

testQueries()
