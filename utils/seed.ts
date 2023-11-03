const {
  seedResources,
  seedTags,
  seedLanguages,
  seedFrameworks,
} = require('./seedData.ts');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const main = async () => {
  for (const tag of seedTags) {
    await prisma.tag.upsert({
      where: { id: tag.id.toString() },
      update: {
        name: tag.name,
        createdAt: tag.createdAt,
        updatedAt: tag.updatedAt,
      },
      create: {
        id: tag.id.toString(),
        name: tag.name,
        createdAt: tag.createdAt,
        updatedAt: tag.updatedAt,
      },
    });
  }

  for (const resource of seedResources) {
    await prisma.resource.upsert({
      where: { id: resource.id.toString() },
      update: {
        name: resource.name,
        subtitle: resource.subtitle,
        type: resource.type,
        external_url: resource.external_url,
        contentType: resource.contentType,
        createdAt: resource.createdAt,
        updatedAt: resource.updatedAt,
        tags: {
          // @ts-ignore
          connect: resource.tags.map((tagId) => ({
            id: tagId.toString(),
          })),
        },
      },
      create: {
        id: resource.id.toString(),
        name: resource.name,
        subtitle: resource.subtitle,
        type: resource.type,
        external_url: resource.external_url,
        contentType: resource.contentType,
        createdAt: resource.createdAt,
        updatedAt: resource.updatedAt,
        tags: {
          // @ts-ignore
          connect: resource.tags.map((tagId) => ({
            id: tagId.toString(),
          })),
        },
      },
    });
  }

  for (const language of seedLanguages) {
    await prisma.language.upsert({
      where: { id: language.id.toString() },
      update: {
        name: language.name,
        logo_url: language.logo_url,
        createdAt: language.createdAt,
        updatedAt: language.updatedAt,
      },
      create: {
        id: language.id.toString(),
        name: language.name,
        logo_url: language.logo_url,
        createdAt: language.createdAt,
        updatedAt: language.updatedAt,
      },
    });
  }

  for (const frameworks of seedFrameworks) {
    await prisma.framework.upsert({
      where: { id: frameworks.id.toString() },
      update: {
        name: frameworks.name,
        logo_url: frameworks.logo_url,
        createdAt: frameworks.createdAt,
        updatedAt: frameworks.updatedAt,
      },
      create: {
        id: frameworks.id.toString(),
        name: frameworks.name,
        logo_url: frameworks.logo_url,
        createdAt: frameworks.createdAt,
        updatedAt: frameworks.updatedAt,
      },
    });
  }
};

main();
