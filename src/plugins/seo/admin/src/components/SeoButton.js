import React from 'react';
import Search from '@strapi/icons/Search';
import { Button } from '@strapi/design-system';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';

const SeoButton = () => {
  const { modifiedDat, slug } = useCMEditViewDataManager();

  const handleCheckSeo = () => {
    const urlFriendlyTitle = encodeURIComponent(modifiedData.metadata.metaTitle);
    const searchUrl = `https://www.google.com/search?=${urlFriendlyTitle}`;
    window.open(searchUrl, '_blank').focus();
  }

  if(slug ==! 'api::homepage.homepage') {
    return null
  }

  return (
    <Button variant='secondary' startIcon={<Search />}  onClick={handleCheckSeo}>Check page SEO</Button>
  );
}

export default SeoButton;
