import { ApolloServer, gql } from "apollo-server-micro";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

// Games have names
// Games have a list of associated campaigns
// Campaigns have names
// Campaigns have associated statistics
// statistics have names and visualisations
// visualisations are associated with a specififc time and an image
// time is a descritpive name because it can be varied ie. campaign number versus date
// image can be represented as image url

const typeDefs = gql`
    type Query {
        games: [Game!]
    }

    type Game {
        name: String!
        campaigns: [Campaign!]
    }

    type Campaign {
        name: String!
        stats: [Statistic!]
    }

    type Statistic {
        name: String!
        visualisations: [Visualisation!]
    }

    type Visualisation {
        timeRange: String!
        imageURL: String!
    }
`;

const resolvers = {
    Query: {
        games: async (_parent, _args, context) => {
            return context.prisma.game.findMany();
        }
    },

    Game: {
        name: (game, _args, _context) => {
            return game.name;
        },
        campaigns: (game, _args, context) => {
            return context.prisma.campaign.findMany({
                where: { gameId: game.id }
            });
        }
    },

    Campaign: {
        name: (campaign, _args, _context) => campaign.name,
        stats: (campaign, _args, context) => {
            return context.prisma.statistic.findMany({
                where: { campaignId: campaign.id}
            });
        }
    },

    Statistic: {
        name: (stat, _args, _context) => stat.name,
        visualisations: (stat, _args, context) => {
            return context.prisma.visualisation.findMany({
                where: { statisticId: stat.id}
            });
        }
    },

    Visualisation: {
        timeRange: (visualisation, _args, _context) => visualisation.timeRange,
        imageURL: (visualisation, _args, _context) => visualisation.imageURL
    }

};

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        prisma,
    },
    playground: true
});

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
    api: {
        bodyParser: false
    }
};

export default handler