const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const main = async () => {
    const info = await prisma.game.create({
        data:
        {
            name: "Europa Universalis 4",
            campaigns: {
                create: [
                    {
                        name: "Partition of the Commonwealth",
                        stats: {
                            create: [
                                {
                                    name: "Colored Maps",
                                    visualisations: {
                                        create: [
                                            {
                                                timeRange: "Session 1",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "Session 2",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "Session 3",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "Session 4",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "Session 5",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "Session 6",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "Session 7",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "Session 8",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "Session 9",
                                                imageURL: "Placeholder"
                                            }
                                        ]
                                    }
                                },
                                {
                                    name: "Income",
                                    visualisations: {
                                        create: [
                                            {
                                                timeRange: "1515",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1540",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1548",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1556",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1566",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1572",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1596",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1619",
                                                imageURL: "Placeholder"
                                            }
                                        ]
                                    }
                                },
                                {
                                    name: "Army Losses",
                                    visualisations: {
                                        create: [
                                            {
                                                timeRange: "1566",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1572",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1596",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1619",
                                                imageURL: "Placeholder"
                                            }
                                        ]
                                    }
                                },
                                {
                                    name: "Army Stats",
                                    visualisations: {
                                        create: [
                                            {
                                                timeRange: "1540",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1585",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1596",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1619",
                                                imageURL: "Placeholder"
                                            }
                                        ]
                                    }
                                },
                                {
                                    name: "Country Stats",
                                    visualisations: {
                                        create: [
                                            {
                                                timeRange: "1515",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1540",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1596",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1619",
                                                imageURL: "Placeholder"
                                            }
                                        ]
                                    }
                                },
                                {
                                    name: "Province Count",
                                    visualisations: {
                                        create: [
                                            {
                                                timeRange: "1540",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1556",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1585",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1619",
                                                imageURL: "Placeholder"
                                            }
                                        ]
                                    }
                                },
                                {
                                    name: "Province Dev",
                                    visualisations: {
                                        create: [
                                            {
                                                timeRange: "1548",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1556",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1566",
                                                imageURL: "Placeholder"
                                            },
                                            {
                                                timeRange: "1619",
                                                imageURL: "Placeholder"
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    })
    console.log(info)
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect()
    })