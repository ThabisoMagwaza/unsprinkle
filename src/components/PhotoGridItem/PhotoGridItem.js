import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const srcAvif = src.replace('.jpg', '.avif');
  const srcAvif2x = src.replace('.jpg', '@2x.avif');
  const srcAvir3x = src.replace('.jpg', '@3x.avif');

  const srcJpg2x = src.replace('.jpg', '@2x.jpg');
  const srcJpg3x = src.replace('.jpg', '@3x.jpg');

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source srcSet={`${srcAvif}, ${srcAvif2x} 2x, ${srcAvir3x} 3x`} />
          <source srcSet={`${src}, ${srcJpg2x} 2x, ${srcJpg3x} 3x`} />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;

  object-fit: cover;
`;

const Tags = styled.ul`
  flex-wrap: wrap;
  gap: 8px;
  text-overflow: ellipsis;
  overflow: hidden;

  padding: 4px 0;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  display: inline;
  white-space: nowrap;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export default PhotoGridItem;
