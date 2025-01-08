import { CustomMDX } from '@/components/mdx';
import ScrollToHash from '@/components/ScrollToHash';
import { baseURL } from '@/config/config';
import { person } from '@/content/shared/person';
import { AvatarGroup, Button, Flex, Heading, SmartImage, Text } from '@/once-ui/components';
import { formatDate } from '@/utils/formatDate';
import { getPosts } from '@/utils/utils';
import { notFound } from 'next/navigation';

interface WorkParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {

  // Create an array to store all posts from all locales
  const allPosts: { slug: string }[] = [];

  const posts = getPosts(['src', 'content', 'tech', 'projects']);
  allPosts.push(...posts.map(post => ({
    slug: post.slug,
  })));

  return allPosts;
}

export function generateMetadata({ params: { slug } }: WorkParams) {
  let post = getPosts(['src', 'content', 'tech', 'projects']).find((post) => post.slug === slug)

  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    images,
    image,
    team,
  } = post.metadata
  let ogImage = image
    ? `https://${baseURL}${image}`
    : `https://${baseURL}/og?title=${title}`;

  return {
    title,
    description,
    images,
    team,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://${baseURL}/tech/hustle/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Project({ params }: WorkParams) {
  let post = getPosts(['src', 'content', 'tech', 'projects']).find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const avatars = post.metadata.team?.map((person) => ({
    src: person.avatar,
  })) || [];

  return (
    <Flex
      as="section"
      fillWidth maxWidth="m"
      direction="column" alignItems="center"
      gap="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://${baseURL}${post.metadata.image}`
              : `https://${baseURL}/og?title=${post.metadata.title}`,
            url: `https://${baseURL}/tech/hustle/${post.slug}`,
            author: {
              '@type': 'Person',
              name: person.name,
            },
          }),
        }}
      />
      <Flex
        fillWidth maxWidth="s" gap="16"
        direction="column">
        <Button
          href={`/tech/hustle`}
          variant="tertiary"
          size="s"
          prefixIcon="chevronLeft">
          Projects
        </Button>
        <Heading
          variant="display-strong-s">
          {post.metadata.title}
        </Heading>
      </Flex>
      {post.metadata.images.length > 0 && (
        <SmartImage
          aspectRatio="16 / 9"
          radius="m"
          alt="image"
          src={post.metadata.images[0]} />
      )}
      <Flex style={{ margin: 'auto' }}
        as="article"
        maxWidth="s" fillWidth
        direction="column">
        <Flex
          gap="12" marginBottom="24"
          alignItems="center">
          {post.metadata.team && (
            <AvatarGroup
              reverseOrder
              avatars={avatars}
              size="m" />
          )}
          <Text
            variant="body-default-s"
            onBackground="neutral-weak">
            {formatDate(post.metadata.publishedAt)}
          </Text>
        </Flex>
        <CustomMDX source={post.content} />
      </Flex>
      <ScrollToHash />
    </Flex>
  )
}